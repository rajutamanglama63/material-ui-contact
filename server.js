const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();
const Port = process.env.PORT || 4000;

const connectDB = require("./config/db");
const contactRoutes = require("./route/contactRoute")

connectDB();

app.use(express.json());

app.use('/', contactRoutes);

app.listen(Port, () => {
    console.log(`Server running on port http://localhost:${Port}`);
});