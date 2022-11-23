import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = function (event) {
    event.preventDefault();

    console.log(username, age);

    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = function (event) {
    setUsername(event.target.value);
  };

  const ageChangeHandler = function (event) {
    setAge(event.target.value);
  };

  return (
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
  );
}

export default AddUser;
