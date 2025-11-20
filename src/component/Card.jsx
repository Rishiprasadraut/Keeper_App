import React from "react";

const Card = ({ task, title, details, deleteTask }) => {
  return (
    <div className="lg:w-1/2 lg:border-1-2 p-5 lg:p-10 lg:mb-3 overflow-y-auto">
      <div id="note" className="flex flex-wrap px-3 py-4 rounded-2xl gap-4">
        {task.map((elem, index) => {
          return (
            <div
              key={index}
              className="relative h-25 w-45 bg-cover rounded-2xl text-black p-5 bg-white gap-2"
            >
              <h2
                className="absolute right-2 bottom-2 active:scale-75 cursor-pointer text-amber-500 pt-1 rounded "
                onClick={() => {
                  deleteTask(index);
                }}
              >
                Delete
              </h2>
              <h3 className="leading-tight text-xl font-bold">{elem.title}</h3>
              <p className="mt-2 mb-3 text-1xl">{elem.details}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
