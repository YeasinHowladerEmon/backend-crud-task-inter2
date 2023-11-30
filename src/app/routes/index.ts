import express from 'express';
import { taskRoutes } from '../modules/Task/task.route';

const router = express.Router();

router.use('/task', taskRoutes)

export default router;