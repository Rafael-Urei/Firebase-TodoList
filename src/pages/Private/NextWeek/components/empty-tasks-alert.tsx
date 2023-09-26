import { Bird } from "lucide-react";

type Props = {
  title: string;
};

export default function Alert({ title }: Props) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-slate-100 rounded-md gap-4 opacity-50">
      <div className="h-20 w-20">
        <Bird className="h-20 w-20" />
      </div>
      <h1>{title}</h1>
    </div>
  );
}
