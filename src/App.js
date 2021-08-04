import React, { Component} from 'react';
import WeatherCard from './component/WeatherCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'


const api = {
  key:"c97fdee7e8937b2a1a2684528c28bc84",
  base: "https://api.openweathermap.org/data/2.5/"
}



class App extends Component {
 
  constructor() {
    super()
    this.state = {
      city:'',
      sunrise:'',
      sunset:'',
      minTemp:'',
      maxTemp:'',
      cityError:'',
      temp:0,
      tempInput:'',
      feelsLike:'',
      list:null
    }
  }


   fillData() {
    
      fetch(`${api.base}weather?q=${this.state.tempInput}&units=standard&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          //reseting the lsit allows the program to correct the user if state is spelled wrong
          this.setState({list:null})

          this.setState({
            city: this.state.tempInput.toLowerCase(),
            sunrise: result.sys.sunrise,
            sunset: result.sys.sunset,
            minTemp: result.main.temp_min,
            maxTemp: result.main.temp_max,
            temp: result.main.temp,
            feelsLike: result.main.feels_like,
            list:result
          })
          console.log(this.state.temp)
        })
        .catch(err => {
          this.setState({cityError:"City unknown, try again."})
          console.log("Something went wrong")
          console.log(err)
        })
        
       
        
        
     
        
  }

  render() {
    
    return (
      
      <div className="body">
        <div> <h1 className="header">Check Your City's Weather</h1></div>

        <div className="container">
          <input className="input" placeholder="City's Name..." onChange={(e) => this.setState({tempInput:e.target.value})}></input>
          <Button className="submitButton" variant="outline-primary" onClick={() => this.fillData()}>Discover!</Button>
        </div>

        
        { this.state.list != null ? 
          <WeatherCard 
          temp={this.state.temp}
          city= {this.state.city}
          minTemp= {this.state.minTemp} 
          maxTemp= {this.state.maxTemp} 
          feelsLike= {this.state.feelsLike} />
          : <h2 className="error">{this.state.cityError}</h2>
        }
        </div>
        
      
    
    )
 }
}

export default App;
