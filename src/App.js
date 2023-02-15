import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import StepTwo from "./Components/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [stepTwo, setStepTwo] = useState(false);
  const [eye, setEye] = useState(true);
  const [eye2, setEye2] = useState(true);
  const [type, setType] = useState(false);
  return (
    <div className="App">
      {stepTwo ? (
        <StepTwo
          name={name}
          setStepTwo={setStepTwo}
          email={email}
          password={password}
        ></StepTwo>
      ) : (
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          password={password}
          setPassword={setPassword}
          setStepTwo={setStepTwo}
          eye={eye}
          setEye={setEye}
          eye2={eye2}
          setEye2={setEye2}
          type={type}
          setType={setType}
        ></Form>
      )}
    </div>
  );
}

export default App;
