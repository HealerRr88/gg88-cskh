import { configureStore } from "@reduxjs/toolkit";
import loggedInUserReducer from './slices/logged_in_user';
import linksReducer from './slices/links';

export const store = configureStore({
  reducer: {
    loggedInUser: loggedInUserReducer,
    links: linksReducer
  }
})