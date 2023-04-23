import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState(1);

  const [error, setError] = useState({});

  function changeNameHandler(event) {
    setEnteredName(event.target.value);
  }
  function changeAgeHandler(event) {
    setEnteredAge(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      setError({
        title: "Invalid Name Input",
        message: "Please enter a valid name!",
      });
      return;
    }
    if (+enteredAge < 1 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Age",
        message: "Please enter an age number!",
      });
      return;
    }
    props.onAddUser({
      id: Math.random() * 10,
      name: enteredName,
      age: enteredAge,
    });
    setEnteredAge("");
    setEnteredName("");
  };

  function onConfirm() {
    setError({});
  }

  return (
    <div>
      {!!error.title && <ErrorModal error={error} onConfirm={onConfirm} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={changeNameHandler}
            value={enteredName}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            min={1}
            onChange={changeAgeHandler}
            value={enteredAge}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
