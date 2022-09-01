import React from 'react';
import { useEffect, useState } from 'react';
const Student = ({ college_id }) => {
  const [initState, setInitState] = useState([]);

  useEffect(() => {
    fetch('/students/' + { college_id })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((jsonRes) => setInitState(jsonRes));
  }, []);

  return (
    <h1>
      {initState.length > 0 &&
        initState.map((el) => <li key={el._id}>{el['name']}</li>)}
    </h1>
  );
};

export default Student;
