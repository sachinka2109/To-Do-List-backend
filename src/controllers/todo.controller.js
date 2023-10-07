import HttpStatus from 'http-status-codes';
import * as todoService from '../services/todo.service';


/**
 * Controller to create a new todo
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
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
