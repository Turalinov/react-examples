import { Component } from "react";
import TemperatureInput from "../temperatureInput/TemperatureInput";

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class CalcTemp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: '',
      scale: 'c'
    }

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    })
  }
  
  
  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    })
  }

  render() {

    const {temperature, scale} = this.state;
    const celsius = scale == 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale == 'c' ? tryConvert(temperature, toFahrenheit) : temperature;


    return (
      <div>
        <TemperatureInput 
        temperature={celsius}
        onTemperatureChange={this.handleCelsiusChange}
        scale="c"
      />
      <TemperatureInput 
        temperature={fahrenheit}
        onTemperatureChange={this.handleFahrenheitChange}
        scale="f"
      /> <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    )
  }


}

export default CalcTemp;