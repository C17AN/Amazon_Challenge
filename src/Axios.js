import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-87510/us-central1/api/", // API (cloud function) URL
});

export default instance;
