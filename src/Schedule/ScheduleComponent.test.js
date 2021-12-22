import React from "react";
import configureStore from "redux-mock-store";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ScheduleComponent from "./ScheduleComponent";
import { Provider } from "react-redux";
import { initialState } from "/src/Redux/reducer";
import { updateStudents } from "/src/Redux/action";

const mockStore = configureStore([]);

describe("<ScheduleComponent />", () => {
  let store;

  beforeEach(() => {
    cleanup();

    store = mockStore(initialState);

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
});
