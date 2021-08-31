import styles from "../Button/button.module.css";
import PropTypes from "prop-types";

export default function Button({ onClick }) {
  return (
    <div className={styles.button}>
      <button className={styles.buttonClick} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
