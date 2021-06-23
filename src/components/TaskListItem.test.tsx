import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TaskListItem } from "./TaskListItem";
import {
  makeRandomDateString,
  makeRandomTaskText
} from "../helpers/testHelpers";

describe("TaskListItem", () => {
  // TODO: Step 3
  it.skip("correctly renders a Task List Item", () => {
    const randomDate = makeRandomDateString();
    const randomTaskText = makeRandomTaskText();

    render(<TaskListItem title={randomTaskText} date={randomDate} />);

    expect(screen.getByText(randomTaskText));
    expect(screen.getByText(randomDate));
  });
});
