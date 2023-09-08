import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style.css';

const AdminScreen = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchMessages();
    fetchOrders();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      const updatedUsers = response.data.map((user) => {
        if (user.blocked) {
          // User is already blocked, update the user object with blocked property
          return { ...user, blocked: true };
        }
        // User is not blocked, return the original user object
        return user;
      });
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };
  

  const blockUser = async (userId) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${userId}/block`);
      setUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user._id === userId) {
            return { ...user, blocked: true };
          }
          return user;
        })
      );
      toast.success('User blocked successfully');
    } catch (error) {
      console.error('Error blocking user:', error);
    }
  };

  const unblockUser = async (userId) => {
    try {
      await axios.put(`http://localhost:5000/api/users/${userId}/unblock`);
      setUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user._id === userId) {
            return { ...user, blocked: false };
          }
          return user;
        })
      );
      toast.success('User unblocked successfully');
    } catch (error) {
      console.error('Error unblocking user:', error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      toast.success('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const deleteMessage = async (messageId) => {
    try {
      await axios.delete(`http://localhost:5000/api/messages/${messageId}`);
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message._id !== messageId)
      );
      toast.success('Message deleted successfully');
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  console.log(fetchOrders)

  return (
    
    <div style={{ width: '70%', margin: '0% 15%' }}>
      <h1 style={{}}>Admin Dashboard:</h1>
      <h1>Total Numbers of Users: ({users.length})</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table>-
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {!user.blocked ? (
                    <>
                      <button onClick={() => blockUser(user._id)}>Block</button>
                      <button onClick={() => deleteUser(user._id)}>Delete</button>
                    </>
                  ) : (
                    <button onClick={() => unblockUser(user._id)}>Unblock</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h1>Total Messages Received: ({messages.length})</h1>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message._id}>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
                
                <td>
                  <button onClick={() => deleteMessage(message._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <ToastContainer />
      <div>
      <h1>All Orders: ({orders.length})</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Size</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.title}</td>
                <td>{order.size}</td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
        

        
  );
};

export default AdminScreen;
