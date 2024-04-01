import React from "react";
import "./Home.css";

const RegistrationForm = ({
  name,
  city,
  email,
  password,
  handleChangeEmail,
  handleChangeName,
  handleChangeCity,
  handleChangePassword,
  onSubmitForm,
}) => {
  // валідація паролю
  const checkPass = (pass) => {
    const beginWithoutDiting = /^\D.*$/;
    const withoutSpecialChars = /^[^-() /]*$/;
    const containsLetters = /^.*[a-zA-Z]+.*$/;

    if (
      beginWithoutDiting.test(pass) &&
      withoutSpecialChars.test(pass) &&
      containsLetters.test(pass)
    ) {
      return true;
    } else {
      return false;
    }
  };

  // валідація імейлу
  const checkEmail = (email) => {
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValidation.test(email);
  };

  const ValidForm = () => {
    return checkEmail(email) && checkPass(password);
  };

  return (
    <div className="block">
      <p>Registration Form</p>
      <form>
        <div>
          <label>Name </label>
          <input
            value={name}
            onChange={(event) => handleChangeName(event)}
          ></input>
        </div>
        <div>
          <label>City </label>
          <input
            value={city}
            onChange={(event) => handleChangeCity(event)}
          ></input>
        </div>
        <div>
          <label>Email </label>
          <input
            value={email}
            onChange={(event) => handleChangeEmail(event)}
          ></input>
        </div>
        <div>
          <label>Password </label>
          <input
            value={password}
            onChange={(event) => handleChangePassword(event)}
          ></input>
        </div>
        {ValidForm() && <button onClick={onSubmitForm}>Save</button>}
      </form>
    </div>
  );
};

export default RegistrationForm;
