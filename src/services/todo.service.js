import Todo from '../models/todo.model';

export const createTodo = async (body) => {
  const data = await Todo.create(body);
  return data;
};
