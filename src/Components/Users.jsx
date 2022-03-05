import React from 'react'
import useGetAllData from '../Utils/useGetAllData';


const Users = () => {
    const results = useGetAllData();
    console.log(results)

  return (
    <div>Users</div>
  )
}

export default Users