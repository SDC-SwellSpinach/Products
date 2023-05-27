// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);

// const productsSchema = mongoose.Schema({
//   product_id: String,
//   name: String,
//   slogan: String,
//   description: String,
//   category: String,
//   default_price: String,
//   features: [{}],
// });

// const relatedSchema = mongoose.Schema({
//   related_id: String,
//   related_ids: [Number],
// });

// const stylesSchema = mongoose.Schema({
//   style_id: String,
//   name: String,
//   original_price: String,
//   default: Boolean,
//   photos: [{}],
//   skus: {},
// });

// const products = mongoose.model('Products', productsSchema);
// const related = mongoose.model('Related', relatedSchema);
// const styles = mongoose.model('Styles', stylesSchema);
