import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AddTaskModal } from "./AddTaskModal";
import "@testing-library/jest-dom/extend-expect";

describe("Add Task Modal", () => {
  let mockOnSubmit: () => void;
  let mockCloseModal: () => void;

  beforeEach(() => {
    mockOnSubmit = jest.fn();
    mockCloseModal = jest.fn();
    render(
      <AddTaskModal onSubmit={mockOnSubmit} closeModal={mockCloseModal} />
    );
  });

  // TODO: Step 6
  it.skip("allows a user to fill in a task title in the Task Title input", () => {
    const inputElement = screen.getByLabelText(
      "Task Title"
    ) as HTMLInputElement;

    userEvent.type(inputElement, "Testing");

    expect(inputElement).toHaveValue("Testing");
  });

  // TODO: Step 7
  it.skip("disables the submit button if required fields are not filled", () => {
    userEvent.type(screen.getByLabelText("Task Title"), "");

    expect(screen.getByText("Submit")).toBeDisabled();
  });

  // TODO: Step 8
  it.skip("enables submit button if required fields are provided", () => {
    const titleInput = screen.getByLabelText("Task Title") as HTMLInputElement;

    userEvent.type(titleInput, "Test Title");

    expect(titleInput.value).toEqual("Test Title");
    expect(screen.getByText("Submit")).not.toBeDisabled();
  });

  // TODO: Step 9
  it.skip("calls onSubmit with the proper input values when Submit is clicked", () => {
    const titleInput = screen.getByLabelText("Task Title") as HTMLInputElement;

    userEvent.type(titleInput, "Test Title");
    userEvent.click(screen.getByText("Submit"));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: "Test Title",
      date: new Date().toDateString()
    });
  });

  // TODO: Step 10
  it.skip("clears the task title field when submit is clicked", () => {
    const titleInput = screen.getByLabelText("Task Title") as HTMLInputElement;

    userEvent.type(titleInput, "Test Title");
    userEvent.click(screen.getByText("Submit"));

    expect(titleInput.value).toEqual("");
  });

  // TODO: Step 11
  it.skip("calls closeModal when the 'Cancel' button is clicked", () => {
    userEvent.click(screen.getByText("Cancel"));

    waitFor(() => expect(mockCloseModal).toHaveBeenCalled());
  });
});
