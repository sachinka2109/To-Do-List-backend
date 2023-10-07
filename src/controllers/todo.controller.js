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


export const updateTodo = async (req, res, next) => {
  try {
    const data = await todoService.updateTodo(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Todo updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (req, res,next) => {
  try {
    console.log(req.params._id);
    await todoService.deleteTodo(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Todo deleted successfully'
    });
  } catch (error) {
    next(error);
  }
}

export const getSingleTodo = async (req, res, next) => {
  try {
    const data = await todoService.getSingleTodo(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Todo fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};