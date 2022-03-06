import React from "react";

const useGetAllData = () => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://assessment-users-backend.herokuapp.com/users")
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
