import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Button from './Button';
import Modal from './Modal';
import fetchPictures from 'services/pictures-api';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchRequest: '',
  };

  handleSubmit = searchRequest => {
    this.setState({ searchRequest });
  };

  render() {
    return (
      <>
        <Searchbar onSearch={this.handleSubmit} />
        <ImageGallery value={this.state.searchRequest} />
      </>
    );
  }
}
