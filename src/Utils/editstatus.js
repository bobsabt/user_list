function editstatus(id, statusobject) {
  fetch(`https://assessment-users-backend.herokuapp.com/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS,PATCH",
      "Access-Control-Allow-Headers":
        "Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin",
    },
    body: JSON.stringify(statusobject),
  }).then((data) => {});
}
module.exports = editstatus;
