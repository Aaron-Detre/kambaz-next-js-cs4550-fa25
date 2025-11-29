/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const MODULES_API = `${HTTP_SERVER}/api/modules`;
const USERS_API = `${HTTP_SERVER}/api/users`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

export const fetchAllCourses = async () => {
  const { data } = await axios.get(COURSES_API);
  return data;
};
export const findMyCourses = async (id: string) => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/${id}/courses`);
  return data;
};
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`,
    course
  );
  return data;
};
export const deleteCourse = async (id: string) => {
  const { data } = await axios.delete(`${COURSES_API}/${id}`);
  return data;
};
export const updateCourse = async (course: any) => {
  const { data } = await axios.put(`${COURSES_API}/${course._id}`, course);
  return data;
};
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};
export const deleteModule = async (courseId: string, moduleId: string) => {
  const response = await axios.delete(
    `${COURSES_API}/${courseId}/modules/${moduleId}`
  );
  return response.data;
};
export const updateModule = async (courseId: string, module: any) => {
  const { data } = await axios.put(
    `${COURSES_API}/${courseId}/modules/${module._id}`,
    module
  );
  return data;
};

export const fetchAllCourseAssignments = async (courseId: string) => {
  const { data } = await axios.get(`${ASSIGNMENTS_API}/${courseId}`);
  return data;
};
export const createAssignment = async (assignment: any) => {
  const { data } = await axiosWithCredentials.post(
    `${ASSIGNMENTS_API}/${assignment.course}/create`,
    assignment
  );
  return data;
};
export const deleteAssignment = async (assignment: any) => {
  const { data } = await axios.delete(
    `${ASSIGNMENTS_API}/${assignment.course}/${assignment._id}`
  );
  return data;
};
export const updateAssignment = async (assignment: any) => {
  const { data } = await axios.put(
    `${ASSIGNMENTS_API}/${assignment.course}`,
    assignment
  );
  return data;
};
// export const enrollUserInCourse = async (uid: string, cid: string) => {
//   const { data } = await axios.post(`${ENROLLMENTS_API}/${uid}/${cid}`);
//   return data;
// };
// export const unenrollUserInCourse = async (uid: string, cid: string) => {
//   const { data } = await axios.delete(`${ENROLLMENTS_API}/${uid}/${cid}`);
//   return data;
// };
export const fetchUserEnrollments = async (uid: string) => {
  const { data } = await axios.get(`${ENROLLMENTS_API}/${uid}`);
  return data;
};
export const enrollIntoCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${ENROLLMENTS_API}/${userId}/${courseId}`
  );
  return response.data;
};
export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ENROLLMENTS_API}/${userId}/${courseId}`
  );
  return response.data;
};
export const unenrollAllFromCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ENROLLMENTS_API}/${courseId}`
  );
  return response.data;
};
export const findCourseById = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}`);
  return response.data;
};
export const findAllUsersEnrolledInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/users`
  );
  return response.data;
};
