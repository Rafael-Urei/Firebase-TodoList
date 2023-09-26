import { ITasksData } from "../contexts/task-context";

export const selectTaskAndOpenTaskMenu = (
  isTaskMenuOpen: boolean,
  toggleTaskMenu: (value: boolean) => void,
  task: ITasksData,
  selectTask: (value: ITasksData) => void
) => {
  if (isTaskMenuOpen) {
    selectTask({ ...task });
  } else {
    toggleTaskMenu(true);
    selectTask({ ...task });
  }
};
