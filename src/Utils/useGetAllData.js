import React from "react";

const useGetAllData = () => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const BASE_URL = "https://assessment-users-backend.herokuapp.com";

  React.useEffect(() => {
    fetch(`${BASE_URL}/users`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        document.title = "UserList";
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { data, isLoading };
};

export default useGetAllData;
