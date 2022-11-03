import express from 'express';

//controllers for route
import { register } from '../controllers/users.js';

const router = express.Router();

router.get('/register', register);

export default router;