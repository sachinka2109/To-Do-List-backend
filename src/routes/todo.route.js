import express from 'express';
import * as todoController from '../controllers/todo.controller';

const router = express.Router();

router.get('', todoController.getTodoList);

router.get('/:_id', todoController.getSingleTodo);

router.post('', todoController.createTodo);

router.put('/:_id', todoController.updateTodo);

router.delete('/:_id', todoController.deleteTodo);


export default router;