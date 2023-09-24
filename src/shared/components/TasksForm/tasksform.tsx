import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../input-component";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskSchema } from "./tasksform-schema";
import { ITasksFormData } from "./types";
import { useEffect } from "react";
import Button from "../button-component";
import Select from "../selector-component";
import { Modal } from "../modal-component";

export default function TaskForm() {
  const options = ["study", "work", "trip", "personal"];
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setFocus,
  } = useForm<ITasksFormData>({ resolver: zodResolver(TaskSchema) });

  const onSubmit: SubmitHandler<ITasksFormData> = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  return (
    <Modal title="Create your Task">
      <form
        className="flex flex-col gap-4 h-auto p-10"
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
        <Input
          name="date"
          label="Date"
          size="xs"
          errors={errors}
          register={register}
          getValues={getValues}
        ></Input>
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
