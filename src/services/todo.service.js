import Todo from '../models/todo.model';


export const getTodoList = async () => {
  const data = await Todo.find();
  return data;
};

export const getSingleTodo = async (_id) => {
  const data = await Todo.findById(_id);
  return data;
};

export const createTodo = async (body) => {
  const data = await Todo.create(body);
  return data;
};


export const updateTodo = async (_id, body) => {
  const data = await Todo.findByIdAndUpdate(
    {
      _id,
    },
    body,
    {
      new: true
    }
  );
  return data;
};

export const deleteTodo = async (_id) => {
  await Todo.findByIdAndDelete(_id);
  return '';
};



