export const updateTeacher = (teacherId, attendance) => {
  return {
    type: "UPDATE_TEACHER",
    id: teacherId,
    payload: attendance
  };
};

export const updateStudents = (teachers) => {
  return {
    type: "UPDATE_STUDENTS",
    payload: teachers
  };
};
