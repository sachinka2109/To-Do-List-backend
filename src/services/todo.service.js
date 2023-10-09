import Todo from '../models/todo.model';


export const getTodoList = async () => {
  const data = await Todo.find();
  if (data.length > 0) {
    return data;
  } else {
    throw new Error('Empty notes!');
  }
};

export const getSingleTodo = async (_id) => {
  const data = await Todo.findById(_id);
  if (data) {
    return data;
  } else {
    throw new Error('Please enter valid note id!');
  }
};

export const createTodo = async (body) => {
  try {
    const data = await Todo.create(body);
    return data;
  } catch(error) {
    throw new Error('There was a problem in creating note.');
  }
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
  if (data) {
    return data;
  } else {
    throw new Error('Cannot find the id.Please enter valid note id');
  }
};

export const deleteTodo = async (_id) => {
  try {
    await Todo.findByIdAndDelete(_id);
  } catch(error) {
    throw new Error('Cannot find the id to delete');
  }
};



