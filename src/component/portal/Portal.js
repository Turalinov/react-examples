import {Component} from 'react';
import ReactDOM from 'react-dom';
import './Portal.css';


const modalPortal = document.getElementById('modal-portal');


class Modal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalPortal.appendChild(this.el);
  }

  componentWillUnmount() {
    modalPortal.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children, 
      this.el
    )
  }
}

function Child() {
  return (
    <div className='modal'>
      <button>Click</button>
    </div>
  )
}


class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {clicks : 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }))
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    )
  }
}

export default Parent;



