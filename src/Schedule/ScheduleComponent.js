import "./ScheduleComponent.css";

import { connect } from "react-redux";

const ScheduleComponent = (props) => {
  return (
    <section className="ScheduleComponent" data-testid="scheduleComponentId">
      <h4>Current Schedule</h4>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Student</th>
            <th>Subject</th>
            <th>Teacher</th>
          </tr>
        </thead>
        <tbody data-testid={"scheduleListId"}>
          {props.students.map((item, index) => {
            return (
              <tr key={index}>
                <td data-testid={"scheduleStudentNameId_" + index}>
                  {item.name}
                </td>
                <td>{item.subjectName()}</td>
                <td data-testid={"scheduleTeacherNameId_" + index}>
                  {item.teacherName()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.students
  };
};

export default connect(mapStateToProps, null)(ScheduleComponent);
