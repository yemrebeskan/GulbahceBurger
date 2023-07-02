import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [isInputWrong, setIsInputWrong] = useState(false);
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nameHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setName(event.target.value);
  };

  const submitNameHandler = () => {
    if (name.length < 3) {
      setIsInputWrong(true);
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div class="form-div">
      <div class="user-form">
        {isSubmitted && <p>Welcome, {name}</p>}
        {!isSubmitted && (
          <div className="form-div">
            <p>Please enter your name for a personal experience:</p>
            <input type="text" class="name-input" onChange={nameHandler} />
            <button
              class={
                !isInputWrong ? "name-button" : "name-button name-button-error"
              }
              onClick={submitNameHandler}
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
