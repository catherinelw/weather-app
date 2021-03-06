import React, { Component} from 'react';
import axios from 'axios'
import './App.css';
import Search from './components/search/components/Search'
import Weather from './components/weather/components/Weather'
import Forecasts from './components/forecast/components/Forecasts'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    currentWeather:{
    },
    forecasts:[]
}
  }
date = new Date();
day =this.date.getDay();
weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  searchWeather = async (cityName, countryCode) => {
    const forecastNum=3;
    const frequency=8;
    const result=[];
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${key}`);
    const resForecast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${countryCode}&appid=${key}`);
    for(let i=1;i<=forecastNum;i++){
      result.push(
      {
        tempDay:resForecast.data.list[(i-1)*frequency].main.temp,
        iconDay:resForecast.data.list[(i-1)*frequency].weather[0].icon,
        day:this.weekday[(this.day+i)%7]
        })
   }
    this.setState({
       currentWeather:{
                  name: res.data.name,
                  temp: res.data.main.temp,
                  humidity:res.data.main.humidity,
                  wind_speed: res.data.wind.speed,
                  icon: res.data.weather[0].icon,
                  weatherDesc:res.data.weather[0].description
              },
              forecasts: result
        })
    }

    async componentDidMount() {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au
                      &appid=${key}`);
    const resForecast = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=Melbourne,au
                      &appid=${key}`);
    const forecastNum=3;
    const frequency=8;
    const result=[];
    for(let i=1;i<=forecastNum;i++){
        result.push(
              {
              tempDay:resForecast.data.list[(i-1)*frequency].main.temp,
              iconDay:resForecast.data.list[(i-1)*frequency].weather[0].icon,
              day:this.weekday[(this.day+i)%7]
              })
              }
    this.setState({
       currentWeather:{
                   name: res.data.name,
                   temp: res.data.main.temp,
                   icon: res.data.weather[0].icon,
                   humidity:res.data.main.humidity,
                   wind_speed: res.data.wind.speed,
                   weatherDesc: res.data.weather[0].description,
                  }, 
                  forecasts: result
                  })
        }
  render(){
    const {currentWeather,forecasts} = this.state;
    return (
    <div className="App">
    <div className="container">
    <Search searchWeather={this.searchWeather} className= "search"  />
    <div className="current">
    <Weather
    className="weather" 
    currentWeather={currentWeather}
    />
    </div>
    <div className="forecast">
    <Forecasts className="lists" 
    forecasts={forecasts}
     /> 
    </div>
    </div>
    </div>
  );
}
}

export default App;























































































const key='3cb4393536be761750e24e18cb2fb42d';
