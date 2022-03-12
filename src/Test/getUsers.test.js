const axios = require("axios");
const getUsers = require("./getUsers");

const BASE_URL = "https://assessment-users-backend.herokuapp.com";

jest.mock("axios");

describe("getUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      const users = [
        { first_name: "Bruno", last_name: "Big", createdat: "2022" },
        { first_name: "Bret", last_name: "Bigger", createdat: "2022" },
      ];
      axios.get.mockResolvedValueOnce(users);

      const result = await getUsers();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual(users);
    });
  });

  describe("when API call fails", () => {
    it("should return error message", async () => {
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await getUsers();

      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual("error");
    });
  });
});
