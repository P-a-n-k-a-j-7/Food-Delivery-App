const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongo_url, { useNewUrlParser: true });
        console.log('Connected to MongoDB'.bgMagenta.white);

        const fetched_data = await mongoose.connection.db.collection('food_items');
        const data = await fetched_data.find({}).toArray();
        global.food_items = data;
        const foodCategory = await mongoose.connection.db.collection('foodCategory');
        const catData = await foodCategory.find({}).toArray();
        global.foodCategory = catData;
    } catch (err) {
        console.error('Error connecting to MongoDB:'.bgRed.white, err);
    }
};

module.exports = connectDB;
