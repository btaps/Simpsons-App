import { useEffect } from "react";

import Main from "../components/Main";
import "./App.css";

function App() {
  useEffect(() => {
    // Create event listener for button to fire search
    // Done in App.js to only create one event listener
    const input = document.getElementById("intro-search");
    input.addEventListener("keyup", function (event) {
      // Number 13 is the "Enter" key on the keyboard
      if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("intro-button").click();
      }
    });
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
