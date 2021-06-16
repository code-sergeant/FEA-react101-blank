import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TaskList } from "./TaskList";
import {
  makeRandomDateString,
  makeRandomTaskText
} from "../helpers/testHelpers";

describe("TaskList", () => {
  // TODO: Step 4
  it.skip("displays a default message when no tasks have been provided", () => {
    render(<TaskList tasks={[]} />);

    expect(screen.getByText("No tasks have been added yet."));
  });

  // TODO: Step 5
  it.skip("correctly renders a list of TaskItems when provided", async () => {
    const randomDate1 = makeRandomDateString();
    const randomDate2 = makeRandomDateString();
    const randomTaskText1 = makeRandomTaskText();
    const randomTaskText2 = makeRandomTaskText();

    render(
      <TaskList
        tasks={[
          { title: randomTaskText1, date: randomDate1 },
          { title: randomTaskText2, date: randomDate2 }
        ]}
      />
    );

    expect(screen.getByText(randomTaskText1)).toBeInTheDocument();
    expect(screen.getByText(randomDate1)).toBeInTheDocument();
    expect(screen.getByText(randomTaskText1)).toBeInTheDocument();
    expect(screen.getByText(randomDate2)).toBeInTheDocument();
    expect(
      screen.queryByText("No tasks have been added yet.")
    ).not.toBeInTheDocument();
  });
});
