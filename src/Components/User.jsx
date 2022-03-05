import React from 'react'
import useChangeStatus from '../Utils/useChangeStatus';

const User = ({firstname, lastname, createdat, status, id}) => {

    const [active, setActive] = React.useState(status)
    
    
    const onClickChangeStatus = async() => {
        setActive(!active)
        const sendStatus = {
            "id": id,
            "status": active===true ? status="locked" : status="active"
        }
        console.log(sendStatus)

        fetch(`https://assessment-users-backend.herokuapp.com/users/${id}`, {  
        method: "PUT",  
        headers: {    
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS,PATCH",
            "Access-Control-Allow-Headers": "Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin",
      },  
        body: JSON.stringify(sendStatus)}) 
        .then(data => console.log(data));
    }
    

  return (
    <>
        <tr>
            <td className={active ? "": "text-locked"}>{firstname}</td>
            <td className={active ? "": "text-locked"}>{lastname}</td>
            <td className={active ? "": "text-locked"}>{createdat}</td>
            <td>       
                <button className={active ? "on": "off"} onClick={onClickChangeStatus}>{active ? "ACTIVE": "LOCKED"}</button>
            </td>
        </tr>
    </>
  )
}

export default User;