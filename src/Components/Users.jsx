import React from 'react'
import User from './User';
import Pagination from './Pagination';
import useGetAllData from '../Utils/useGetAllData';


const Users = () => {
    const results= useGetAllData();
    const { data = [] } = results;

    const [stationsPerPage, setStationsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isShowNew, setIsShowNew] = React.useState(false);

  const indexOfLastPost = currentPage*stationsPerPage;
  const indexOfFirstPots = indexOfLastPost- stationsPerPage;
  const currentStations = data.slice(indexOfFirstPots,indexOfLastPost);  

  return (
    <div className='table-container'>
        <h1>User list</h1>
        <table>
            <thead>
                <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Created</th>
                    <th>Active</th>
                    <th>Update</th>
                </tr>  
            </thead>
            <tbody>
            {currentStations.map((user,index) => <User
                key={index}
                firstname={user.first_name}
                lastname={user.last_name}
                createdat={user.created_at}
                status={user.status === "active" ? true : false}
                id={user.id}
               />
            )}
            </tbody>
        </table>
        <Pagination
        currentPage ={currentPage}
        setCurrentPage = {setCurrentPage}
        stationsPerPage ={stationsPerPage}
        total={data.length}
        />
    </div>
  )
}

export default Users