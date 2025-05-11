import express from 'express';
import { connectToDB } from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import productRoutes from './routes/product.routes.js';
const app = express();

const PORT = process.env.PORT || 8001;

// Builtin middleware
app.use(express.json());

// Allow requests from your frontend origin
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    connectToDB();
    console.log(`Server started at: http://localhost:${PORT}`);
});

