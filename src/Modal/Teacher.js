class Teacher {
  constructor(
    id = 0,
    name = "",
    present = true,
    parentId = 0,
    designation = "",
    subjectId = 0
  ) {
    this.id = id;
    this.parentId = parentId;
    this.name = name;
    this.present = present;
    this.designation = designation;
    this.subjectId = subjectId;
  }
}

export default Teacher;
