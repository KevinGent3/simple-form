const Form = ({
  stepTwo,
  setStepTwo,
  name,
  email,
  setEmail,
  setName,
  password,
  setPassword,
  setConfirmPassword,
  confirmPassword,
  eye,
  setEye,
  type,
  setType,
  eye2,
  setEye2,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        setStepTwo(true);
      } else {
        alert("Vos 2 mots de passe ne sont pas identiques");
      }
    }
  };
  const handleEye = () => {
    setEye(!eye);
    const passwordInput = document.getElementById("password");
    passwordInput.type = eye ? "password" : "text";
  };
  const handleEye2 = () => {
    setEye2(!eye2);
    const confirmPasswordInput = document.getElementById("confirmPassword");
    confirmPasswordInput.type = eye2 ? "password" : "text";
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create account</h2>
      <div className="form-container">
        <div className="infos-form">
          <p>Name</p>
          <input
            onChange={handleName}
            type="text"
            placeholder="Jean Dupont"
            value={name}
          />

          <p>Email</p>
          <input
            onChange={handleEmail}
            type="email"
            placeholder="Jean Dupont"
            value={email}
          />
          <p>Password</p>
          <input
            onChange={handlePassword}
            type="password"
            placeholder="azerty"
            value={password}
            id="password"
            className={password !== confirmPassword ? "red" : null}
          />
          <i
            onClick={handleEye}
            className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
            id="togglePassword"
          ></i>
          <p>Confirm your password</p>
          <input
            onChange={handleConfirmPassword}
            type="password"
            className={password !== confirmPassword ? "red" : null}
            placeholder="azerty"
            value={confirmPassword}
            id="confirmPassword"
          />
          <i
            onClick={handleEye2}
            className={`fa ${eye2 ? "fa-eye-slash" : "fa-eye"}`}
            id="toggleConfirmPassword"
          ></i>
        </div>
        {password !== confirmPassword && (
          <p style={{ color: "red" }}>
            Les mots de passe ne sont pas identiques
          </p>
        )}
        <div className="submit-button">
          <input type="submit" value="Register" />
        </div>
      </div>
    </form>
  );
};

export default Form;
