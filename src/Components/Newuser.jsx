import React from "react";
import Inputbaseform from "./Inputbaseform";

const Newuser = ({ setIsShowNew }) => {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [status, setStatus] = React.useState("active");
  const [isErrorMessage, setisErrorMessage] = React.useState(false);
  const postNewUser = require("../Utils/postnewuser");

  const onClickNewUser = () => {

    if(firstname.length === 0 || lastname.length === 0){
      setisErrorMessage(true);
      return;
    }
    
    const newUser = {
      first_name: firstname,
      last_name: lastname,
      status: status,
    };

    postNewUser(newUser, setIsShowNew)
  };

  const onClickCloseForm = () => {
    setIsShowNew(false);
  };

  const onChangeErrorMessage = () => {
    setisErrorMessage(false);
  };

  return (
    <div className="form-container placement">
      <div className="form-box placement">
        <Inputbaseform
          title={"Create new user"} 
          firstvalue={firstname} 
          setFirstValue={setFirstname}
          lastvalue={lastname}
          setLastValue={setLastname}
          onChangeErrorMessage={onChangeErrorMessage}
        />
        <div className="status-box">
          <p>Status:</p>
          <select
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option>active</option>
            <option>locked</option>
          </select>
        </div>
        {isErrorMessage && <p>Empty firstname/lastname are not allowed</p>}
        <div className="btn-container placement">
          <button onClick={onClickNewUser}>Create</button>
          <button onClick={onClickCloseForm}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Newuser;
