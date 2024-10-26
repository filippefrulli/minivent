import styles from "./buttons.module.css";
import { FaPlus } from "react-icons/fa";

const Buttons = () => {
  return (
    <div className={styles.navbar}>
      <button className={styles.createEventButton}>
        <FaPlus className={styles.plusIcon} /> Create new event
      </button>
      <button className={styles.profileButton}>
        FF
      </button>
    </div>
  );
};

export default Buttons;
