import Buttons from "./buttons/Buttons";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Minivent</div>
      <div>
        <Buttons />
      </div>
    </div>
  );
};

export default Navbar;
