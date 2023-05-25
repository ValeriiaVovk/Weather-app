import Header from "./header";
import WeatherDay from "./weather-day";
import WeatherForDays from "./weather-days";
import WeatherDetails from "./weather-details";


function CurrentWeather() {
  

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div>
          <WeatherDay
          />
        </div>
        <div>
          <WeatherDetails />
        </div>
      </div>
      <WeatherForDays  />
    </div>
  );
}

export default CurrentWeather;
