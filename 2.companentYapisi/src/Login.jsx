import React from "react";

export const users = [
  {
    username: "harun",
    password: "123456",
  },
  {
    username: "ela",
    password: "86756886",
  },
  {
    username: "derin",
    password: "6767898",
  },
];

function Login() {
  return (
    <div>
      <div>
        <div>
          <p>Kullanici adi</p>
          <input type="text" />
        </div>

        <div>
          <p>Sifre</p>
          <input type="text" />
        </div>

        <div>
          <button>Giris Yap</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
