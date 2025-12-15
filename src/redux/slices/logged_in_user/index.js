import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  isLoading: true,
  isInitialized: false
};

const loggedInUserSlice = createSlice({
  name: 'loggedInUser',
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      return {
        user: action.payload,
        isLoading: false,
        isInitialized: true
      };
    },
    setLoading: (state, action) => {
      return {
        ...state,
        isLoading: action.payload
      };
    },
    clearUser: (state) => {
      return {
        user: null,
        isLoading: false,
        isInitialized: true
      };
    }
  }
});

const { actions, reducer } = loggedInUserSlice;
export const { setLoggedInUser, setLoading, clearUser } = actions;
export default reducer;