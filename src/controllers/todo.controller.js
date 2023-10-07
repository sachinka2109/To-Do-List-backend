import HttpStatus from 'http-status-codes';
import * as todoService from '../services/todo.service';

export const getTodoList = async (req, res, next) => {
  try {
    const data = await todoService.getTodoList();
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'TodoList fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (req, res, next) => {
  try {
    const data = await todoService.createTodo(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Todo created successfully'
    });
  } catch (error) {
    next(error);
  }
};
