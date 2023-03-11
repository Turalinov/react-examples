import {Component} from 'react';

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта',
}


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}



class TemperatureInput extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }


  render() {
    const {temperature, scale} = this.props
    return (
      <fieldset>
        <legend>
          Введите градусы по шкале {scaleNames[scale]}:
        </legend> 
         <input 
            type="text"
            value={temperature}
            onChange={this.handleChange}
          />
      </fieldset>
    )
  }

}


export default TemperatureInput;