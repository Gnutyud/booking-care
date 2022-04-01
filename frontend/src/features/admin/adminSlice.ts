import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

interface AdminState {
  userSelected: UserInfo,
  users: UserInfo[]
}
const initialState: AdminState = {
  userSelected: {} as UserInfo,
  users: []
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers:{
    fetchUsers: (state, action) => {
      state.users = action.payload;
    },
    getUserSelected: (state, action) => {
      state.userSelected = action.payload;
    }
  }
});

export const { fetchUsers, getUserSelected } = adminSlice.actions;

export const users = (state: RootState) => state.admin.users;
export const userSelected = (state: RootState) => state.admin.userSelected;

export default adminSlice.reducer;