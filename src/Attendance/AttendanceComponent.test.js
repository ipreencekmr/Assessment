import React from "react";
import configureStore from "redux-mock-store";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import AttendanceComponent from "./AttendanceComponent";
import { Provider } from "react-redux";
import { initialState } from "/src/Redux/reducer";
import { updateTeacher } from "/src/Redux/action";

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
    // Dispatch the action
    store.dispatch(updateTeacher(1, false));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const action = actions[1];

    const expectedPayload = {
      type: "UPDATE_TEACHER",
      id: 1,
      payload: false
    };

    expect(action).toMatchObject(expectedPayload);
  });

  it("second row should contain correct teacher name", () => {
    const dataElement = screen.getByTestId("techerNameId_1");
    expect(dataElement).toHaveTextContent("Minerva McGonagall");
  });

  it("should change value in attendance marker", () => {
    const select = screen.getByTestId("attendanceMarkId_0");

    fireEvent.select(select, {
      target: { value: "1" }
    });

    expect(select).toHaveProperty("value", "1");
    expect(select).toHaveTextContent("Absent");
  });
});
