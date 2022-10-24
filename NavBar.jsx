import React from "react";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <div className={styles.container}>
      <span className={styles.nav}>Home</span>
      <span className={styles.nav}>Index</span>
      <span className={styles.nav}>Menu</span>
    </div>
  );
}

export default NavBar;
