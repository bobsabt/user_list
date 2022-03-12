const axios = require("axios");
const getUserBasedOnId = require("./getUserBasedOnId");

const BASE_URL = "https://assessment-users-backend.herokuapp.com";

jest.mock("axios");

describe("getUserBasedOnId", () => {
  describe("when API call is successful", () => {
    it("should return user", async () => {
      const userId = 1;
      const user = [
        {
          id: userId,
          first_name: "Bruno",
          last_name: "Big",
          status: "active",
          created_at: "2022",
          updated_at: "2022"
        },
      ];
      axios.get.mockResolvedValueOnce(user);

      const result = await getUserBasedOnId(userId);

      expect(axios.get).toHaveBeenCalledWith(
        `${BASE_URL}/users/1`,
      );
      expect(result).toEqual(user);
    });
  });

  describe("when API call fails", () => {
    it("should return error message", async () => {
      const message = "error";

      axios.get.mockRejectedValueOnce(new Error(message));

      const result = await getUserBasedOnId(1);

      expect(axios.get).toHaveBeenCalledWith(
        `${BASE_URL}/users/1`,
      );
      expect(result).toEqual(message);
    });
  });
});
