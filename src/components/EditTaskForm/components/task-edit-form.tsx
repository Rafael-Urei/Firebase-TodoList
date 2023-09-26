import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../../shared/components/input-component";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskSchema } from "../tasksform-schema";
import { ITasksFormData } from "../types";
import { useEffect, useState } from "react";
import Button from "../../../shared/components/button-component";
import Select from "../../../shared/components/selector-component";
import { Modal } from "../../../shared/components/modal-component";
import { X } from "lucide-react";
import {
  ITasksData,
  useAppTasksContext,
} from "../../../shared/contexts/task-context";
import { useAppAuthContext } from "../../../shared/contexts/AuthContext/auth-context";
import { CalendarComponent } from "../../../shared/components";
import { useAppCalendarContext } from "../../../shared/contexts/CalendarContext/calendar-context";
import DateInput from "../../../shared/components/date-input-component";
import TextArea from "../../../shared/components/textarea-component";
import { db } from "../../../shared/config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useAppTaskMenuContext } from "../../../shared/contexts/TaskMenuContext/task-menu-context";

type IProps = {
  handleModal: (value: boolean) => void;
};

export default function TaskEditForm({ handleModal }: IProps) {
  const { currentUser } = useAppAuthContext();
  const [loading, setLoading] = useState(false);
  const { selectedTask, setTasks, tasks } = useAppTasksContext();
  const { inputValue } = useAppCalendarContext();
  const { toggleTaskMenu } = useAppTaskMenuContext();
  const options = ["study", "work", "trip", "personal"];
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setFocus,
  } = useForm<ITasksFormData>({ resolver: zodResolver(TaskSchema) });

  const onSubmit: SubmitHandler<ITasksFormData> = async (data: ITasksData) => {
    try {
      data.date = inputValue.toISOString();
      data = { ...data, id: `${selectedTask?.id}` };
      const docRef = doc(
        db,
        "users",
        `${currentUser?.uid}`,
        "tasks",
        `${selectedTask?.id}`
      );
      const result = await updateDoc(docRef, { ...data });
      setTasks(
        tasks.map((task) => {
          if (task.id === selectedTask?.id) {
            return { ...data };
          } else {
            return task;
          }
        })
      );
      toggleTaskMenu();
    } catch {}

    handleModal(false);
  };

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  return (
    <Modal title="Edit Task">
      <button
        className="border-none bg-transparent absolute right-3 top-3"
        onClick={() => handleModal(false)}
      >
        <X />
      </button>
      <form
        className="relative flex flex-col gap-4 h-auto p-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="title"
          label="Title"
          errors={errors}
          register={register}
          getValues={getValues}
          value={selectedTask?.title}
        ></Input>
        <TextArea
          name="description"
          label="Description"
          errors={errors}
          register={register}
          getValues={getValues}
          value={selectedTask?.description}
        />
        <DateInput
          name="date"
          label="Date"
          errors={errors}
          register={register}
          getValues={getValues}
        />
        <CalendarComponent />
        <Select
          name="type"
          options={options}
          register={register}
          label="Type"
          getValues={getValues}
        ></Select>
        <Button type="submit">Submit</Button>
      </form>
    </Modal>
  );
}
