import styles from "../Searchbar/searchbar.module.css";
export function Searchbar() {
  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm}>
        <button type="submit" className={styles.searchForm_button}>
          <span className={styles.searchForm_button_label}>Search</span>
        </button>

        <input
          className={styles.searchForm_input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
