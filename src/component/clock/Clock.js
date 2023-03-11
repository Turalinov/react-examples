import {Component} from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() { 
    // запускается после того, как компонент отрендерился 
    // вызывается после монтирования компонента в DOM. 
    // Как и componentWillMount, он вызывается один раз в жизненном цикле
    this.timerID = setInterval( () => this.tick(), 1000 ) 
  }

  componentWillMount() { 
    // вызывается непосредственно перед монтированием 
    // компонента в DOM или методом визуализации.
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock;