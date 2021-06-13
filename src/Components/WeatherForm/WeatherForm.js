
import React, { Component } from 'react';
import WeatherData from '../WeatherData/WeatherData';
import MoodForm from '../MoodForm/MoodForm';
import Modal from '../Modal/Modal';
import './WeatherForm.css';

class WeatherForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      radioValue: 'imperial',
      weatherData: {
        'cod': '0'
      },
      modalIsVisible: false,
      currentMood: ''
    }

    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.toggleMood = this.toggleMood.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleRadioChange(event) {
    this.setState({
      radioValue: event.target.value
    });
  }

  toggleModal() {
    this.setState({ modalIsVisible: !this.state.modalIsVisible })
  }

  toggleMood(mood) {
    this.setState({ currentMood: mood })
  }

  submit(e) {
    e.preventDefault()
    // Get the api key
    const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    // Get the zip from the input
    const zip = this.state.inputValue
    // Get the units from the radio input
    const units = this.state.radioValue
    // Form an API request URL with the apikey and zip
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}&units=${units}`

    fetch(url).then(res => {
      return res.json()
    }).then((json) => {
      this.setState({ weatherData: json })
    }).catch((err) => {
      // If there is no data 
      this.setState({ weatherData: null })
      // Print an error to the console. 
      console.log('-- Error fetching --')
      console.log(err.message)
    })
  }

  render() {
    return (
      <div className="WeatherForm">
        <form onSubmit={e => this.submit(e)}>
          <div className='zipFieldContainer'>
            <input
              value={this.state.inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })}
              type="text"
              pattern="(\d{5}([\-]\d{4})?)"
              placeholder="Enter Zipcode"
            />
            <div onClick={e => this.submit(e)} className="submitWeather">Submit</div>
          </div>
          {this.state.weatherData.cod === '404' ? <p className="errorText">zipcode not found.</p> : ''}

          <div>
            <div className="radio">
              <input type="radio" id="imperial" name="unit" value="imperial" onChange={this.handleRadioChange} checked={this.state.radioValue === 'imperial'} />
              <label htmlFor="imperial">Imperial</label>
            </div>

            <div className="radio">
              <input type="radio" id="metric" name="unit" value="metric" onChange={this.handleRadioChange} checked={this.state.radioValue === 'metric'} />
              <label htmlFor="metric">Metric</label>
            </div>

            <div className="radio">
              <input type="radio" id="standard" name="unit" value="standard" onChange={this.handleRadioChange} checked={this.state.radioValue === 'standard'} />
              <label htmlFor="standard">Standard</label>
            </div>
          </div>
        </form>
        {this.state.weatherData.cod === 200 ?
          <div className="weatherDisplay">
            <WeatherData weather={this.state.weatherData}></WeatherData>
            <MoodForm toggle={this.toggleModal} setMood={this.toggleMood} mood={this.state.currentMood}></MoodForm>
            {this.state.modalIsVisible ? <Modal toggle={this.toggleModal} mood={this.state.currentMood} icon={this.state.weatherData.weather[0].icon}></Modal> : ''}
          </div>
          : ''}
      </div>
    );
  }
}

export default WeatherForm;