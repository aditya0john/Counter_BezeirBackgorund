import React, { useEffect, useState } from "react";

function Counter({ toggle }: { toggle: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCount = localStorage.getItem("count");
      if (storedCount !== null) {
        setCount(JSON.parse(storedCount));
      }
    }
  }, []);
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("count", JSON.stringify(count));
    }
  }, [count]);

  return (
    <div
      className={`h-full w-full p-2 overflow-hidden text-black/[0.5] select-none transition duration-300 z-50`}
    >
      <div
        className={`flex flex-col gap-12 items-center justify-center border-2 ${
          toggle === false
            ? `bg-gray-300/[0.4] border-gray-300 text-black`
            : `bg-gray-400/[0.2] border-gray-500 text-white`
        }  h-full w-full rounded-xl p-4`}
      >
        <div className="flex items-center justify-center gap-10 relative top-10">
          <button
            onClick={() => setCount((prev) => Math.max(0, prev - 1))}
            className={` border-2 border-black/[0.2] h-12 w-12 text-[3rem] rounded-full flex items-center justify-center ${
              toggle == false
                ? "text-black bg-gray-200 hover:bg-gray-300 "
                : "text-white bg-gray-400/[0.2] hover:bg-gray-400/[0.3]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span className="h-32 w-32 text-[6rem] font-mono bg-black text-white rounded-xl px-4 py-2 flex items-center justify-center">
            {count}
            <button
              onClick={() => setCount(0)}
              className={`absolute -top-6 right-16 border-2 h-12 w-12 text-[3rem] rounded-full flex items-center justify-center ${
                toggle == false
                  ? "text-black bg-white border-black/[0.2]"
                  : "text-white bg-black border-white/[0.2]"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </button>
          </span>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className={` border-2 border-black/[0.2] h-12 w-12 text-[3rem] rounded-full flex items-center justify-center ${
              toggle == false
                ? "text-black bg-gray-200 hover:bg-gray-300"
                : "text-white bg-gray-400/[0.2] hover:bg-gray-400/[0.3]"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <p className="text-[3rem] font-mono font-extrabold">Counter</p>
      </div>
    </div>
  );
}

export default Counter;
