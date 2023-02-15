const StepTwo = ({ name, email, password, setStepTwo }) => {
  const handleEdit = () => {
    setStepTwo(false);
  };
  return (
    <div className="results-container">
      <h2>Results</h2>
      <div className="results-infos">
        <p>Name:{name}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
      </div>

      <div className="edit-information">
        <button onClick={handleEdit}>Edit your information</button>{" "}
      </div>
    </div>
  );
};
export default StepTwo;
