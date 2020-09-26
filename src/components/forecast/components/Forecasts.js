import React from 'react'
import ForecastItem from './ForecastItem'
import styles from './forecasts.module.css'

const Forecasts = (props) => {
    const {forecasts} = props;
        return (
          <div className={styles.forecasts}>
            <div className={styles.forecastItem}>
            {forecasts.map((forecastItem) => (
                <ForecastItem 
                  forecastItem={forecastItem}
                />))}
             </div>
            </div>
        );
}


export default Forecasts
