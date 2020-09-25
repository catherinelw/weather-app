import React, { Component } from 'react'
import styles from './search.module.css'

export class Search extends Component {
    state = {
        text: '',
        country:''
    };
    onChange = (event) => this.setState({ text: event.target.value })
    onChangeCountry = (event) => this.setState({ country: event.target.value })
    onSubmit = (event) => {
        event.preventDefault();
        this.props.searchWeather(this.state.text, this.state.country)
        this.setState({text:'', country:''})
    };
    render() {
    
        return (
            <div className={styles.form}>
              <form onSubmit={this.onSubmit} >
                  <input type="text" 
                         className={styles.cityName}
                         name="text" 
                         placeholder="City Name..." 
                         value={this.state.text}
                         onChange={this.onChange} />
                         <input type="text" 
                         className={styles.countryCode}
                         country="text" 
                         placeholder="Country Code..." 
                         value={this.state.country}
                         onChange={this.onChangeCountry} />
                   <input type="submit" name="Search" 
                   className={styles.submit} />
              </form>
            </div>
        )
    }
}

export default Search
