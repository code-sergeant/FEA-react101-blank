import React from "react";
import { TaskItem } from "./TaskListItem";

type Props = {
  onSubmit: (taskItem: TaskItem) => void;
  closeModal: () => void;
};

export const AddTaskModal: React.FC<Props> = ({ onSubmit, closeModal }) => {
  const onSubmitHandler = () => {};

  const onCancelHandler = () => {};

  const onKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {};

  return <></>;
};
