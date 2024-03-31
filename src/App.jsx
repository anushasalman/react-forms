import { useState } from "react";
import './App.css';
import Authenticate from "./Authenticate.jsx";
import SignUpForm from "./SignUpForm.jsx";


function App() {
  const [token, setToken] = useState(null);

  return (
    <>
    <div>
      <h2>Welcome back!</h2>
      </div>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App