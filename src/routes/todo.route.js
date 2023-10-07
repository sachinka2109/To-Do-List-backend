import express from 'express';
import * as todoController from '../controllers/todo.controller';

const router = express.Router();

router.get('', todoController.getTodoList);

router.post('', todoController.createTodo);

export default router;