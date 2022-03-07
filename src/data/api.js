import axios from "axios";

const baseApi = "https://project-2-api.herokuapp.com";
const apiKey = "?api_key=12535c15-9811-4ad6-9cc7-4a4ff0a1626c";

export default {
  getAll: () => axios.get(`${baseApi}/videos/${apiKey}`),
  getVideoById: (id) => axios.get(`${baseApi}/videos/${id}${apiKey}`),
  postComment: (id, comment) =>
    axios.post(`${baseApi}/videos/${id}${apiKey}`, {
      name: "Ben",
      comment: comment,
    }),
};
