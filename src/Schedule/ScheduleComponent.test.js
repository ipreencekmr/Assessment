import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ScheduleComponent from "./ScheduleComponent";
import { Provider } from "react-redux";
import { updateStudents } from "/src/Redux/action";

import { createStore } from "redux";
import reducer from "/src/Redux/reducer";

describe("<ScheduleComponent />", () => {
  let store;

  beforeEach(() => {
    cleanup();
    store = createStore(reducer);
    render(
      <Provider store={store}>
        <ScheduleComponent />
      </Provider>
    );
  });

  it("it should mount", () => {
    const component = screen.getByTestId("scheduleComponentId");
    expect(component).toBeInTheDocument();
  });

  it("List should contain 6 elements", () => {
    const scheduleList = screen.getByTestId("scheduleListId");
    expect(scheduleList.children).toHaveLength(6);
  });

  it("First and Third row student name should be Harry Potter and Ron Weasley", () => {
    const harryPotter = screen.getByTestId("scheduleStudentNameId_0");
    const ronWeasly = screen.getByTestId("scheduleStudentNameId_2");
    expect(harryPotter).toHaveTextContent("Harry Potter");
    expect(ronWeasly).toHaveTextContent("Ron Weasley");
  });

  it("marking Horace Slughorn absent should change teacher for Harry potter and Draco to Rubeus ", () => {
    // Dispatch the action
    const teachers = store.getState().teachers;
    teachers[3].present = false;

    const unsubscribe = store.subscribe(() => {
      const harryTeacherEl = screen.getByTestId("scheduleTeacherNameId_0");
      const dracoTeacherEl = screen.getByTestId("scheduleTeacherNameId_3");

      expect(harryTeacherEl).toHaveTextContent("Rubeus Hagrid");
      expect(dracoTeacherEl).toHaveTextContent("Rubeus Hagrid");
    });

    unsubscribe();

    store.dispatch(updateStudents(teachers));
  });

  it("marking both Horace Slughorn and Rubeus Hagrid absent should change teacher for Harry potter and Draco to Minerva McGonagall ", () => {
    // Dispatch the action
    const teachers = store.getState().teachers;
    teachers[2].present = false;
    teachers[3].present = false;

    const unsubscribe = store.subscribe(() => {
      const harryTeacherEl = screen.getByTestId("scheduleTeacherNameId_0");
      const dracoTeacherEl = screen.getByTestId("scheduleTeacherNameId_3");

      expect(harryTeacherEl).toHaveTextContent("Minerva McGonagall");
      expect(dracoTeacherEl).toHaveTextContent("Minerva McGonagall");
    });

    unsubscribe();

    store.dispatch(updateStudents(teachers));
  });

  it("mark Horace Slughorn, Rubeus Hagrid and Minerva McGonagall absent should change teacher for Harry potter and Draco to Professor Dumbledore ", () => {
    // Dispatch the action
    const teachers = store.getState().teachers;
    teachers[1].present = false;
    teachers[2].present = false;
    teachers[3].present = false;

    const unsubscribe = store.subscribe(() => {
      const harryTeacherEl = screen.getByTestId("scheduleTeacherNameId_0");
      const dracoTeacherEl = screen.getByTestId("scheduleTeacherNameId_3");

      expect(harryTeacherEl).toHaveTextContent("Professor Dumbledore");
      expect(dracoTeacherEl).toHaveTextContent("Professor Dumbledore");
    });

    unsubscribe();

    store.dispatch(updateStudents(teachers));
  });

  it("mark Horace Slughorn, Rubeus Hagrid, Minerva McGonagall and Professor Dumbledore absent should change teacher for Harry potter and Draco to Blank ", () => {
    // Dispatch the action
    const teachers = store.getState().teachers;
    teachers[0].present = false;
    teachers[1].present = false;
    teachers[2].present = false;
    teachers[3].present = false;

    const unsubscribe = store.subscribe(() => {
      const harryTeacherEl = screen.getByTestId("scheduleTeacherNameId_0");
      const dracoTeacherEl = screen.getByTestId("scheduleTeacherNameId_3");

      expect(harryTeacherEl).toHaveTextContent("");
      expect(dracoTeacherEl).toHaveTextContent("");
    });

    unsubscribe();

    store.dispatch(updateStudents(teachers));
  });
});
