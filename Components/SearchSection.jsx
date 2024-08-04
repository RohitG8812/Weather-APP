import React, { useState, useEffect } from "react";
import "../src/index.css";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import SearchIcon from "@mui/icons-material/Search";

function SearchSection({ updateData, setLoading }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  let URL = "http://api.openweathermap.org/data/2.5/weather";
  let API_Key = "9a04137c5c3e12d87667d884d3927cb4";
  async function getApiInfo() {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      let response = await fetch(
        `${URL}?q=${city}&appid=${API_Key}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }

  function handleChange(e) {
    setCity(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    try {
      console.log(city);
      setCity("");
      let info = await getApiInfo();
      updateData(info);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }
  return (
    <Box>
      <div className="container">
        <h1>Weather Report</h1>
        <div className="form-container">
          <form action="#" onSubmit={handleSubmit}>
            <div className="search-section">
              <TextField
                id="outlined-basic"
                label="🔍 Enter City Name"
                variant="outlined"
                size="small"
                required
                value={city}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                type="submit"
                size="big"
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="errorContainer">
        {error ? (
          <Alert severity="error" className="success">
            ERROR MSG : No such City exist in your API.
          </Alert>
        ) : (
          <Alert icon={false} severity="success" className="success">
            Search for your City , State and Country 🌦️ ❄️ ⛅{" "}
          </Alert>
        )}
      </div>
    </Box>
  );
}

export default SearchSection;
