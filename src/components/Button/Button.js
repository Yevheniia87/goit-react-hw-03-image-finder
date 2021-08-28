import styles from "../Button/button.module.css";
export function Button({ onClick }) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
}
// window.scrollTo({
//   top: document.documentElement.scrollHeight,
//   behavior: "smooth",
// });
