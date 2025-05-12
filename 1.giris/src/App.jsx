import "./App.css";

function App() {
  // const promptValue = Number(prompt("Bir şey yaz:"));
  let vize1 = Number(prompt("vize 1'i giriniz"));
  let vize2 = Number(prompt("vize 2'i giriniz"));

  const ortalama = (vize1 + vize2) / 2;

  return (
    <div>
      <p>Ogrenci ortalamasi : {ortalama}</p>

      {ortalama >= 50 ? <p>Gectiniz </p> : <p>Kaldiniz</p>}
    </div>
  );
}

export default App;
