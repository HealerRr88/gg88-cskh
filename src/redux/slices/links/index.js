import { createSlice } from "@reduxjs/toolkit"

const initialState = [];

const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    setLinks: (state, action) => {
      return action.payload;
    },
  }
});

const { actions, reducer } = linksSlice;
export const { setLinks } = actions;
export default reducer;
