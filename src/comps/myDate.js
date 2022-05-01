import React, { useEffect, useState } from "react";

export default function MyDate() {
  const [time, setTime] = useState([]);
  useEffect(() => {
    setTime([new Date().toLocaleDateString(), new Date().toLocaleTimeString()]);
  }, []);

  setInterval(() => {
    setTime([new Date().toLocaleDateString(), new Date().toLocaleTimeString()]);
  }, 1000);

  return (
    <>
      <h1  className="myDate_title ">{time[1]}</h1>
      <h1  className="myDate_title ">{time[0]}</h1>
    
    </>
  );
}
