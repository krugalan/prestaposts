import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../config/store";

const selectPostState = (state: RootState) => state.posts;

export const selectPosts = createSelector(
  selectPostState,
  (postsState) => postsState.posts
);
