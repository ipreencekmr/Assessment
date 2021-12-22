import "./AttendanceComponent.css";

import { useEffect } from "react";
import { connect } from "react-redux";
import { updateTeacher, updateStudents } from "/src/Redux/action";

const AttendanceComponent = (props) => {
  useEffect(() => {
    props.updateStudents(props.teachers);
  }, [props]);

  const handleChange = function (event, teacherId) {
    const attendance = event.target.value === "1" ? false : true;
    props.updateTeacher(teacherId, attendance);
  };

  return (
    <section
      className="AttendanceComponent"
      data-testid="attendanceComponentId"
    >
      <h4>Attendance</h4>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Teacher</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {props.teachers.map((item, index) => {
            return (
              <tr key={index}>
                <td data-testid={"techerNameId_" + index}>{item.name}</td>
                <td>
                  <select
                    data-testid={"attendanceMarkId_" + index}
                    value={item.present ? "0" : "1"}
                    className="form-select"
                    onChange={(e) => handleChange(e, item.id)}
                  >
                    <option value="0">Present</option>
                    <option value="1">Absent</option>
                  </select>
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
    teachers: state.teachers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTeacher: (teacherId, attendance) =>
      dispatch(updateTeacher(teacherId, attendance)),
    updateStudents: (teachers) => dispatch(updateStudents(teachers))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendanceComponent);
