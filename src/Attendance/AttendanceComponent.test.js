import React from "react";
import configureStore from "redux-mock-store";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import AttendanceComponent from "./AttendanceComponent";
import { Provider } from "react-redux";
import { initialState } from "/src/Redux/reducer";
import { updateTeacher, updateStudents } from "/src/Redux/action";

const mockStore = configureStore([]);

describe("<AttendanceComponent />", () => {
  let store;

  beforeEach(() => {
    cleanup();

    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <AttendanceComponent />
      </Provider>
    );
  });

  it("it should mount attendance", () => {
    const component = screen.getByTestId("attendanceComponentId");
    expect(component).toBeInTheDocument();
  });

  it("should dispatch update teacher action", () => {
    const actions = store.getActions();

    // Dispatch the action
    store.dispatch(updateTeacher(1, false));

    // Test if your store dispatched the expected actions

    const expectedPayload = {
      type: "UPDATE_TEACHER",
      id: 1,
      payload: false
    };

    expect(actions).toEqual([expectedPayload]);
  });
});
