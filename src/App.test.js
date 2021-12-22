import React from "react";
import configureStore from "redux-mock-store";
import { render, screen, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import { Provider } from "react-redux";
import { initialState } from "/src/Redux/reducer";

const mockStore = configureStore([]);

describe("<App />", () => {
  let store;

  beforeEach(() => {
    cleanup();

    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("it should mount attendance", () => {
    const component = screen.getByTestId("appComponentId");
    expect(component).toBeInTheDocument();
  });

  it("list should contain 3 children", () => {
    const attendanceList = screen.getByTestId("appComponentRowId");
    expect(attendanceList.childElementCount).toEqual(3);
  });
});
