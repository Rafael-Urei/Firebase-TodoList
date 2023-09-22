import { useForm, SubmitHandler } from "react-hook-form";
import Input from "./components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskSchema } from "./addtasks-schema";
import { ITasksFormData } from "./types";
import { useEffect } from "react";

export default function AddTask() {
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
    <div className="h-full w-full fixed flex items-center justify-center bg-opacity-30 bg-zinc-700 rounded">
      <div className="flex flex-col rounded w-96 h-auto bg-zinc-50">
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
          <Input
            name="type"
            label="Type"
            size="xs"
            errors={errors}
            register={register}
            getValues={getValues}
          ></Input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
