import "./styles.css";

import AttendanceComponent from "/src/Attendance/AttendanceComponent.js";
import ScheduleComponent from "/src/Schedule/ScheduleComponent.js";

export default function App() {
  return (
    <div className="App d-flex justify-content-between">
      <main className="row">
        <div className="col-sm-5">
          <AttendanceComponent />
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-6">
          <ScheduleComponent />
        </div>
      </main>
    </div>
  );
}
