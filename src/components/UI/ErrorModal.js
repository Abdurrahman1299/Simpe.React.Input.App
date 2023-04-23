import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

export default function ErrorModal({ error, onConfirm }) {
  return (
    <div>
      <div className={classes.backdrop} onClick={onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{error.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{error.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
