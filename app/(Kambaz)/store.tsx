import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/reducer";
import breadcrumbReducer from "./Courses/[cid]/Breadcrumb/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import enrollmentsReducer from "./Dashboard/reducer";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    breadcrumb: breadcrumbReducer,
    modules: modulesReducer,
    account: accountReducer,
    assignments: assignmentsReducer,
    enrollments: enrollmentsReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
