import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = function (event) {
    event.preventDefault();

    // Reset
    setUsername("");
    setAge("");

    // Errors
    if (!username.trim() || !age.trim()) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+age < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0 )",
      });
      return;
    }

    props.submitEvent(username, age);
  };

  const usernameChangeHandler = function (event) {
    setUsername(event.target.value);
  };

  const ageChangeHandler = function (event) {
    setAge(event.target.value);
  };

  const errorHandler = function () {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
