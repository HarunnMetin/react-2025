import axios from "axios";
import "./App.css";
import { useEffect } from "react";

const Base_Url = "http://localhost:3001";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(Base_Url + "/users");
    console.log(response.data);
    
  };

  const getUserById = async(userId) =>{

    const response = await axios.get(Base_Url + "/users/" + userId)
    console.log(response.data);
    
  }

  useEffect(()=>{
    getAllUsers()
    getUserById(2)
  },[])

  return <div></div>;
}

export default App;
