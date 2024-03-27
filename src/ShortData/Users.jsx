import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    fetchData();
   
  }, []);

  const fetchData = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  };

  const handleAcceding = () => {
    let data = [...users];
    if (data.length > 0) {
      let result = data.sort((a, b) => a.username.localeCompare(b.username));
      setUsers(result);
    }
  };

  const handleDescending = () => {
    let data = [...users];
    if (data.length > 0) {
      let result = data.sort((a, b) => b.username.localeCompare(a.username));
      setUsers(result);
    }
  };

  return (
    <div>
      {users && users.length > 0 && users != undefined
        ? users.map((user, index) => (
            <div key={index}>
              <p>{user.age}</p>
            </div>
          ))
        : "no data"}
      <div>
        <button onClick={handleAcceding} className="btn">
          acceding
        </button>
        <button onClick={handleDescending} className="btn">
          descending
        </button>
        <button onClick={fetchData} className="btn">
          normal
        </button>
      </div>
    </div>
  );
};

export default Users;
