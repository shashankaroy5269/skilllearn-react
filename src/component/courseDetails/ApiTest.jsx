import React, { useEffect, useState } from "react";

const ApiTest = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://sdlc3.onrender.com/api/courses")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  return (
    <div>
      <h2>API Response</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ApiTest;
