const axios = require("axios");

const BASE_URL = "https://assessment-users-backend.herokuapp.com";

const getUserBasedOnId = async (id) => {
  try {
    let response = await axios.get(`${BASE_URL}/users/${id}`);
    return response;
  } catch (error) {
    return "error";
  }
};

module.exports = getUserBasedOnId;
