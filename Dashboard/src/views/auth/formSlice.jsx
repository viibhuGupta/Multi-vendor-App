import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  email: "",
  password: ""
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    resetForm: () => initialState
  }
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
