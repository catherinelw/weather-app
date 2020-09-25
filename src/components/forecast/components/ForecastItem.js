import React, { Component} from 'react'
import styles from './forecastItem.module.css'


class ForecastItem extends Component {
    render() {
        const {forecastItem:{tempDay,iconDay,day}} = this.props;
        const tempDay_celcius=(tempDay-273.15).toFixed(1);
        return (
            <div className={styles.forecastContainer}>
            <div className={styles.forecastItem}>
            <div className={styles.day}>{day}</div>
            <div>
            <img src={`http://openweathermap.org/img/wn/${iconDay}@2x.png`}
                 alt='weather icon'/>
            </div>
            <div>{tempDay_celcius}°C</div>
            </div> 
            </div>
        )
}
}
export default ForecastItem;