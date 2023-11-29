import express from 'express';
import { taskRoutes } from '../modules/Task/task.route';

const router = express.Router();

router.use('/Task', taskRoutes)

export default router;