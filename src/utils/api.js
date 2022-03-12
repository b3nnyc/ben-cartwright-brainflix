import axios from "axios";

const baseApi = "http://localhost:8080";

export default {
  getAll: () => axios.get(`${baseApi}`),
  getVideoById: (id) => axios.get(`${baseApi}/videos/${id}`),
  postComment: (id, comment) =>
    axios.post(`${baseApi}/videos/${id}`, {
      name: "Benny",
      comment: comment,
    }),
};
