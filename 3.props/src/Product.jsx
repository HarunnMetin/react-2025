import React from "react";

function Product(props) {
  const { productName, price } = props;

  return (
    <div>
      <div>URUN BILGILERI</div>
      <hr />
      <div>
        <div>Isim: {productName}</div>
        <div>Fiyat: {price}</div>
      </div>
      <hr />
      {/* <div>
        <div>Isim: Pantolon</div>
        <div>Fiyat: 2000</div>
      </div> */}
    </div>
  );
}

export default Product;
