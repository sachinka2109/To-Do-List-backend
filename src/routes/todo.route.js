import express from 'express';
import * as todoController from '../controllers/todo.controller';

const router = express.Router();


router.post('', todoController.createTodo);

export default router;