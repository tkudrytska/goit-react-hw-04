import axios from "axios";

const accessKey = "zPuoLU4qVNo272rgZf9zQFsFrYSPNoXQIhJs6MruE1M";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchPhotos = async (query, page) => {
    const response = await axios.get(`search/photos?query=${query}&client_id=${accessKey}&page=${page}`);
    return response.data;
};
