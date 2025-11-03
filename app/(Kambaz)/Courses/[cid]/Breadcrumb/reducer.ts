import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: true };
const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
  },
});
export const { toggle } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
