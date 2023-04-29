import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post, PostsSliceType } from "./typings";

const initialState: PostsSliceType = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<Post[] | []>) => {
      state.posts = action.payload;
    },
    loadPostsByUser: (state, action: PayloadAction<Post[] | []>) => {
      state.posts = action.payload;
    },
  },
});

export const { loadPosts, loadPostsByUser } = postsSlice.actions;

export default postsSlice.reducer;
