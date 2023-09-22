import Form from "./components/Form";

export default function AddTask() {
  return (
    <div className="h-full w-full fixed flex items-center justify-center bg-opacity-30 bg-zinc-700 rounded">
      <div className="flex flex-col rounded w-96 h-auto bg-zinc-50">
        <Form
          inputs={[
            { id: "title", placeholder: "Title" },
            { id: "description", placeholder: "Description" },
            { id: "date", placeholder: "Date" },
          ]}
        />
      </div>
    </div>
  );
}
