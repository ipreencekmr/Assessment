import "./styles.css";

import AttendanceComponent from "/src/Attendance/AttendanceComponent.js";
import ScheduleComponent from "/src/Schedule/ScheduleComponent.js";

export default function App() {
  return (
    <>
      <h3 className="mt-2 text-center">Attendance Marker</h3>
      <div
        className="App d-flex justify-content-between"
        data-testid="appComponentId"
      >
        <main className="row" data-testid="appComponentRowId">
          <div className="col-sm-5">
            <AttendanceComponent />
          </div>
          <div className="col-sm-1 d-flex justify-content-around">
            <div className="separator"></div>
          </div>
          <div className="col-sm-6">
            <ScheduleComponent />
          </div>
        </main>
      </div>
    </>
  );
}
