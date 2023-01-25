import axios from 'axios';

const API_KEY = '32363221-575cc77647989ad3c866cfeee';
const BASE_URL = 'https://pixabay.com/api/';

const fetchPictures = (searchRequest, page) => {
  return axios(BASE_URL, {
    params: {
      key: API_KEY,
      q: searchRequest,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  });
};

export default fetchPictures;
