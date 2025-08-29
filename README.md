# 🌤️ Weather App by Delta

A modern, responsive **Weather Application** built with **React** and **Material-UI**, providing real-time weather information for any city worldwide.  

![React](https://img.shields.io/badge/React-18.2.0-blue)  
![Material-UI](https://img.shields.io/badge/Material--UI-5.14.0-007FFF)  
![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-orange)

---

## ✨ Features
- 🌡 **Real-time Weather Data** – Get current weather conditions for any city  
- ⛅ **Visual Weather Indicators** – Custom icons & background images based on weather  
- 📱 **Responsive Design** – Works seamlessly on desktop & mobile devices  
- 🎨 **Beautiful UI** – Material-UI components with custom styling  
- 📊 **Comprehensive Data** – Temperature, humidity, min/max temps, "feels like"  

---

## 🛠️ Technologies Used
- ⚛️ **Frontend Framework:** React 18  
- 🎨 **UI Library:** Material-UI (MUI) v5  
- 🌍 **API:** OpenWeatherMap API  
- 💅 **Styling:** CSS + MUI’s `sx` prop  

---

## 📦 Installation

### 1️⃣ Clone the repository
bash
git clone <your-repo-url>
cd weather-app
---
### 2️⃣ Install dependencies
bash
npm install
---
###3️⃣ Get your API key from OpenWeatherMap
###4️⃣ Replace the API key in SearchBox.js
---
javascript
const API_KEY = "your-api-key-here";
---
###5️⃣ Start the development server
bash
npm start
---
## 🚀 Usage
Enter a city name in the search field
Click the Search button or press Enter
View real-time weather info including:
🌡 Temperature & Feels Like
💧 Humidity %
🔻 Min & 🔺 Max Temperature
🌍 Weather Condition
🎭 Dynamic Visual Indicators
---
## 🎨 Component Structure
bash
src/
├── WeatherApp.js       # Main application component
├── SearchBox.js        # City search input component
├── InfoBox.js          # Weather information display component
└── InfoBox.css         # Styling for InfoBox

---
## 🔧 API Integration
This app uses OpenWeatherMap API to fetch weather data.
Endpoint:
bash:-https://api.openweathermap.org/data/2.5/weather
Parameters: City name, API key, units (metric)
Response: JSON (temp, humidity, condition, etc.)
---
## 🌈 Weather Visuals
Dynamic visuals based on conditions:
☀️ Hot Weather (>15°C): Sun icon + orange theme
❄️ Cold Weather (≤15°C): Snowflake icon + blue theme
☔ Rainy Weather (Humidity >80%): Umbrella icon + light blue theme
---
## 📱 Responsive Design
The app adapts to different screen sizes using:
CSS Flexbox for layout
MUI Responsive Components
Mobile-friendly touch targets
---
## 🤝 Contributing
1.Fork the project
2.Create a new branch
    bash:-git checkout -b feature/AmazingFeature
3.Commit changes
   bash:-git commit -m 'Add some AmazingFeature'
4.Push to your branch
   bash:-git push origin feature/AmazingFeature
5.Open a Pull Request
---
## 📄 License
This project is licensed under the MIT License – see the LICENSE file for details.
---
🙏 Acknowledgments
🌍 Weather data: OpenWeatherMap
🎨 UI Components & Icons: Material-UI
---
##📞 Support
If you have any questions or issues, please open an issue on the GitHub repository.
---
Do you want me to also **add cool GitHub badges** (like Stars ⭐, Forks 🍴, Issues 🚩, License 📜
