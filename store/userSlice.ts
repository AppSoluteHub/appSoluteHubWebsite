import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface UserState {
  message?: string;
  token: string;
  data: {
    id: string;
    fullName: string;
    email: string;
    profileImage?: string;
    role?: string;
    country?: string | null;
    gender?: string | null;
    nickName?: string | null;
    phone?: string | null;
    verified?: boolean | null;
    answered?: number | null;
    totalScore?: number | null;
    resetToken?: string | number | null;
    resetTokenExpires?: string | number | null;
  };
}

const initialState: UserState = {
  message: "",
  token: "",
  data: {
    id: "",
    fullName: "",
    email: "",
    profileImage: "",
    role: "",
    country: null,
    gender: null,
    nickName: null,
    phone: null,
    verified: null,
    answered: null,
    totalScore: null,
    resetToken: null,
    resetTokenExpires: null,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.message = action.payload.message;
      state.token = action.payload.token;
      state.data = action.payload.data;
    },
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      if (action.payload.message !== undefined) {
        state.message = action.payload.message;
      }
      if (action.payload.token !== undefined) {
        state.token = action.payload.token;
      }
      if (action.payload.data !== undefined) {
        state.data = { ...state.data, ...action.payload.data };
      }
    },
    clearUser: (state) => {
      state.message = "";
      state.token = "";
      state.data = {
        id: "",
        fullName: "",
        email: "",
        profileImage: "",
        role: "",
        country: null,
        gender: null,
        nickName: null,
        phone: null,
        verified: null,
        answered: null,
        totalScore: null,
        resetToken: null,
        resetTokenExpires: null,
      };
    },
  },
});

export const getUserToken = (state: RootState) => state.user.token;
export const getUser = (state: RootState) => state.user.data;

export const { setUser, updateUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
