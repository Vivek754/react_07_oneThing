import { useState } from "react";

import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

import CustomForm from "./components/CustomForm";
import OneThing from "./components/OneThing";

function getSuccessMessage() {
  const messages = ["Congrates", "Great Job", "Um... Okay"];
  return messages[Math.floor(Math.random() * messages.length)];
}

function App() {
  const [thing, setThing] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    thing.length == 0 ? setIsCompleted(false) : setIsCompleted(true);
  };

  const handleInput = (e) => {
    setThing(e.target.value);
  };

  const handleCompletedThing = async (e) => {
    e.target.setAttribute("disabled", true);
    setThing(getSuccessMessage());
    await jsConfetti.addConfetti();
    e.target.removeAttribute("disabled");
    setThing("");
    setIsCompleted(false);
  };

  return (
    <div>
      <main className="flex flex-col justify-center items-center h-screen">
        {!isCompleted && (
          <CustomForm
            thing={thing}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
          />
        )}
        {isCompleted && (
          <OneThing thing={thing} handleCompletedThing={handleCompletedThing} />
        )}
      </main>
    </div>
  );
}

export default App;
