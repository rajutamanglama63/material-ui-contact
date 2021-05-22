const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MongoURI, {
            useNewUrlParser : true,
            useCreateIndex : true,
            useUnifiedTopology : true,
            useFindAndModify : false
        });

        console.log("MongoDB connection established successfully.");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;