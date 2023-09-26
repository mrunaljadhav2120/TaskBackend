const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const port = 4000;
const API =`mongodb+srv://jadhavmrunal2109:${process.env.MONGODB_PASSWORD}@cluster21.ijolygo.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);


async function main() {
    await mongoose.connect(API);
    console.log('connected to database');
    app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
};
main();