import axios from "axios";
import "./App.css";
import { useEffect } from "react";

const Base_Url = "http://localhost:3001";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(Base_Url + "/users");
    console.log(response.data);
  };

  const getUserById = async (userId) => {
    const response = await axios.get(Base_Url + "/users/" + userId);
    console.log(response.data);
  };

  const createUsers = async (newUser) => {
    const response = await axios.post(`${Base_Url}/users`, newUser);

    console.log("Response", response.data);
  };

  const updateUser = async (userId, updateUser) => {
    await axios.put(`${Base_Url}/users/${userId}`, updateUser);
  };

  useEffect(() => {
    getAllUsers();
    getUserById(2);

    const newUser = {
      id: 12,
      username: "Succes000777",
      password: "340245",
    };
    // createUsers(newUser);
    updateUser(1, { id: "2", username: "aaaaaa", password: "0000000" });
  }, []);

  return <div></div>;
}

export default App;
