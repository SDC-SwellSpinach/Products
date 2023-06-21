# Products-System-Design

## General

* This project serves as the backend design for Project Atelier, an e-commerce company. 
* This server handles the Product component of the individual products. 
* The server is implemented with node.js using express.js.
* The database was created with PostgreSQL.

## Performance

The backend architecture utilizes AWS and NGINX to deploy a load balancer with caching across 3 servers. These tests are performed with Loader.io.

<details><summary>Typical Load Performance Pre-Optimization</summary>

### Performance for a typical load of 1000 clients per second before load balancing and caching.

<img src="https://github.com/SDC-SwellSpinach/Products/assets/55962431/faa06fa1-4337-4085-89d0-ccd57611bb14"/>
</details>

<details><summary>Typical Load Performance Post-Optimization</summary>

### Performance for a typical load of 1000 clients per second after load balancing and caching.

<img src="https://github.com/SDC-SwellSpinach/Products/assets/55962431/d26316db-bf93-4f13-af47-381d19be68de"/>

</details>

<details><summary>5000 Clients Per Second</summary>

### Performance for a load of 5000 clients per second.

<img src="https://github.com/SDC-SwellSpinach/Products/assets/55962431/6b44bf2f-8156-4a4d-8d45-988c28d35ec6"/>

</details>

## Tech Stack
![node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-brightgreen.svg?style=for-the-badge&logo=Nginx&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-blue.svg?style=for-the-badge&logo=postgreSQL=white)

## Team

Products: Sasha Gordin\
[![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sashagordin/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SashaGordin)

### Start the Application Locally

1. Clone the repository locally.
```
git clone https://github.com/SDC-SwellSpinach/Products.git
```

2. Install the required dependencies.
```
npm install
```

3. Create a copy of `example.config.js`, rename it to `config.js`, and add the required info for your database.

4. Run the server
```
npm start
```

The application is now live locally at `http://localhost:8080/`.
