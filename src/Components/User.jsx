import React from "react";
import Edituser from "./Edituser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

const User = ({ firstname, lastname, createdat, status, id }) => {

  const [active, setActive] = React.useState(status);
  const [showEdit, setShowEdit] = React.useState(false);
  const [names, setNames] = React.useState({ firstname: "", lastname: "" });
  const editStatus = require("../Utils/editstatus");
  const getOneUser = require("../Utils/getoneuserbyid");

  const onClickChangeStatus = () => {
    setActive(!active);

    const newStatus = {
      id: id,
      status: active === true ? (status = "locked") : (status = "active"),
    };

    editStatus(id, newStatus)  
  };

  const onClickModify = () => {
    getOneUser(id, setNames, setShowEdit)
  };

  return (
    <>
      <tr>
        <td className={active ? "" : "text-locked"}>{firstname}</td>
        <td className={active ? "" : "text-locked"}>{lastname}</td>
        <td className={active ? "" : "text-locked"}>{createdat}</td>
        <td className="changeoptions">
          <button
            className={active ? "on" : "off"}
            onClick={onClickChangeStatus}
          >
            {active ? "ACTIVE" : "LOCKED"}
          </button>
        </td>
        <td className="changeoptions">
          <button className="btn-edit" onClick={onClickModify}>
            <FontAwesomeIcon className="btn-next-prev" icon={faUserPen} />
          </button>
        </td>
      </tr>
      <>
        {showEdit && (
          <Edituser id={id} names={names} setShowEdit={setShowEdit} />
        )}
      </>
    </>
  );
};

export default User;
