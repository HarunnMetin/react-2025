import "./App.css";
import Container from "./container";
import Product from "./Product";

function App() {
  const productName = "Tisort";

  return (
    <div>
      <Container>
        <Product productName="Telefon" price = {230000}/>
      </Container>
    </div>
  );

  // return (
  //   <div>
  //     {/* <Product productName ="Ayakkabi" price = {2000} />
  //     <hr />
  //     <Product productName= "Pantolon" price= {1200}/>
  //     <Product productName={productName} price={350}/> */}

  //   </div>
  // );
}

export default App;
