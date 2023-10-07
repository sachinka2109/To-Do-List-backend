import { Schema, model } from 'mongoose';

const todoSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
        type: String,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    isArchived: {
        type: Boolean,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
  },
  {
    timestamps: true
  }
);

export default model('Todo', todoSchema);
