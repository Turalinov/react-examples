import {Component, Fragment} from "react";
import styled from "styled-components";

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 12px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0,.2);
  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active ? 'orange' : 'black'};
  }
  input {
    display: block;
    margin-bottom: 10px;
  }
`; 

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0,0,0, .2);
  box-shadow: 5px 5px 10px rgba(0,0,0,.2);
`;

class WhoAmI extends Component{
  constructor(props) {
    super(props)
    this.state = {
      years: 27,
      position: 'Frontend'
    }
    this.nextYear = this.nextYear.bind(this)
  }

  nextYear () {
    this.setState(state => ({
      years: state.years + 1
    }))
    
  }

  commitInputChanges = (e) => {

    let value = e.target.value;

    this.setState({
      position: value.length == 0 ? 'Frontend' : value
    })
  }

  render() {
    const {position, years} = this.state;
    const {name, surname, link } = this.props;

    return (
      <EmpItem active>
        <Button onClick={this.nextYear}>+++</Button>
        <Header>My name is {name}, surname - {surname},
            age - {years}, 
            position - {position}</Header>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input 
                type="text" 
                onChange={(e) => this.commitInputChanges(e)}/>
        </form>
      </EmpItem>
    )
  }
}

export default WhoAmI;