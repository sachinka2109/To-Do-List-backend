import Todo from '../models/todo.model';


export const getTodoList = async () => {
  const data = await Todo.find();
  return data;
};

export const createTodo = async (body) => {
  const data = await Todo.create(body);
  return data;
};
