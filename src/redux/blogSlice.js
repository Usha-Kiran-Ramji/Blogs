import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    addBlog: (state, action) => {
      state.push({ id: uuidv4(), ...action.payload });
    },
    deleteBlog: (state, action) => {
      return state.filter(blog => blog.id !== action.payload);
    },
    editBlog: (state, action) => {
      const index = state.findIndex(blog => blog.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addBlog, deleteBlog, editBlog } = blogSlice.actions;
export default blogSlice.reducer;
