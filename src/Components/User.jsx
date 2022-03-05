import React from 'react'

const User = ({firstname, lastname, createdat, status}) => {

    const [active, setActive] = React.useState(status)

  return (
    <>
        <tr>
            <td className={active ? "": "text-locked"}>{firstname}</td>
            <td className={active ? "": "text-locked"}>{lastname}</td>
            <td className={active ? "": "text-locked"}>{createdat}</td>
            <td>       
                <button className={active ? "on": "off"} >{active ? "ACTIVE": "LOCKED"}</button>
            </td>
        </tr>
    </>
  )
}

export default User;