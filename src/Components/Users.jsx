import React from "react";
import User from "./User";
import Pagination from "./Pagination";
import Newuser from "./Newuser";
import useGetAllData from "../Utils/useGetAllData";
import "../loadingmask.css";

const Users = () => {
  const { isLoading, data = [] } = useGetAllData();

  const stationsPerPage = 10;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isShowNew, setIsShowNew] = React.useState(false);

  const indexOfLastPost = currentPage * stationsPerPage;
  const indexOfFirstPots = indexOfLastPost - stationsPerPage;
  const currentStations = data.slice(indexOfFirstPots, indexOfLastPost);

  const onClickShowNew = () => {
    setIsShowNew(true);
  };

  return (
    <div className="table-container placement">
      {isLoading ? (
        <div className="lmask"></div>
      ) : (
        <>
          <h1>User list</h1>
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Created</th>
                <th>Status</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {currentStations.map((user, index) => (
                <User
                  key={index}
                  firstname={
                    user.first_name.length > 8
                      ? user.first_name.substring(0, 8) + "..."
                      : user.first_name
                  }
                  lastname={
                    user.last_name.length > 10
                      ? user.last_name.substring(0, 8) + "..."
                      : user.last_name
                  }
                  createdat={
                    user.created_at.substring(0, 10) +
                    ", " +
                    user.created_at.substring(11, 16)
                  }
                  status={user.status === "active" ? true : false}
                  id={user.id}
                />
              ))}
            </tbody>
          </table>
          <div className="footer-container">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              stationsPerPage={stationsPerPage}
              total={data.length}
            />
            <button className="btn-newuser" onClick={onClickShowNew}>
              New user
            </button>
          </div>
        </>
      )}
      {isShowNew && <Newuser setIsShowNew={setIsShowNew} />}
    </div>
  );
};

export default Users;
