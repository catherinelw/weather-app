import React, { Component} from 'react';
import axios from 'axios'
import './App.css';
import Search from './components/search/components/Search'
import Weather from './components/weather/components/Weather'
import Forecasts from './components/forecast/components/Forecasts'

class App extends Component {
  state = {
    name: '',
    temp:[],
    temp_min: [],
    temp_max:[],
    humidity:'',
    wind_speed:'',
    wind_deg:'',
    icon:'',
    weatherDesc:'',
    tempDay1:'',
    iconDay1:'',
    tempDay2:'',
    iconDay2:'',
    tempDay3:'',
    iconDay3:'',
    date:''
}

  searchWeather = async (cityName, countryCode) => {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${process.env.REACT_APP_WEATHER_ID}`);
    const resForecast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&appid=${process.env.REACT_APP_WEATHER_ID}`);
    this.setState({
                  name: res.data.name,
                  temp: res.data.main.temp,
                  temp_min:res.data.main.temp_min,
                  temp_max:res.data.main.temp_max,
                  humidity:res.data.main.humidity,
                  wind_speed: res.data.wind.speed,
                  wind_deg: res.data.wind.deg,
                  icon: res.data.weather[0].icon,
                  weatherDesc:res.data.weather[0].description,
                  tempDay1:resForecast.data.list[0].main.temp,
                  iconDay1:resForecast.data.list[0].weather[0].icon,
                  tempDay2:resForecast.data.list[8].main.temp,
                  iconDay2:resForecast.data.list[8].weather[0].icon,
                  tempDay3:resForecast.data.list[16].main.temp,
                  iconDay3:resForecast.data.list[16].weather[0].icon,
                  date:resForecast.data.list[0].dt,
             })
    }

    async componentDidMount() {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au
                      &appid=${process.env.REACT_APP_WEATHER_ID}`);
    const resForecast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Melbourne,au
                      &appid=${process.env.REACT_APP_WEATHER_ID}`);
    this.setState({
                   name: res.data.name,
                   temp: res.data.main.temp,
                   icon: res.data.weather[0].icon,
                   humidity:res.data.main.humidity,
                   wind_speed: res.data.wind.speed,
                   wind_deg: res.data.wind.deg,
                   weatherDesc: res.data.weather[0].description,
                   tempDay1:resForecast.data.list[0].main.temp,
                   iconDay1:resForecast.data.list[0].weather[0].icon,
                   tempDay2:resForecast.data.list[8].main.temp,
                   iconDay2:resForecast.data.list[8].weather[0].icon,
                   tempDay3:resForecast.data.list[16].main.temp,
                   iconDay3:resForecast.data.list[16].weather[0].icon,
                })

    }
  render(){
    const {
           name,
           temp, 
           temp_min,
           temp_max, 
           humidity, 
           wind_speed, 
           wind_deg,  
           tempDay1,
           tempDay2, 
           tempDay3,
           icon,
           iconDay1,
           iconDay2, 
           iconDay3, 
           weatherDesc,
           date} = this.state;

  return (

    <div className="App">
    <div className="container">
    <Search searchWeather={this.searchWeather} className= "search"  />
    <div className="current">
    <Weather
    className="weather" 
    name={name} 
    temp={temp}
    temp_min={temp_min} 
    temp_max={temp_max} 
    humidty={humidity}
    icon={icon}
    wind_speed={wind_speed}
    wind_deg={wind_deg}
    weatherDesc={weatherDesc}
    />
    </div>
    <div className="forecast">
    <Forecasts className="lists" 
      tempDay1={tempDay1}
      tempDay2={tempDay2}
      tempDay3={tempDay3}
      iconDay1={iconDay1}
      iconDay2={iconDay2}
      iconDay3={iconDay3}
      date={date}
     /> 
    </div>
    </div>
    </div>
  
  );
}
}

export default App;

