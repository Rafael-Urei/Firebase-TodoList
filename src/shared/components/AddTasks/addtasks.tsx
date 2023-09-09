import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskSchema } from "./addtasks-schema";
import { ITasksFormData } from "./types";

export default function AddTask() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ITasksFormData>({ resolver: zodResolver(TaskSchema) });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <div className="h-full w-full fixed flex items-center justify-center bg-opacity-30 bg-zinc-700 rounded">
      <div className="flex flex-col rounded w-96 h-auto bg-zinc-50">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <input className="h-8 px-2" {...register("title")}></input>
          {errors.title && <span>{errors.title.message}</span>}
        </form>
      </div>
    </div>
  );
}
