import { useState } from "react";

import "./App.css";

function App() {
  const [allTodo, setAllTodo] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    if (todo.trim() != "") {
      setAllTodo((prev) => [...prev, todo]);
    }
    setTodo("");
  };
  const handelDelete = (index) => {
    setAllTodo((prev) => prev.filter((_, ind) => ind != index));
  };
  const handleEdit = (todo, index) => {
    setTodo(todo);
    setAllTodo((prev) => prev.filter((_, ind) => ind != index));
  };
  return (
    <>
      <h1 className=" text-4xl flex items-center justify-center  m-2">
        Your To-DO's
      </h1>
      <main className="flex flex-col justify-center items-center ">
        <section className="flex gap-3 items-center justify-center ">
          <input
            className="bg-white rounded-md p-1 text-black"
            type="text"
            value={todo}
            onChange={(e) => handleChange(e)}
          />
          <button
            onClick={handleClick}
            className="bg-purple-900 p-1 px-2.5 rounded-md cursor-pointer"
          >
            Add
          </button>
        </section>
        <section className="w-[20vw] mt-4 ">
          {allTodo.map((todo, index) => {
            return (
              <div className="flex justify-between  items-center w-full bg-white p-2 rounded-md mt-1 ">
                <span className="text-black" key={`todo-${index}`}>
                  {todo}
                </span>
                <div className="flex justify-center items-center gap-2">
                  <button
                    onClick={() => handleEdit(todo, index)}
                    className="bg-purple-900 p-1 px-2 rounded-md cursor-pointer "
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handelDelete(index)}
                    className="bg-purple-900 p-1 px-2 rounded-md cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
