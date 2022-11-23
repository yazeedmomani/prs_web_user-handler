import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const addUserHandler = function (event) {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input
          id="username"
          type="text"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
