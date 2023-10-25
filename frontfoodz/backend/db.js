const mongoose = require('mongoose');
const mongo_url = process.env.MONGO_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongo_url, { useNewUrlParser: true });
        console.log('Connected to MongoDB'.bgMagenta.white);

        const fetched_data = await mongoose.connection.db.collection('food_items');
        const data = await fetched_data.find({}).toArray();
        console.log();
    } catch (err) {
        console.error('Error connecting to MongoDB:'.bgRed.white, err);
    }
};

module.exports = connectDB;
