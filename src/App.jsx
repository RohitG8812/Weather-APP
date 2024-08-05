import React, { useState } from "react";
import "../src/index.css";
import { Box, TextField } from "@mui/material";
import SearchSection from "../Components/SearchSection";
import DataRender from "../Components/DataRender";

function App() {
  const [getInfo, setGetInfo] = useState({
    city: "Delhi",
    temp: 24.84,
    tempMin: 24.84,
    tempMax: 24.84,
    humidity: 84,
    feelsLike: 47,
    weather: "haze",
  });

  function updateInfo(result) {
    setGetInfo(result);
  }

  const [loading, setLoading] = useState(false);

  return (
    <>
      <SearchSection updateData={updateInfo} setLoading={setLoading}/>
      <DataRender info={getInfo} loading={loading}/>
    </>
  );
}

export default App;
