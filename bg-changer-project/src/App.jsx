import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <>
      <div
        className="w-full h-screen duration-200 shadow-lg"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div className="flex flex-wrap gap-2 bg-white px-5 py-4 rounded-full shadow-xl justify-center">
            <button
              className="bg-red-800 hover:bg-red-400 px-6 py-2 rounded-full text-white font-bold duration-200 shadow-2xl"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="bg-green-800 hover:bg-green-600 px-6 py-2 rounded-full text-white font-bold duration-200 shadow-lg"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="bg-blue-800 hover:bg-blue-600 px-6 py-2 rounded-full text-white font-bold duration-200 shadow-lg"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="bg-purple-800 hover:bg-purple-600 px-6 py-2 rounded-full text-white font-bold duration-200 shadow-lg"
              onClick={() => setColor("purple")}
            >
              Purple
            </button>
            <button
              className="bg-orange-400 hover:bg-orange-600 px-6 py-2 rounded-full text-white font-bold duration-200 shadow-lg"
              onClick={() => setColor("orange")}
            >
              Orange
            </button>
            <button
              className="bg-yellow-300 hover:bg-yellow-500 px-6 py-2 rounded-full text-white font-bold"
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
