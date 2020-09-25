import React from 'react'
import ForecastItem from './ForecastItem'
import styles from './forecasts.module.css'

const Forecasts = (props) => {
    const {
        tempDay1,
        tempDay2,
        tempDay3,
        iconDay1,
        iconDay2,
        iconDay3,
        date
    } 
    = props;

     return (
            <div className={styles.lists}>
                  <ForecastItem 
                    tempDay1={tempDay1} 
                    tempDay2={tempDay2}
                    tempDay3={tempDay3}
                    iconDay1={iconDay1}
                    iconDay2={iconDay2}
                    iconDay3={iconDay3}
                    date= {date}
                    />
            </div>
        );
}


export default Forecasts
