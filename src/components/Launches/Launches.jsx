import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import LaunchesCard from "../Lauchescard/LaunchesCard";
import "./Launches.css";

function Launches() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchlaunches = async () => {
      const res = await axios
        .get("https://api.spacexdata.com/v3/launches/")
        .then((response) => {
          console.log("data", response.data);
          setData(response.data);
          // console.log("hey",data);
        });
    };
    fetchlaunches();
  }, []);
  return (
    <div className="main">
      <div className="headerwrapper">
        <h1 className="heading">Spacex Launches</h1>
      </div>
      <div className="laucheswrapper">
        {data.map((obj, index) => (
          <div key={index}>
            <LaunchesCard {...obj} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Launches;
