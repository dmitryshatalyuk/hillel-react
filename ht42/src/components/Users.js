import { Link } from "react-router-dom";
import { receiveData } from "./receiveData";
import { useState, useEffect } from "react";

export function Users() {
  const [users, setData] = useState(null);

  useEffect(() => {
    receiveData((receivedData) => {
      setData(receivedData);
    });
  }, []);

  if (users) {
    return (
      <div>
        <h1>Users</h1>
        <ul className="usersList">
          {users.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`/users/${item.id}`}>
                  <h3>{item.name}</h3>
                  <p>U: {item.username}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <h1>{`Loading users...`}</h1>;
  }
}
