class Student {
  constructor(
    id = 0,
    name = "",
    subjectId = 0,
    teacherId = 0,
    teachers = [],
    subjects = []
  ) {
    this.id = id;
    this.name = name;
    this.subjectId = subjectId;
    this.teacherId = teacherId;
    this.teachers = teachers;
    this.subjects = subjects;
  }

  teacherForSubjectId(id) {
    if (id !== 0) {
      const teachersById = this.teachers.filter((item) => {
        return item.subjectId === id;
      });

      if (teachersById.length > 0) {
        return teachersById[0];
      }
    }
    return null;
  }

  teacherForId(id) {
    if (id !== 0) {
      const teachersById = this.teachers.filter((item) => {
        return item.id === id;
      });

      if (teachersById.length > 0) {
        return teachersById[0];
      }
    }
    return null;
  }

  teacherName() {
    let teacher = null;

    if (this.teacherId === 0) {
      teacher = this.teacherForSubjectId(this.subjectId);
    } else {
      teacher = this.teacherForId(this.teacherId);
    }

    while (teacher && teacher.present === false) {
      teacher = this.teacherForId(teacher.parentId);
    }

    return teacher ? teacher.name : "";
  }

  subjectName() {
    const subjectsById = this.subjects.filter((item) => {
      return item.id === this.subjectId;
    });

    if (subjectsById.length > 0) {
      return subjectsById[0].name;
    }

    return "";
  }
}

export default Student;
