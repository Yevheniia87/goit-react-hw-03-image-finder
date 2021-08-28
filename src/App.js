import "./App.css";
import { Component } from "react";
import { Modal } from "./components/Modal/Modal.js";
import { Searchbar } from "./components/Searchbar/Searchbar.js";
import { ImageGallery } from "./components/ImageGallery/ImageGallery.js";
import { Loader } from "./components/Loader/Loader.js";
import { Button } from "./components/Button/Button.js";
import api from "./components/services/api.js";

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
    showModal: false,
    searchQuery: null,
    imageSelected: null,
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
    const { images, imageSelected } = this.state;
    return (
      <div>
        <Searchbar />
        <ImageGallery
          images={images}
          imageSelected={this.handleSelectedImage}
        />
        {images.length > 0 && <Loader onClick={this.incrementPage} />}
        {imageSelected && (
          <Modal largeImageURL={imageSelected} onClose={this.toggleModal} />
        )}

        <Button />
      </div>
    );
  }
}
