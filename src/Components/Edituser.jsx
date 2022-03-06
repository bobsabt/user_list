import React from "react";
import Inputbaseform from "./Inputbaseform";

const Edituser = ({ names, setShowEdit, id }) => {
  const [modifiedfirstname, setModifedFirstname] = React.useState(names.firstname);
  const [modifiedlastname, setModifiedLastname] = React.useState(names.lastname);
  const [isErrorMessage, setisErrorMessage] = React.useState(false);
  const editUser = require("../Utils/edituser");

  const onClickEdit = () => {
    setisErrorMessage(false)
    
    if(modifiedfirstname.length === 0 || modifiedlastname.length === 0){
        setisErrorMessage(true);
        return;
    }

    const modifiedname = {
      first_name: modifiedfirstname,
      last_name: modifiedlastname,
    };

    editUser(id, modifiedname, setShowEdit)  
  };

  const close = () => {
    setShowEdit(false);
  };

  return (
    <div className="form-container placement">
      <div className="form-box placement">
      <Inputbaseform
          title={"Create new user"} 
          firstvalue={modifiedfirstname} 
          setFirstValue={setModifedFirstname}
          lastvalue={modifiedlastname}
          setLastValue={setModifiedLastname}
        />
        {isErrorMessage && <p>Empty firstname/lastname not allowed</p>}
        <div className="btn-container placement">
          <button onClick={onClickEdit}>Modify</button>
          <button onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Edituser;
