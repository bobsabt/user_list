import React from "react";
import Inputbaseform from "./Inputbaseform";

const Edituser = ({ names, setShowEdit, id }) => {
  const [modifiedfirstname, setModifedFirstname] = React.useState(names.firstname);
  const [modifiedlastname, setModifiedLastname] = React.useState(names.lastname);

  const onClickEdit = () => {

    const modifiednames = {
      first_name: modifiedfirstname,
      last_name: modifiedlastname,
    };

    fetch(`https://assessment-users-backend.herokuapp.com/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS,PATCH",
        "Access-Control-Allow-Headers":
          "Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin",
      },
      body: JSON.stringify(modifiednames),
    }).then((data) => console.log(data))
    .catch((error)=>{
        console.log(error)});
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
        <div className="btn-container placement">
          <button onClick={onClickEdit}>Modify</button>
          <button onClick={close}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Edituser;
