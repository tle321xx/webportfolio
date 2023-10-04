// controllers/UserController.js
// const User = require('../models/User');

// async function signup(req, res) {
//   try {
//     // Validation and sanitization logic here

//     const existingUser = await User.findOne({ username: req.body.username });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Username already exists.' });
//     }

//     const user = new User(req.body);
//     await user.save();

//     res.status(200).json({ message: 'Signup successful!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred. Please try again later.' });
//   }
// }

// module.exports = {
//   signup,
//   // Add more controller functions as needed
// };
