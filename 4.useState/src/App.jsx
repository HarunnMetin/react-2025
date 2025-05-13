import { useState } from "react";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("Harun");
  // const [lastName, setLastName] = useState("Metin");
  const [names, setNames] = useState(["Derya", "Acip", "Derin", "Serhat"]);
  // console.log(names);
  const [user, userInfo] = useState({ userName: "harun", password: "123455" });
  const [show, setShow] = useState(true);

  // const handleChange = () => {
  //   setFirstName("xxxxxXXXXX");
  // };

  return (
    <div>
      {show ? (
        <div>
          {user.userName} {user.password}
        </div>
      ) : (
        <div> Sonuclari gosterme</div>
      )}
    </div>
  );
}

export default App;
