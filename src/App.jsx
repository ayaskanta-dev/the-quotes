import { ArrowsClockwise } from "phosphor-react";
import React, { useState } from "react";
import data from "./the-quotes.json";
import Switcher from "./ThemeSwitcher";

function App() {
  const [newIndex, setNewIndex] = useState();

  var windowWidth = window.innerWidth;

  const length = data.length;
  const index = Math.floor(Math.random() * length);

  function generateNew() {
    const index = Math.floor(Math.random() * length);
    setNewIndex(index);
  }

  return (
    <main className="h-screen w-full">
      <section className="flex flex-col justify-between h-[100vh] md:h-screen w-[80vw] md:w-[70vw] xl:w-[60vw] mx-auto">
        <nav className="h-[10vh] flex justify-between items-center">
          <h1 className="text-3xl font-bold">The Quotes</h1>
          <Switcher />
        </nav>
        <div className="flex flex-col gap-y-4 text-2xl md:text-3xl xl:text-4xl">
          <h2 className="text-justify leading-normal">{data[index].quote}</h2>
          <h2 className="text-right">- {data[index].person}</h2>
        </div>
        <div className="h-[15vh] flex items-start justify-center">
          <button onClick={generateNew} className="text-lg md:text-xl xl:text-2xl flex items-center font-semibold gap-x-4 py-3 px-6 rounded-full border-2 border-dark dark:border-light">
            <ArrowsClockwise size={32} weight="bold" />
            <p>Generate New</p>
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
