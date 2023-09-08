// models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
