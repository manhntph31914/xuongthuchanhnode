import express from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/index.js';
import connectMongoDB from './src/config/dbconfig.js';
const app = express();
dotenv.config();
const port = process.env.PORT ||9000;
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/db_movies";
routes(app);
connectMongoDB(dbUrl);
app.listen(port,() => {
    console.log("server runing :" + port);
});
