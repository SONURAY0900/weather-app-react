import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { Container, Typography } from "@mui/material";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "WonderLand",
    feelsLike: 24.84,
    temp: 25.85,
    tempMin: 25.02,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h3" gutterBottom fontWeight="bold" color="primary">
        🌤 Weather App
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 3, color: "gray" }}>
        Get real-time weather updates of your city
      </Typography>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </Container>
  );
}
