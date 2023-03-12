import {Component} from 'react';
import ReactDOM from 'react-dom';

const styles = {
  dropdown: {
    position: 'absolute',
    width: '150px',
    height: '100px',
    background: '#fcc'
  },
  calendar: {
    overflow: 'hidden', 
    position: 'relative', 
    width: 100, 
    background: '#cf0'
  }
}

class RelativePortal extends Component {
  constructor(props) {
    super(props);
    this.node = document.createElement('div');
    document.body.appendChild(this.node);
  }

  render() {
    return null;
  }
  
  componentDidUpdate() {
    const root = ReactDOM.createRoot(this.node);
    root.render(<div {...this.props}/>);
  }

  componentWillUnmount() {
    document.body.removeChild(this.node)
  }
}


class Dropdown extends Component {
  render() {
    return (
      <div style={styles.dropdown}></div>
    ) 
  }
}


class DropdownLink extends Component {
  constructor(props){
    super(props);

    this.state = {
      isOpen: false
    }
  }

  render() {
    const {isOpen} = this.state;

    return (
      <div>
        <button onClick={() => this.setState({isOpen: !isOpen})}>
          Toggle
        </button>
        <RelativePortal>
          {isOpen && <Dropdown/>}
        </RelativePortal>
      </div>
    )
  }
}


class Calendar extends Component {


  render() {
    return (
     <div style={styles.calendar}>
       <DropdownLink/>
       <div>Some stuff here</div>
     </div>
      // <div className="calendarLink">
      //   <div className="calendarLink__trigger">Выбрать дату</div>
      //   <RelativePortal left="0" top="0">
      //     {isOpen && <CalendarDropdown/> }
      //   </RelativePortal>
      // </div>
    )
  }


}

export default Calendar;