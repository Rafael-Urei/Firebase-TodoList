import { Bird } from "lucide-react";

type Props = {
  title: string;
};

export default function Alert({ title }: Props) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center rounded-md gap-4 opacity-50 text-center">
      <div className="h-20 w-20">
        <Bird className="h-20 w-20" />
      </div>
      <h1 className="text-center">{title}</h1>
    </div>
  );
}
