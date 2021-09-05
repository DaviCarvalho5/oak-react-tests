import React from 'react';

import '../../styles/tests/UsersRender.css';
import users from '../../data/users';

export default function ListRender(props) {
  const returnType = props.type || 'table';
  let returnData = '';

  function getUsersTable() {
    return users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      );
    });
  }

  function getUsersList() {
    return users.map((user) => {
      return (
        <li key={user.id}>
          {user.id}: {user.name}, {user.email}
        </li>
      );
    });
  }

  if (returnType === 'table') {
    returnData = (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{getUsersTable()}</tbody>
      </table>
    );
  }

  if (returnType === 'list') {
    returnData = <ul className="left">{getUsersList()}</ul>;
  }

  return returnData;
}
