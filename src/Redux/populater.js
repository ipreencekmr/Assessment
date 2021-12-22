import Student from "/src/Modal/Student";
import Teacher from "/src/Modal/Teacher";
import Subject from "/src/Modal/Subject";

const populateProfessors = () => {
  const headmaster = new Teacher(
    1,
    "Professor Dumbledore",
    true,
    0,
    "Headmaster"
  );

  const headmistress = new Teacher(
    2,
    "Minerva McGonagall",
    true,
    1,
    "Headmistress"
  );

  const subjectTeacher1 = new Teacher(
    3,
    "Rubeus Hagrid",
    true,
    2,
    "Standby Professor",
    1
  );
  const subjectTeacher2 = new Teacher(4, "Horace Slughorn", true, 3);
  const subjectTeacher3 = new Teacher(5, "Severus Snape", true, 3);

  const subjectTeacher4 = new Teacher(
    6,
    "Alastor Moody",
    true,
    2,
    "Standby Professor",
    2
  );

  const subjectTeacher5 = new Teacher(7, "Remus Lupin", true, 6);
  const subjectTeacher6 = new Teacher(8, "Gilderoy Lockhart", true, 6);

  const teachers = [];

  teachers.push(headmaster);
  teachers.push(headmistress);
  teachers.push(subjectTeacher1);
  teachers.push(subjectTeacher2);
  teachers.push(subjectTeacher3);

  teachers.push(subjectTeacher4);
  teachers.push(subjectTeacher5);
  teachers.push(subjectTeacher6);

  return teachers;
};

const populateSubjects = () => {
  const potionsMaster = new Subject(1, "Potions Master");
  const darkAgainst = new Subject(2, "Defense Against the Dark Arts");

  const subjects = [];
  subjects.push(potionsMaster);
  subjects.push(darkAgainst);
  return subjects;
};

const populateStudents = (teachers, subjects) => {
  const harry = new Student(1, "Harry Potter", 1, 4, teachers, subjects);
  const hermione = new Student(2, "Hermione Granger", 1, 0, teachers, subjects);
  const ron = new Student(3, "Ron Weasley", 1, 5, teachers, subjects);
  const draco = new Student(4, "Draco Malfoy", 1, 4, teachers, subjects);
  const padma = new Student(5, "Padma Patil", 1, 0, teachers, subjects);
  const luna = new Student(6, "Luna Lovegood", 1, 5, teachers, subjects);

  const students = [];
  students.push(harry);
  students.push(hermione);
  students.push(ron);
  students.push(draco);
  students.push(padma);
  students.push(luna);

  return students;
};

export const subjects = populateSubjects();
export const teachers = populateProfessors();
export const students = populateStudents(teachers, subjects);
