import React, { Component } from 'react'
import styles from './weather.module.css'

class Weather extends Component {
    render() {
        const {name, temp, icon, weatherDesc,humidity, wind_speed} = this.props.currentWeather;
        const celsius = (temp-273.15).toFixed(1);
        return (
        <div className={styles.weather}>
          <div className={styles.name}>{name} </div>
            <h3 className={styles.temp}>{celsius}°C</h3>
              <div className={styles.icon}>
              <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
                alt='weather icon'/>
              </div>
              <div className={styles.weatherDesc}>
              {weatherDesc}
              </div>
              <div className={styles.wind}>
              <div>Humidity: {humidity}</div>
            <div>Wind Speed: {wind_speed} m/s</div>
          </div>
        </div>
       
    );
}
}
export default Weather;