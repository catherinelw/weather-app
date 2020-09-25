import React, { Component} from 'react'
import styles from './forecastItem.module.css'
import Day from './Day'

class ForecastItem extends Component {
    render() {

    const { 
            tempDay1,
            tempDay2, 
            tempDay3, 
            iconDay1, 
            iconDay2, 
            iconDay3,
    //  date
    } = this.props;
    const tempDay1_celcius=(tempDay1-273.15).toFixed(1);
    const tempDay2_celcius=(tempDay2-273.15).toFixed(1);
    const tempDay3_celcius=(tempDay3-273.15).toFixed(1);

//   const Day1 =date.getDay();
//   const weekday = new Array(7);
//   weekday[0] = "Sunday";
//   weekday[1] = "Monday";
//   weekday[2] = "Tuesday";
//   weekday[3] = "Wednesday";
//   weekday[4] = "Thursday";
//   weekday[5] = "Friday";
//   weekday[6] = "Saturday";
//   const forecastDay1=weekday[Day]

    return (
        <div className={styles.list}>
            <div className={styles.forecastItem}>
            <Day 
            // new={forecastDay1}
             />
            <div>
            <img src={`http://openweathermap.org/img/wn/${iconDay1}@2x.png`}
                 alt='weather icon'/>
            </div>
            <div>{tempDay1_celcius}°C</div>
            </div> 
            <div className={styles.forecastItem}> 
            <Day 
            // new={forecastDay2}
             />
            <div>
            <img src={`http://openweathermap.org/img/wn/${iconDay2}@2x.png`} 
                 alt='weather icon'/>
            </div>
            <div>{tempDay2_celcius}°C</div>
            </div> 
            <div className={styles.forecastItem}>
            <Day 
            // new={forecastDay3} 
            />
            <div>
            <img src={`http://openweathermap.org/img/wn/${iconDay3}@2x.png`} 
            alt='weather icon'/>
            </div>
            <div>{tempDay3_celcius}°C</div>
            </div> 
        </div>
    )
}
}
export default ForecastItem;