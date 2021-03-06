function getuserbyid(id, setNames, setShowEdit) {
  fetch(`https://assessment-users-backend.herokuapp.com/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      setNames({ firstname: data.first_name, lastname: data.last_name });
      setShowEdit(true);
    })
    .catch((error) => {
      console.log(error);
    });
}
module.exports = getuserbyid;
