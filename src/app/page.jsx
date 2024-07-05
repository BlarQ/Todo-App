'use client'
import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [todo, setTodo] = useState([]);

  const inputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTodo([...todo, { text: inputValue, checked: false }]);
      setInputValue('');
    }
  }

  const handleCheck = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index].checked = !updatedTodo[index].checked;
    setTodo(updatedTodo);
  }

  const deleteItem = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  }

  return (
    <main className="flex flex-col min-h-screen items-center justify-between bg-no-repeat bg-[#171926]">
      <div className="relative bg-[url('/bg-desktop-dark.jpg')] bg-no-repeat bg-cover h-[250px] sm:h-[180px] w-[100%]">
        <div className="absolute w-full min-h-screen text-white flex justify-center items-center flex-col">
          <Header />
          <div className="w-[85%] rounded-md flex items-center h-14 bg-[#393b49] px-4 fixed top-24 gap-4">
            <FaRegCircle className="text-3xl text-[gray]" />
            <input
              className="bg-inherit w-full h-full outline-none text-sm pt-1 text-[gray] font-bold"
              type="text"
              name="text"
              id="text"
              autoComplete="off"
              placeholder="Create a new todo..."
              onChange={inputChange}
              value={inputValue}
              onKeyDown={handleSubmit}
            />
          </div>

          <ul className="h-[50vh] overflow-y-auto fixed top-48">
            {todo.map((item, index) => (
              <li key={index} className="my-1">
                <div className="flex items-center justify-between min-w-[85vw] p-4 bg-red-600 rounded-md">
                  <div className="flex items-center justify-center gap-8" onClick={() => handleCheck(index)}>
                    <div>
                      <FaRegCircle
                        className={`${!item.checked ? "text-2xl text-[gray]" : "hidden"} transition-all duration-300 ease-in-out`}
                      />
                      <FaRegCircleCheck
                        className={`${item.checked ? "text-2xl text-[blue] bg-blue-600 rounded-full" : "hidden"} transition-all duration-300 ease-in-out`}
                      />
                    </div>
                    <div className={`${item.checked ? "line-through text-gray-400 font-bold uppercase" : ""} min-w-[50vw] max-w-[50vw] uppercase`}>
                      {item.text}
                    </div>
                  </div>
                  <div onClick={() => deleteItem(index)}>
                    <RiCloseLargeLine />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Footer />
        </div>
      </div>
    </main>
  );
}
