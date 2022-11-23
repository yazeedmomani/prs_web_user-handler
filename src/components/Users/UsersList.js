import Card from "../UI/Card";
import classes from "./UsersList.module.css";

function UsersList(props) {
  // Guard Clause
  if (!props.users) return;

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((current) => (
          <li>
            {current.name} ({current.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
