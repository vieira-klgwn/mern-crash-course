import express, { Router } from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';

import ProductRoutes from './routes/product.route.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/products",ProductRoutes);






app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
})

