import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman calisir");
  });

  useEffect(() => {
    console.log("yilk render edildiginde calisir");
  }, []);

  useEffect(() => {
    console.log(
      "ilk render edildiginde ve FIRSTNAME state degeri degistirildiginde calisir"
    );
  }, [firstName,lasttName]);

  // useEffect(() => {
  //   console.log(
  //     "ilk render edildiginde ve LASTNAME state degeri degistirildiginde calisir"
  //   );
  // }, [lasttName]);
  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Harun")}>Adi Degistir</button>
      </div>
      <div>
        <button onClick={() => setLastName("Metin")}>Soyadi Degistir</button>
      </div>
    </div>
  );
}

export default App;
