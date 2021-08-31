import styles from "../Searchbar/searchbar.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export function Searchbar({ onSearch }) {
  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.elements.searchQuery.value.trim() === "") {
      toast.info("Please, enter query!");
      return;
    }
    onSearch(e.target.elements.searchQuery.value.toLowerCase().trim());
    e.target.elements.searchQuery.value = "";
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSearch}>
        <button type="submit" className={styles.searchForm_button}>
          <span className={styles.searchForm_button_label}>Search</span>
        </button>

        <input
          name="searchQuery"
          className={styles.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
