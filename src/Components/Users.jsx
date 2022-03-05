import React from 'react'
import User from './User';
import useGetAllData from '../Utils/useGetAllData';


const Users = () => {
    const results= useGetAllData();
    const { data = [] } = results;

  return (
    <div>
        <h1>UUSEr</h1>
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
            {data.map((user,index) => <User
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
    </div>
  )
}

export default Users