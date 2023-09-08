// routes/orderRoute.js
import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, size, price } = req.body;

    const order = new Order({ title, size, price });
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'An error occurred while placing the order.' });
  }
});

export default router;
