import React, { useState } from 'react';
import { Card, Row, Col, Typography, Modal, Button, Select, message } from 'antd';
import '../HomeScreen.css';
import menuData from '../data';
import axios from 'axios'; 

const { Title } = Typography;
const { Option } = Select;

const HomeScreen = () => {
  const [visible, setVisible] = useState(false);
  const [orderTitle, setOrderTitle] = useState('');
  const [orderSize, setOrderSize] = useState('small');
  const [orderPrice, setOrderPrice] = useState(300);

  const handleOrderClick = (title) => {
    setOrderTitle(title);
    setVisible(true);
  };

  const handleSizeChange = (value) => {
    setOrderSize(value);
    if (value === 'small') {
      setOrderPrice(300);
    } else if (value === 'medium') {
      setOrderPrice(500);
    } else if (value === 'large') {
      setOrderPrice(800);
    }
  };

  const handleConfirmOrder = async () => {
    try {
      const orderData = { title: orderTitle, size: orderSize, price: orderPrice };
      const response = await axios.post('http://localhost:5000/api/orders', orderData);
      console.log('Order placed successfully:', response.data);
      setVisible(false);
      message.success(`Your order for "${orderTitle}" for ${orderPrice} placed successfully.`);
      // Show a success message or perform any other necessary action
    } catch (error) {
      console.error('Error placing order:', error);
      // Show an error message or handle the error in an appropriate way
    }
  };

  const handleModalClose = () => {
    setVisible(false);
    setOrderTitle('');
    setOrderSize('small');
    setOrderPrice(300);
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Amazing Website</h1>
          <p className="hero-description">Explore and discover new possibilities</p>
          <Button className="hero-button" onClick={() => handleOrderClick('Title')}>
            Get Started
          </Button>
        </div>
      </div>

      <div className="feature-section">
        <div className="feature-content">
          <Title level={2}>Our Fast Food Menu</Title>

          <Row gutter={[16, 16]}>
            {menuData.map((item, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card className="feature-card">
                  <img src={item.imageSrc} alt={`Feature ${index + 1}`} />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button
                    className="order-button"
                    onClick={() => handleOrderClick(item.title)}
                  >
                    Order Now
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

          <Modal visible={visible} onCancel={handleModalClose} footer={null}>
            <div className="modal-content">
              <h2>{orderTitle}</h2>
              <p>Select Size:</p>
              <Select value={orderSize} onChange={handleSizeChange}>
                <Option value="small">Small</Option>
                <Option value="medium">Medium</Option>
                <Option value="large">Large</Option>
              </Select>
              <p>Price: {orderPrice}</p>
              <Button onClick={handleConfirmOrder}>Confirm Order</Button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

