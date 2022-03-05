import React from "react";

const useGetAllData = () => {
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch("https://assessment-users-backend.herokuapp.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return {data};
};

export default useGetAllData;
