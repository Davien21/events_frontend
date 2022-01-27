import React from "react";
import styles from "./congrats.module.scss";
import { Button } from "../..";

function Congrats() {
  return (
    <div className={styles.congrats__con}>
      <h1>
        <span>Congratulations! </span> 
      </h1>
      <h5>
        Your NFT is ready! Open your email to view and download the NFT ticket.
        See you at the event 🚀
      </h5>
      <span className={styles.congrats__button__con}>
        <Button text="Done" type="primary" />
      </span>
    </div>
  );
}

export default Congrats;
