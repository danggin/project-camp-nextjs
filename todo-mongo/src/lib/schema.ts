import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);
