import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [clan, setClan] = useState({
    badge: "",
    description: "",
    name: "",
    trophies: ""
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/api/clan");
    console.log(res.data.data);

    setClan({
      badge: res.data.data.badge.image,
      description: res.data.data.description,
      name: res.data.data.name,
      trophies: res.data.data.warTrophies
    });
  };
  return (
    <div className="center landing">
      <h4>Welcome to {clan.name}</h4>
      <img src={clan.badge} alt="" />
      <h4>{clan.description}</h4>
      <h4>🏆{clan.trophies}</h4>
    </div>
  );
};

export default Home;
