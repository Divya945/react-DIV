import React, { useEffect, useState } from 'react';

export default function Apidata() {
  const [users, setUser] = useState([]);
  const fetchlist = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((responce) => responce.json())
      .then((data) => setUser(data));
  };
  useEffect(() => {
    fetchlist();
  }, []);
  return (
    <>
      <div className="taskblock">
        <p>Fetching User List</p>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th colspan="3">
                address
                <th>city</th>
                <th>Street</th>
                <th>VLag</th>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.address.city}</td>
                <td>{user.address.street}</td>
                <td>{user.address.geo.lat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
