import React from "react";
import Inputbaseform from "./Inputbaseform";

const Newuser = ({ setIsShowNew }) => {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [status, setStatus] = React.useState("active");

  const postNewUser = async () => {
    const newUser = {
      first_name: firstname,
      last_name: lastname,
      status: status,
    };

    fetch(`https://assessment-users-backend.herokuapp.com/users/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS,PATCH",
        "Access-Control-Allow-Headers":
          "Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin",
      },
      body: JSON.stringify(newUser),
    }).then((data) => console.log(data))
    setIsShowNew(false)
    .catch((error)=>{
      console.log(error)});
  };

  const onClickCloseForm = () => {
    setIsShowNew(false);
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
        <div className="btn-container placement">
          <button onClick={postNewUser}>Create</button>
          <button onClick={onClickCloseForm}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Newuser;
