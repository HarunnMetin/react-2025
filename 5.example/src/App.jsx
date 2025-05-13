import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    setCount(count - 1);
  };

  console.log("component render edildi");

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={arttir}>Arttir</button>
        <button onClick={azalt}>Azalt</button>
      </div>
    </div>
  );
}

export default App;
