const Product = require('./models/Product');
const User = require('./models/User');
const products = require('./data/newDB');

const importData = async () => {
  await Product.deleteMany();
  const adminId = await User.findOne({ role: 'admin' }).select('_id');

  try {
    const dbProducts = products.map((product) => {
      return { ...product, user: adminId };
    });
    await Product.insertMany(dbProducts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = importData;
