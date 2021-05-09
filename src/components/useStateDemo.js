import React, { useState } from "react";

function UseStateDemo() {
  const [name, setName] = useState("Raju");
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    setName(e.target.value);
    users.push(name)
  };
  const pushUsers = () => {
    const addUsers = [name];
    setUsers(addUsers);
  };

  console.log(name, users);

  return (
    <div>
      <h4>UseStateDemo</h4>
      <div>
        <input type="text" value={name} onChange={(e) => handleChange(e)} />
        <button type="submit" onClick={pushUsers}>
          Add Name to list
        </button>
      </div>
      <div>
        <table>
          <thead>
            <th>UserNames</th>
          </thead>
          <tbody>
            <tr>
              {users &&
                users.map((item) => {
                  return <td>{item}</td>;
                })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UseStateDemo;
