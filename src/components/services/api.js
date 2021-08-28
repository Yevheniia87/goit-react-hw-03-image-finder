import axios from "axios";

export const fetchImagesQuery = (searchQuery, page = 1) => {
  const API_KEY = "22317274-5f5939ff79d612c3aacb02224";
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};
