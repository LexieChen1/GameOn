import express from 'express';
import { registerUser, loginUser, getAllRegisteredUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getAllRegisteredUsers);

export default router;
