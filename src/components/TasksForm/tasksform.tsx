import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../shared/components/input-component";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskSchema } from "./tasksform-schema";
import { ITasksFormData } from "./types";
import { useEffect, useState } from "react";
import Button from "../../shared/components/button-component";
import Select from "../../shared/components/selector-component";
import { Modal } from "../../shared/components/modal-component";
import { X } from "lucide-react";
import { AddTask } from "../../shared/config/firebase";
import { ITasksData } from "../../shared/contexts/Tasks/types";
import { useAppAuthContext } from "../../shared/contexts/AuthContext/auth-context";
import { CalendarComponent } from "../../shared/components";
import { useAppCalendarContext } from "../../shared/contexts/CalendarContext/calendar-context";
import DateInput from "../../shared/components/date-input-component";

type IProps = {
  handleModal: (value: boolean) => void;
};

export default function TaskForm({ handleModal }: IProps) {
  const { currentUser } = useAppAuthContext();
  const [loading, setLoading] = useState(false);
  const { inputValue } = useAppCalendarContext();
  const options = ["study", "work", "trip", "personal"];
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setFocus,
  } = useForm<ITasksFormData>({ resolver: zodResolver(TaskSchema) });

  const onSubmit: SubmitHandler<ITasksFormData> = (data: ITasksData) => {
    data.date = inputValue.toISOString();
    AddTask(data, setLoading, `${currentUser?.uid}`);
    handleModal(false);
  };

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  return (
    <Modal title="Create your Task">
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
        ></Input>
        <Input
          name="description"
          label="Description"
          errors={errors}
          register={register}
          getValues={getValues}
        ></Input>
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
