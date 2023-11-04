const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_url, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

    const fetched_data = await mongoose.connection.db.collection('food_items');
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection('foodCategory');
    const catData = await foodCategory.find({}).toArray();
    global.food_items = data;
    global.foodCategory = catData;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
