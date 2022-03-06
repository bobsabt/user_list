function postnewuser(newObject, setIsShowNew){
    fetch(`https://assessment-users-backend.herokuapp.com/users/`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS,PATCH",
      "Access-Control-Allow-Headers":
        "Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin",
    },
    body: JSON.stringify(newObject),
  }).then((data) => {setIsShowNew(false); window.location.reload()})
  .catch((error)=>{
    console.log(error)})
  };

  module.exports=postnewuser;