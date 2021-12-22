import { teachers, students, subjects } from "./populater";

export const initialState = {
  teachers: teachers,
  students: students,
  subjects: subjects
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TEACHER": {
      const teacherId = action.id;
      const teachers = state.teachers.map((item) => {
        if (item.id === teacherId) {
          item.present = action.payload;
        }
        return item;
      });
      return { ...state, teachers: teachers };
    }
    case "UPDATE_STUDENTS": {
      const teachers = action.payload;
      const students = state.students.map((item) => {
        item.teachers = teachers;
        return item;
      });
      return { ...state, students: students };
    }
    default:
      return state;
  }
};

export default reducer;
