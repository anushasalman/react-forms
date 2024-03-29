import './App.css';
import Authenticate from "./Authenticate.jsx";
import SignUpForm from "./SignUpForm.jsx";
import { useState } from "react";



export default function App() {
  return (
    <>
      <Authenticate />
      <SignUpForm />
    </>
  );
}

