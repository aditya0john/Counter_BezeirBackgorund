"use client";
import BezierBackground from "@/components/BezeirBackground";
import Counter from "@/components/Counter";
import ProgressBarForm from "@/components/ProgressBarForm";
import RichText from "@/components/RichText";
import { useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(true);

  return (
    <main
      className={`h-full lg:h-screen w-screen ${
        toggle === false ? "bg-white" : "bg-black text-white"
      }   transition duration-300`}
    >
      <BezierBackground>
        {click()}
        <section className="flex flex-col h-full w-full">
          <Counter toggle={toggle} />
          <RichText toggle={toggle} />
        </section>
        <section className="h-full w-full z-20">
          <ProgressBarForm toggle={toggle} />
        </section>
      </BezierBackground>
    </main>
  );

  function click() {
    return (
      <div className="absolute right-6 top-6 z-50">
        <button
          onClick={() => setToggle(!toggle)}
          className={`rounded-full z-50 p-2 ${
            toggle == false ? "bg-black/[0.1]" : "bg-white/[0.1]"
          }`}
        >
          {toggle === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
      </div>
    );
  }
}
