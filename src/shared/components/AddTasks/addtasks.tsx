import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskSchema } from "./addtasks-schema";
import { ITasksFormData } from "./types";
import Input from "./components/Input";

export default function AddTask() {
  const {
    formState: { errors },
    handleSubmit,
  } = useForm<ITasksFormData>({ resolver: zodResolver(TaskSchema) });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className="h-full w-full fixed flex items-center justify-center bg-opacity-30 bg-zinc-700 rounded">
      <div className="flex flex-col rounded w-96 h-auto bg-zinc-50">
        <form
          className="flex flex-col gap-2 p-4 rounded h-36"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input label="Title" type="text" ref="title" />
          <Input label="Description" type="number" ref="description" />
          {errors.title && <span>{errors.title.message}</span>}
        </form>
      </div>
    </div>
  );
}
