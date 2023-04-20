import{Component} from 'react';
class CounterAdditional extends Component{

  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({counter}) => ({ 
        counter: counter + 1
      })
    )
  } 

  render() {
    return (
      <>
        <button
          className={'btn btn-primary'}
          onClick={this.changeCounter}
        >
          Click me
        </button>
        {this.props.render(this.state.counter)}
      </>
    )
  }

}

export default CounterAdditional;