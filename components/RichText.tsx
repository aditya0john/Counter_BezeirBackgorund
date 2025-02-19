import React, { useEffect, useState } from "react";

function RichText({ toggle }: { toggle: boolean }) {
  const getSavedData = () => JSON.parse(localStorage?.getItem("form") || "{}");

  const [options, setOptions] = useState({
    Bold: false,
    Italics: false,
    underLine: false,
    Lists: false,
  });

  const [details, setDetails] = useState({
    FullName: getSavedData()?.FullName || "John Doe",
    Address: getSavedData()?.Address || "123, XYZ street, ABC city",
    Role: getSavedData()?.Role || "Software Developer",
    Company: getSavedData()?.Company || "ABC Pvt. Ltd.",
    Phone: getSavedData()?.Phone || "1234567890",
  });

  useEffect(() => {
   
  }, []);

  return (
    <div
      className={`h-full w-full flex p-2 overflow-hidden text-black/[0.5] select-none transition duration-300 z-50`}
    >
      <div
        className={`flex justify-between  border-2 font-sans ${
          toggle === false
            ? `bg-gray-300/[0.4] border-gray-300 text-black`
            : `bg-gray-400/[0.2] border-gray-500 text-white`
        }  h-full w-full rounded-xl p-4`}
      >
        <span className="flex flex-col text-lg lg:text-2xl gap-4 capitalize">
          {Object.keys(details).map((data, i) => (
            <span key={i} className="flex gap-2">
              <p
                className={`${
                  toggle == false ? "text-black/[0.6]" : "text-white/[0.6]"
                } font-bold uppercase ${options.Lists ? "hidden" : ""}`}
              >
                {data}
              </p>
              <p className={`${options.Lists ? "hidden" : ""}`}>-</p>
              <p
                className={`font-mono ${options.Bold ? "font-bold" : ""} ${
                  options.Italics ? "italic" : ""
                } ${options.underLine ? "underline" : ""} ${
                  options.Lists ? "list-item list-inside" : ""
                }`}
              >
                {Object.values(details).map((val, i) => val)[i]}
              </p>
            </span>
          ))}
        </span>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => {
              setOptions((prev) => ({
                ...prev,
                Bold: !prev.Bold,
              }));
            }}
            className={` border-2 border-black/[0.2] h-12 w-12 text-[3rem] rounded-xl flex items-center justify-center ${
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
                strokeLinejoin="round"
                d="M6.75 3.744h-.753v8.25h7.125a4.125 4.125 0 0 0 0-8.25H6.75Zm0 0v.38m0 16.122h6.747a4.5 4.5 0 0 0 0-9.001h-7.5v9h.753Zm0 0v-.37m0-15.751h6a3.75 3.75 0 1 1 0 7.5h-6m0-7.5v7.5m0 0v8.25m0-8.25h6.375a4.125 4.125 0 0 1 0 8.25H6.75m.747-15.38h4.875a3.375 3.375 0 0 1 0 6.75H7.497v-6.75Zm0 7.5h5.25a3.75 3.75 0 0 1 0 7.5h-5.25v-7.5Z"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              setOptions((prev) => ({
                ...prev,
                Italics: !prev.Italics,
              }));
            }}
            className={`border-2 border-black/[0.2] h-12 w-12 text-[3rem] rounded-xl flex items-center justify-center ${
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
                d="M5.248 20.246H9.05m0 0h3.696m-3.696 0 5.893-16.502m0 0h-3.697m3.697 0h3.803"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              setOptions((prev) => ({
                ...prev,
                underLine: !prev.underLine,
              }));
            }}
            className={`border-2 border-black/[0.2] h-12 w-12 text-[3rem] rounded-xl flex items-center justify-center ${
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
                d="M17.995 3.744v7.5a6 6 0 1 1-12 0v-7.5m-2.25 16.502h16.5"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              setOptions((prev) => ({
                ...prev,
                Lists: !prev.Lists,
              }));
            }}
            className={`border-2 border-black/[0.2] h-12 w-12 text-[3rem] rounded-xl flex items-center justify-center ${
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
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RichText;
