import { useState } from "react";

export default function SignUpForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers:
        {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "randomusername",
          password: "randompassword",
        }),
      });
      const json = await response.json();
      console.log(json);
      setToken(json.token);
      localStorage.setItem("Token", json.token);
    } catch (error) {
      //console.log("Error occured", error);
    }
  };

  return (
    <>
      <h2>Sign Up!</h2>

      <form onSubmit={handleSubmit}>

        <label>
          Username:
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
