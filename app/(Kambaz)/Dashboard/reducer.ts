/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState: { enrollments: any[] } = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (
      state,
      action: { payload: { userId: string; courseId: string } }
    ) => {
      state.enrollments = [
        ...state.enrollments,
        {
          _id: uuidv4(),
          user: action.payload.userId,
          course: action.payload.courseId,
        },
      ];
    },
    deleteEnrollment: (
      state,
      action: { payload: { userId: string; courseId: string } }
    ) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) => enrollment.course !== action.payload
      );
    },
  },
});

export const { addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
