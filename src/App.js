import styles from "./App.css";
import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Modal } from "./components/Modal/Modal.js";
import { Searchbar } from "./components/Searchbar/Searchbar.js";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.js";
import Loader from "./components/Loader/Loader.js";
import Button from "./components/Button/Button.js";
import { fetchImagesQuery } from "./components/services/api.js";

export default class App extends Component {
  state = {
    searchQuery: "",
    images: [],
    page: 1,
    imageSelected: "",
    status: "idle",
  };
  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({ status: "pending" });
      try {
        const images = await fetchImagesQuery(searchQuery, page);
        if (!images.length) {
          throw new Error();
        }
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          status: "resolved",
        }));
      } catch (error) {
        this.setState({
          status: "rejected",
        });
        toast.warning(`Not found any images by query: ${searchQuery}`);
      }
      page > 1 &&
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
    }
  }
  handleChange = (searchQuery) => {
    if (this.state.searchQuery === searchQuery) {
      toast.info("Please, enter new query!");
      return;
    }
    this.resetState();
    this.setState({ searchQuery });
  };

  resetState = () => {
    this.setState({
      searchQuery: "",
      page: 1,
      imageSelected: null,
      images: [],
      status: "idle",
    });
  };
  toggleModal = () => {
    this.setState(({ imageSelected }) => ({ imageSelected: !imageSelected }));
  };
  incrementPage = () => {
    this.setState({ page: this.state.page + 1 });
  };
  handleSelectedImage = (imageURL) => {
    this.setState({ imageSelected: imageURL });
  };
  render() {
    const { images, imageSelected, status } = this.state;
    if (status === "idle") {
      return (
        <div className={styles.container}>
          <Searchbar onSearch={this.handleChange} />
        </div>
      );
    }
    if (status === "pending") {
      return (
        <div className={styles.container}>
          <Searchbar onSearch={this.handleChange} />
          <Loader />
        </div>
      );
    }
    if (status === "resolved") {
      return (
        <div className={styles.container}>
          <Searchbar onSearch={this.handleChange} />
          <ImageGallery
            images={images}
            imageSelected={this.handleSelectedImage}
          />
          {images.length > 0 && <Button onClick={this.incrementPage} />}
          {imageSelected && (
            <Modal largeImageURL={imageSelected} onClose={this.toggleModal} />
          )}
          <ToastContainer autoClose={3000} />
        </div>
      );
    }
    if (status === "rejected") {
      return (
        <div className={styles.container}>
          <Searchbar onSearch={this.handleChange} />
          <ToastContainer autoClose={3000} />
        </div>
      );
    }
  }
}
