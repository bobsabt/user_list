import React from 'react'

const User = ({firstname, lastname, createdat, active}) => {
  return (
    <>
        <tr>
            <td className={active ? "": "text-locked"}>{firstname}</td>
            <td className={active ? "": "text-locked"}>{lastname}</td>
            <td className={active ? "": "text-locked"}>{createdat}</td>
        </tr>
    </>
  )
}

export default User;