import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Block user
const blockUser = (app) => {
  // Assuming this is the block user route
router.put('/:userId/block', async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the user is already blocked
      if (user.blocked) {
        return res.status(400).json({ message: 'User is already blocked' });
      }
  
      // Block the user by setting the blocked field to true
      user.blocked = true;
      await user.save();
  
      res.status(200).json({ message: 'User blocked successfully' });
    } catch (error) {
      console.error('Error blocking user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  



  // Unblock user
router.put('/:userId/unblock', async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if the user is already unblocked
      if (!user.blocked) {
        return res.status(400).json({ message: 'User is already unblocked' });
      }
  
      // Unblock the user
      user.blocked = false;
      await user.save();
  
      res.status(200).json({ message: 'User unblocked successfully' });
    } catch (error) {
      console.error('Error unblocking user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });



  // Delete user
router.delete('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Delete the user
    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



  app.use('/api/users', router);
};

export default blockUser;
