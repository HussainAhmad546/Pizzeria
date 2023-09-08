import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
const app = express();
import  bodyParser from 'body-parser';
import authRoutes from './routes/auth.js';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js'; // Import the contact routes
import orderRoute from './routes/orderRoute.js';
import userRoutes from './routes/user.js';
import messageRoutes from './routes/message.js';
import blockUser from './routes/blockUser.js';





dotenv.config();

app.use(express.json());
app.use(cors()); 
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Server is Running Hurrah!');
});


// Register auth routes
app.use('/api/auth', authRoutes);

// Use contact routes
app.use('/api/contact', contactRoutes);

// Register user routes
app.use('/api/users', userRoutes);

// Register message routes
app.use('/api/messages', messageRoutes);

// Use the order route
app.use('/api/orders', orderRoute); 


blockUser(app);

// Start the server
const PORT = process.env.PORT||5000;


app.listen(
    PORT,
    console.log(`App running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

