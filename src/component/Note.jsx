import React from "react";
import { useState } from "react";
import NoteForm from "./NoteForm";
import Card from "./Card";

const Note = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const Copytask = [...task];
    Copytask.push({ title, details });

    setTask(Copytask);
    setTitle("");
    setDetails("");
  };

  const deleteTask = (index) => {
    const Copytask = [...task];
    Copytask.splice(index, 1);
    setTask(Copytask);
  };

  return (
    <>
      <div className="h-screen flex items-center flex-col gap-5 py-5 bg-gray-100 sm:m-2 md:m-2">
        <NoteForm
          title={title}
          details={details}
          setTitle={setTitle}
          setDetails={setDetails}
          submitHandler={submitHandler}
        />
        <h2 className="font-bold text-2xl italic">Content</h2>
        <Card
          deleteTask={deleteTask}
          title={title}
          details={details}
          task={task}

        />
      </div>
    </>
  );
};

export default Note;
