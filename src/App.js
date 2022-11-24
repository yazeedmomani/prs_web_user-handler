import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const submitEventHandler = function (username, age) {
    setUsers((previous) => [
      ...previous,
      { name: username, age: age, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser submitEvent={submitEventHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
