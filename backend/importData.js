const Product = require('./models/Product');
const products = require('./data/newDB');
const userId = '6188d7663210caf9819fc84b';

const importData = async () => {
  await Product.deleteMany();
  try {
    const dbProducts = products.map((product) => {
      return { ...product, user: userId };
    });
    await Product.insertMany(dbProducts);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

module.exports = importData;
