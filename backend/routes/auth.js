const express = require('express');
const router = express.Router();

const { registerUser, loginUser, logout,
    forgotPassword, resetPassword, getUserProfile,
    updatePassword, updateProfile, allUsers } = require('../controllers/authController');
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);

// router.route('/login').post(loginUser);
router.post('/password/forgot', forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
// router.route('/logout').get(logout);

const { isAuthenticatedUser,
    authorizeRoles
} = require('../middlewares/auth');
router.get('/me', isAuthenticatedUser, getUserProfile);
router.put('/password/update', isAuthenticatedUser, updatePassword);
router.put('/me/update/:id', isAuthenticatedUser, updateProfile)
router.get('/admin/users', isAuthenticatedUser, authorizeRoles('admin'), allUsers)

module.exports = router;