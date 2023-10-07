import express from 'express';
import * as todoController from '../controllers/todo.controller';

const router = express.Router();

router.get('', todoController.getTodoList);

router.post('', todoController.createTodo);

router.put('/:_id', todoController.updateTodo);

export default router;