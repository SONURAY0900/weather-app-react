import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';     // Hot
import AcUnitIcon from '@mui/icons-material/AcUnit';       // Cold
import UmbrellaIcon from '@mui/icons-material/Umbrella';   // Rain
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const Hot_Url = "https://img.freepik.com/free-vector/flat-summer-heat-illustration-with-man-sweating-sun_23-2149433187.jpg?semt=ais_hybrid&w=740&q=80";
    const Cold_Url = "https://media.istockphoto.com/id/1349176709/vector/hello-winter-greeting-card-with-snowman-and-snowflakes-snowman-in-in-a-hat-scarf-and-mittens.jpg?s=612x612&w=0&k=20&c=AmT_kXJN5ZVfGRuyt_6rGUDv9Pj7zd39xk2I6XCpOF0=";
    const Rain_Url = "https://www.eurokidsindia.com/blog/wp-content/uploads/2023/08/rainy-season-precautions.jpg";

    // Select background image
    const getWeatherImage = () => {
        if (info.humidity > 80) return Rain_Url;
        if (info.temp > 15) return Hot_Url;
        return Cold_Url;
    };

    // Select icon
    const getWeatherIcon = () => {
        if (info.humidity > 80) return <UmbrellaIcon sx={{ fontSize: 40, color: "blue" }} />;
        if (info.temp > 15) return <WbSunnyIcon sx={{ fontSize: 40, color: "orange" }} />;
        return <AcUnitIcon sx={{ fontSize: 40, color: "skyblue" }} />;
    };

    // Dynamic background color
    const getCardColor = () => {
        if (info.humidity > 80) return "#d0e7ff";   // light blue for rain
        if (info.temp > 15) return "#ffe0b2";       // warm orange shade for hot
        return "#e0f7fa";                           // cool cyan for cold
    };

    return (
        <div className="InfoBox">
            <div className='CardContainer'>
                <Card sx={{ 
                    maxWidth: 345, 
                    borderRadius: 3, 
                    boxShadow: 4,
                    backgroundColor: getCardColor()   // Dynamic color here
                }}>
                    <CardMedia
                        sx={{ height: 140, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                        image={getWeatherImage()}
                        title="Weather"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            {info.city} {getWeatherIcon()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>🌡 Temperature: {info.temp}&deg;C</p>
                            <p>💧 Humidity: {info.humidity}%</p>
                            <p>🔻 Min Temp: {info.tempMin}&deg;C</p>
                            <p>🔺 Max Temp: {info.tempMax}&deg;C</p>
                            <p>🤔 Feels Like: {info.feelsLike}&deg;C</p>
                            <p>🌍 Condition: {info.weather}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
