import { Component } from 'react';
import fetchPictures from 'services/pictures-api';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {};

  componentDidUpdate(prevProps, _) {
    if (prevProps.value !== this.props.value) {
      fetchPictures().then(data => console.log(data.data));
    }
  }

  render() {
    return <></>;
  }
}
export default ImageGallery;
