const mongoose = require("mongoose")
const dotEnv = require("dotenv");
dotEnv.config();
mongoose.set("strictQuery", false);

const DB_URL= process.env.MONGO_URL
console.log("process.env.MONGO_URL",process.env.MONGO_URL)
const connect = () =>{
    mongoose.connect(DB_URL)
}
module.exports = connect
