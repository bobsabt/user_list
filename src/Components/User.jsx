import React from 'react'
import useChangeStatus from '../Utils/useChangeStatus';
import Edituser from './Edituser'

const User = ({firstname, lastname, createdat, status, id}) => {

    const [active, setActive] = React.useState(status)
    const [showEdit, setShowEdit] = React.useState(false)
    const [names, setNames] = React.useState({firstname:"", lastname:""})
    
    
    const onClickChangeStatus = () => {
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

    const onClickModify = async() => {
        fetch(`https://assessment-users-backend.herokuapp.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setNames({firstname:data.first_name, lastname:data.last_name})
          setShowEdit(true)
        });
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
            <td ><button onClick={onClickModify}>EDIT</button></td>
        </tr>
        <>
        {showEdit && <Edituser id={id} names={names} setShowEdit={setShowEdit}/>}
        </>
    </>
  )
}

export default User;