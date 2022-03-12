const axios = require("axios");
const postUser = require("./postUser");

const BASE_URL = "https://assessment-users-backend.herokuapp.com";

jest.mock("axios");

describe("getUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      const users = [
        { first_name: "Bruno", last_name: "Big", createdat: "2022" },
      ];
      axios.post.mockResolvedValueOnce(users);

      const result = await postUser();

      expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual(
        expect.arrayContaining([
          { first_name: "Bruno", last_name: "Big", createdat: "2022" },
        ])
      );
    });
  });

  describe("when API call fails", () => {
    it("should return error message", async () => {
      const message = "Network Error";
      axios.post.mockRejectedValueOnce(new Error(message));

      const result = await postUser();

      expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual("error");
    });
  });
});
