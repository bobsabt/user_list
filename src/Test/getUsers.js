const axios = require("axios");

const BASE_URL = "https://assessment-users-backend.herokuapp.com";

const getUsers = async () => {
  try {
    let response = await axios.get(`${BASE_URL}/users`);
    return response;
  } catch (error) {
    return "error";
  }
};

module.exports = getUsers;
