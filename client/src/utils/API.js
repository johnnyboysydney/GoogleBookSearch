import axios from "axios";
const SEARCH_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {

  getGoogleBookSearch: (query) => {
    return axios.get(SEARCH_URL + query);
  },
  saveBook: (bookSaveChoice)  =>  {
    return axios.post("/api/books", bookSaveChoice);
  },
  getBooks: ()  => {
    return axios.get("/api/books");
  },
  getBook: (id) => {
    return axios.get("/api/books/" + id);
  },
  deleteBook: (id) => {
    return axios.delete("/api/books/" + id);
  },
};