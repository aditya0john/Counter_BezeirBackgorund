"use client";
import { useState } from "react";

function ProgressBarForm({ toggle }: { toggle: boolean }) {
  const [progress, setProgress] = useState(0);
  const stages = ["Personal Details", "Address"];
  const [detials, setDetails] = useState({
    FullName: "",
    Address: "",
    Role: "",
    CompanyName: "",
    Phone: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("form", JSON.stringify(detials)); // data to localstorage
    console.log("Form Submitted with Data:", detials);
    alert("Form Submitted!");
  };

  const renderform = () => {
    switch (progress) {
      case 0:
        return (
          <div className="h-full">
            <span>
              <label
                className={`${
                  toggle === false ? theme.textLight : theme.textDark
                } mx-1 font-semibold`}
              >
                Name
              </label>
              <input
                type="text"
                value={detials.FullName}
                placeholder="type your Full Name"
                onChange={(e) => {
                  setDetails((prevDetails) => ({
                    ...prevDetails,
                    FullName: e.target.value,
                  }));
                }}
                className={`rounded-lg text-black border-2 ${
                  toggle === false
                    ? "bg-white border-gray-200"
                    : "bg-gray-00 border-gray-500 placeholder:text-gray-500"
                }  px-4 py-2 w-full`}
              ></input>
            </span>

            <span>
              <label
                className={`${
                  toggle === false ? theme.textLight : theme.textDark
                } mx-1 font-semibold`}
              >
                Role
              </label>
              <input
                type="text"
                value={detials.Role}
                placeholder="type the role you are provided"
                onChange={(e) => {
                  setDetails((prevDetails) => ({
                    ...prevDetails,
                    Role: e.target.value,
                  }));
                }}
                className={`rounded-lg text-black border-2 ${
                  toggle === false
                    ? "bg-white border-gray-200"
                    : "bg-gray-00 border-gray-500 placeholder:text-gray-500"
                }  px-4 py-2 w-full`}
              ></input>
            </span>

            <span>
              <label
                className={`${
                  toggle === false ? theme.textLight : theme.textDark
                } mx-1 font-semibold`}
              >
                Company Name
              </label>
              <input
                type="text"
                value={detials.CompanyName}
                placeholder="example : company_xyz"
                onChange={(e) => {
                  setDetails((prevDetails) => ({
                    ...prevDetails,
                    CompanyName: e.target.value,
                  }));
                }}
                className={`rounded-lg text-black border-2 ${
                  toggle === false
                    ? "bg-white border-gray-200"
                    : "bg-gray-00 border-gray-500 placeholder:text-gray-500"
                }  px-4 py-2 w-full`}
              ></input>
            </span>

            <span>
              <label
                className={`${
                  toggle === false ? theme.textLight : theme.textDark
                } mx-1 font-semibold`}
              >
                Phone Number
              </label>
              <input
                type="number"
                value={detials.Phone}
                placeholder="+91 - XXXXX XXXXX"
                onChange={(e) => {
                  setDetails((prevDetails) => ({
                    ...prevDetails,
                    Phone: e.target.value,
                  }));
                }}
                className={`rounded-lg text-black border-2 ${
                  toggle === false
                    ? "bg-white border-gray-200"
                    : "bg-gray-00 border-gray-500 placeholder:text-gray-500"
                }  px-4 py-2 w-full`}
              ></input>
            </span>
          </div>
        );

      case 1:
        return (
          <span className="h-full">
            <label
              className={`${
                toggle === false ? theme.textLight : theme.textDark
              } mx-1 font-semibold`}
            >
              Address
            </label>
            <input
              type="text"
              value={detials.Address}
              placeholder="type your address - house no. - state - area"
              onChange={(e) => {
                setDetails((prevDetails) => ({
                  ...prevDetails,
                  Address: e.target.value,
                }));
              }}
              className={`rounded-lg text-black border-2 ${
                toggle === false
                  ? "bg-white border-gray-200"
                  : "bg-gray-00 border-gray-500 placeholder:text-gray-500"
              }  px-4 py-2 w-full`}
            ></input>
          </span>
        );
    }
  };

  const Next = () => {
    if (progress < stages.length - 1) {
      setProgress(progress + 1);
    }
  };

  const Back = () => {
    if (progress > 0) {
      setProgress(progress - 1);
    }
  };

  const theme = {
    ProgressColorLight: "bg-gray-200/[0.1]",
    ProgressColorDark: "bg-black",
    PrimaryColorLight: "bg-gray-100/[0.4]",
    BorderLight: "border-gray-300",
    PrimaryColorDark: "bg-gray-400/[0.2]",
    BorderDark: "border-gray-500",
    textLight: "text-black",
    textDark: "text-white",
  };

  return (
    <div
      className={`h-full w-full overflow-hidden p-2 flex items-center justify-center text-black/[0.5] select-none transition duration-300 z-50`}
    >
      <div
        className={`border-2 ${
          toggle === false
            ? `${theme.PrimaryColorLight} border-gray-300`
            : `${theme.PrimaryColorDark} border-gray-500`
        }  h-full w-full rounded-xl p-4`}
      >
        <span>
          <p
            className={`capitalize text-2xl ${
              toggle === false ? "text-black" : "text-white"
            } font-bold tracking-wide`}
          >
            Welcome, fill the form
          </p>
          <p
            className={`font-semibold ${
              toggle === false ? "text-black" : "text-gray-300"
            }`}
          >
            enter your details below
          </p>
        </span>

        <div className="flex justify-around mt-4">
          {Object.keys(stages).map((_, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <div
                className={` ${
                  i <= progress && toggle === false
                    ? `${theme.ProgressColorDark} text-white`
                    : i <= progress && toggle === true
                    ? `bg-white text-black`
                    : `${theme.ProgressColorLight} text-gray-300`
                } h-[60px] w-[60px] rounded-full flex items-center justify-center text-xl `}
              >
                {i + 1}
              </div>
              <p
                className={`${
                  i <= progress && toggle === false
                    ? "text-black"
                    : "text-gray-300"
                }`}
              >
                {stages[i]}
              </p>
            </div>
          ))}
        </div>

        <div className="my-2 mx-6 flex flex-col items-start justify-center relative">
          <span
            className={`h-3 w-full ${
              toggle === false ? "bg-gray-200" : "bg-gray-300/[0.4]"
            } rounded-lg`}
          ></span>
          <span
            className={`h-3 ${
              toggle === false ? "bg-black" : "bg-white"
            } rounded-lg absolute transition-all duration-300`}
            style={{
              width: progress === 0 ? "30%" : progress === 1 ? "100%" : "",
            }}
          ></span>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col">
          {renderform()}
          <div>
            {progress < 1 && (
              <div className="mt-8 flex items-end justify-between px-4">
                <button
                  disabled
                  onClick={Back}
                  className={`${
                    progress > 0
                      ? "bg-black text-white"
                      : "bg-gray-200/[0.3] cursor-not-allowed"
                  } rounded-lg px-4 py-2 flex items-center justify-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                  Back
                </button>
                <button
                  onClick={Next}
                  className={`${
                    progress === 3 ? "bg-gray-200" : "bg-black text-white"
                  }  text-white rounded-lg px-4 py-2 flex items-center justify-center`}
                >
                  Next
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            )}
            {progress === 1 && (
              <div className="mt-8 flex items-end justify-between px-4">
                <button
                  onClick={Back}
                  className={`${
                    progress > 0 ? "bg-black text-white" : "bg-gray-200"
                  } rounded-lg px-4 py-2 flex items-center justify-center`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                  Back
                </button>
                <button
                  type="submit"
                  className={`bg-green-400 text-white rounded-lg px-4 py-2 flex items-center justify-center`}
                >
                  SUBMIT
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProgressBarForm;
