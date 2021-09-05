import React, { useState } from 'react';

export default function ControlledComponent(props) {
  const [userName, setUserName] = useState('');

  return (
    <React.Fragment>
      <h3>{userName}</h3>
      <input type={userName} onChange={(e) => setUserName(e.target.value)} />
    </React.Fragment>
  );
}
