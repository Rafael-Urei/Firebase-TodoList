import { DashboardLayout } from "../../../shared/layouts/DashboardLayout";
import { Plus, ArrowRight } from "lucide-react";

export const Upcoming = () => {
  return (
    <>
      <DashboardLayout title="Upcoming">
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex bg-zinc-50 border rounded-md p-5 flex-col gap-4 w-full">
            <h1 className="text-lg font-bold text-zinc-700">Today</h1>
            <button className="flex items-center gap-2 border p-4 rounded-md text-left text-zinc-500 font-semibold">
              <Plus className="h-3 w-3" />
              Add New Task
            </button>
            <ul>
              <div className="flex items-center text-sm px-5 justify-between">
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="cursor-pointer" />
                  <li>Study ReactJS</li>
                </div>
                <button className="flex items-center h-4 w-4 rounded-full text-zinc-500 cursor-pointer duration-100 hover:bg-cyan-300 hover:text-slate-50">
                  <ArrowRight />
                </button>
              </div>
            </ul>
          </div>
          <div className="flex bg-zinc-50 border rounded-md p-5 flex-col gap-4 flex-1">
            <h1 className="text-lg font-bold text-zinc-700">Tomorrow</h1>
            <button className="flex items-center gap-2 border p-4 rounded-md text-left text-zinc-500 font-semibold">
              <Plus className="h-3 w-3" />
              Add New Task
            </button>
          </div>
          <div className="flex bg-zinc-50 border rounded-md p-5 flex-col gap-4 flex-1">
            <h1 className="text-lg font-bold text-zinc-700">This Week</h1>
            <button className="flex items-center gap-2 border p-4 rounded-md text-left text-zinc-500 font-semibold">
              <Plus className="h-3 w-3" />
              Add New Task
            </button>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
