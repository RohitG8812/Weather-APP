import { Box } from "@mui/material";
import "../src/index.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";

function DataRender({ info, loading }) {
  let summer =
    "https://www.almanac.com/sites/default/files/styles/large/public/image_nodes/summer-sunset.jpg?itok=CMJ8-qwL";
  let rainy =
    "https://media.rnztools.nz/rnz/image/upload/s--inmGTr2h--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1683070845/4MQVIYW_rain_weather_umbrella_jpg?_a=BACCd2AD";
  let winter =
    "https://cdn.pixabay.com/photo/2021/01/13/13/46/house-5914171_960_720.jpg";
  return (
    <Box>
      <div className="innerContainer">
        <Card sx={{ maxWidth: 355 }} className="cardContainer">
          {loading ? (
            <div className="loader-main">
              <div class="loader-container">
                <div class="cloud front">
                  <span class="left-front"></span>
                  <span class="right-front"></span>
                </div>
                <span class="sun sunshine"></span>
                <span class="sun"></span>
                <div class="cloud back">
                  <span class="left-back"></span>
                  <span class="right-back"></span>
                </div>
              </div>
              <section class="dots-container">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </section>
            </div>
          ) : (
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={
                  info.humidity > 80 ? rainy : info.temp > 25 ? summer : winter
                }
                alt="green iguana"
              />
              <CardContent>
                <Typography>
                  <div className="card-city">
                    {info.city}{" "}
                    <span>
                      {info.humidity > 80 ? (
                        <ThunderstormIcon />
                      ) : info.temp > 25 ? (
                        <WbSunnyIcon />
                      ) : (
                        <AcUnitIcon />
                      )}
                    </span>
                  </div>
                </Typography>
                <Typography variant="body2">
                  <p>Temperature : {info.temp}&deg;C</p>
                  <p>Humidity : {info.humidity} </p>
                  <p>Min Temperature : {info.tempMin}&deg;C</p>
                  <p>Max Temperature : {info.tempMax}&deg;C </p>
                  <p>
                    The Weather Can be Described as{" "}
                    <span style={{ fontStyle: "italic", fontWeight: "650" }}>
                      {info.weather}{" "}
                    </span>
                    and Feels_Like{" "}
                    <span style={{ fontWeight: "650" }}>{info.feelsLike}</span>
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
          )}
        </Card>
      </div>
    </Box>
  );
}

export default DataRender;
