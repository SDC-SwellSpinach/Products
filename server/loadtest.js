import http from 'k6/http';

import { sleep } from 'k6';

const maxProductId = 1000011;
const minProductId = Math.ceil(maxProductId * 0.9);

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const options = {
  scenarios: {
    stress_scenario: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '45s', target: 300 },
        { duration: '45s', target: 300 },
      ],
    },
  },
};

export default function () {
  const randomProductId = getRandom(minProductId, maxProductId);

  const related = {
    method: 'GET',
    url: `http://localhost:3000/products/${randomProductId}/related`,
    params: {
      tags: { name: 'GetRelatedProductsURL' },
    },
  };

  const product = {
    method: 'GET',
    url: `http://localhost:3000/products/${randomProductId}`,
    params: {
      tags: { name: 'GetProductByIdURL' },
    },
  };

  const styles = {
    method: 'GET',
    url: `http://localhost:3000/products/${randomProductId}/styles`,
    params: {
      tags: { name: 'GetProductStylesURL' },
    },
  };

  const products = {
    method: 'GET',
    url: 'http://localhost:3000/products',
    params: {
      tags: { name: 'GetProductsURL' },
    },
  };

  http.batch([related, product, styles, products]);
  // check(response, {
  //   'status is 200': (r) => r.status === 200,
  // });

  sleep(1);
}
