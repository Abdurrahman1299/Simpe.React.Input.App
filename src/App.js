import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

export default function App() {
  const [usersList, setUsersList] = useState([]);

  function onAddUser(newUser) {
    setUsersList((prevState) => [...prevState, newUser]);
  }
  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      <UsersList users={usersList} />
    </div>
  );
}
