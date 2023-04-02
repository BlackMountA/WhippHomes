import { useState } from "react";
import "./Form.css";

let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
// let regex = new RegExp(" /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/");
const Form = (props) => {
  const classes = "form" + props.className;
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoneNo, setEnteredPhoneNo] = useState("");
  const [invalidPhoneNo, setInvalidPhoneNo] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const enteredNameHandler = (e) => {
    setEnteredName(e.target.value);
    setInvalidName(false);
  };
  const enteredEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
    setInvalidEmail(false);
  };
  const enteredPhoneNoHandler = (e) => {
    setEnteredPhoneNo(e.target.value);
    setInvalidPhoneNo(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (
      regex.test(enteredEmail) &&
      +enteredPhoneNo > 11 &&
      enteredName.trim().length > 0
    ) {
      const data = {
        name: enteredName,
        phonenumber: enteredPhoneNo,
        email: enteredEmail,
      };
      props.data(data);
    }

    if (!regex.test(enteredEmail)) {
      setInvalidEmail(true);
    }
    if (+enteredPhoneNo.length < 11) {
      setInvalidPhoneNo(true);
    }
    if (!enteredName.trim().length > 0) {
      setInvalidName(true);
    }
  };
  return (
    <form className={classes} onSubmit={submitHandler}>
      <div>
        <label>Full name</label>
        <input
          type="text"
          placeholder="John Doe"
          onChange={enteredNameHandler}
        />
        {invalidName && <p className="invalid-email">Invalid Name</p>}
      </div>
      <div>
        <label>Enter your email address</label>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={enteredEmailHandler}
        />
        {invalidEmail && <p className="invalid-email">Invalid Email</p>}
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          onChange={enteredPhoneNoHandler}
        />
        {invalidPhoneNo && (
          <p className="invalid-email">Invalid Phone Number</p>
        )}
      </div>
      <button type="submit"> JOIN THE WAITLIST</button>
    </form>
  );
};
export default Form;
