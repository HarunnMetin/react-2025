import { useState } from "react";
import "./App.css";

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);

  const ortalamaBul = ()=>{
    debugger
    const toplamSonuc = topla()/2;
    yazdir(toplamSonuc);

  }

  const topla = ()=>{
    debugger
   const toplam =  vize1 + vize2;
   return toplam;
  }

  const yazdir = (sonuc) => {
    debugger
    console.log("Ortalama :" + sonuc);
  };

  return(
    <>
    <div>
      <div>
        <input
          type="number"
          value={vize1}
          onChange={(event) => {
            setVize1(Number(event.target.value));
          }}
        />
      </div>
      <div>
        <input
          type="number"
          value={vize2}
          onChange={(event) => {
            setVize2(Number(event.target.value));
          }}
        />
      </div>
      <div>
        <button onClick={ortalamaBul}>Ortalama Bul</button>
      </div>
    </div>
  </>
  )
}

export default App;
