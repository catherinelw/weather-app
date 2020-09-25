import React from 'react'
import ForecastItem from './ForecastItem'
import styles from './forecasts.module.css'

const Forecasts = (props) => {
    const {forecasts} = props;
        return (
          <div className={styles.list}>
            <div className={styles.listItem}>
            {forecasts.map((forecastItem) => (
                <ForecastItem 
                  forecastItem={forecastItem}
                />))}
             </div>
            </div>
        );
}


export default Forecasts
