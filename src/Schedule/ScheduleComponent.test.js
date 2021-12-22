import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ScheduleComponent from "./ScheduleComponent";

describe("<ScheduleComponent />", () => {
  beforeEach(() => {
    cleanup();
  });

  it("it should mount", () => {
    render(<ScheduleComponent />);

    const activityLoader = screen.getByTestId("scheduleComponentId");
    expect(activityLoader).toBeInTheDocument();
  });
});
