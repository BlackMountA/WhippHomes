import { useState } from "react";
import "./Form.css";

let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhoneNo, setEnteredPhoneNo] = useState("");
  const [invalidPhoneNo, setInvalidPhoneNo] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  let content;
  const enteredNameHandler = (e) => {
    setEnteredName(e.target.value);
    setInvalidName(false);
  };
  const enteredEmailHandler = (e) => {
    setEnteredEmail(e.target.value);
    setInvalidEmail(false);
  };
  const enteredPhoneNoHandler = (e) => {
    console.log(enteredPhoneNo.length, typeof enteredPhoneNo);
    setEnteredPhoneNo(e.target.value);
    setInvalidPhoneNo(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (
      regex.test(enteredEmail) &&
      !enteredPhoneNo.trim().length < 11 &&
      enteredName.trim().length > 0
    ) {
      const data = {
        name: enteredName,
        phonenumber: enteredPhoneNo,
        email: enteredEmail,
      };
      props.data(data);
      console.log(data);
      setEnteredName("");
      setEnteredEmail("");
      setEnteredPhoneNo("");
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
  if (invalidName) {
    content = "Name fields must not be empty";
    console.log(content);
  }
  if (invalidEmail) {
    content = "Email must contain @ and must be the right mail format";
    console.log(content);
  }
  if (invalidPhoneNo) {
    content = "Phone Number must be greater than 11 digits";
    console.log(content);
  }
  return (
    <form className="form" onSubmit={submitHandler}>
      <div>
        <label>Full name</label>
        <input
          type="text"
          value={enteredName}
          placeholder="John Doe"
          onChange={enteredNameHandler}
        />
      </div>
      <div>
        <label>Enter your email address</label>
        <input
          type="email"
          value={enteredEmail}
          placeholder="Enter your email address"
          onChange={enteredEmailHandler}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          value={enteredPhoneNo}
          placeholder="Enter your phone number"
          onChange={enteredPhoneNoHandler}
        />
        {(invalidName || invalidEmail || invalidPhoneNo) && (
          <p className="invalid-email">Invalid {content}</p>
        )}
        {/* {invalidEmail && <p className="invalid-email">Invalid Email</p>}
        {invalidPhoneNo && (
          <p className="invalid-email">Invalid Phone Number</p>
        )} */}
      </div>
      <button type="submit"> JOIN THE WAITLIST</button>
    </form>
  );
};
export default Form;
