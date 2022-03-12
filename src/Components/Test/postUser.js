const axios = require("axios");

const BASE_URL = "https://assessment-users-backend.herokuapp.com";

const postUser = async () => {
  try {
    let response = await axios.post(`${BASE_URL}/users`);
    return response;
  } catch (error) {
    return "error";
  }
};

module.exports = postUser;
