import React from "react";

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
    }).then((data) => console.log(data));

    setIsShowNew(false);
  };

  const onClickCloseForm = ()=>{
    setIsShowNew(false);
  }
  return (
    <div className="form-container">
      <div className="form-box">
          <h1>Update user data</h1>
        <div>
          <p>First name:</p>
          <input
            type="text"
            placeholder="Please write a first name here..."
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <p>Last name:</p>
          <input
            type="text"
            placeholder="Please write a last name here..."
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
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
        <div className="btn-container">
        <button onClick={postNewUser}>Send</button>
        <button onClick={onClickCloseForm}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Newuser;
