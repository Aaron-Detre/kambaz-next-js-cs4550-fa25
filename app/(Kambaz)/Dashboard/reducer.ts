/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState: { enrollments: any[] } = {
  enrollments: db.enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addUserEnrollment: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
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
    deleteUserEnrollment: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) =>
          enrollment.user !== action.payload.userId ||
          enrollment.course !== action.payload.courseId
      );
    },
    // action.payload represents course id of course to be deleted
    deleteCourseEnrollments: (state, action: PayloadAction<string>) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) => enrollment.course !== action.payload
      );
    },
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },
  },
});

export const {
  addUserEnrollment,
  deleteUserEnrollment,
  deleteCourseEnrollments,
  setEnrollments,
} = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
