import { useState } from "react";

const SignUpForm = ({token,setToken}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup", 
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify 
        ({ 
          username: username, 
          password: password,
        })
      });

      const result = await response.json();
      console.log(result);
      setToken(result.token);

    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br></br>
        <label>
          Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUpForm;