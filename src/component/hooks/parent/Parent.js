import React, {useState, useEffect, useCallback, Component} from 'react';

// shouldComponentUpdate() - new props, setState(), forceUpdate

class Child extends Component {
  constructor(props) {
    super(props);
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)

    if (nextProps.updateCounter === this.props.updateCounter) {
      console.log('одинаковы') 
      return false;
    }

    return true;
  } 
  
  render() {
    console.log('render child')

    return (
      <div>
        <button onClick={() => this.props.updateCounter(1)}>Изменить на 1</button>
        <button onClick={() => this.props.updateCounter(2)}>Изменить на 2</button>
      </div>
    )
  }

} 

// терерь попробуем это сделать с помощью useCallback()

const Parent = () => {

  const [counter, setCounter] = useState(1);



  // const updateCounter = (num) => {
  //   setCounter(counter => num)
  // }
  
  const updateCounter = useCallback((num) => {
    setCounter(counter => num)
  }, [])

  
  console.log('render' + counter)
  return (
     <div>
       <h1>{counter}</h1>
       <Child updateCounter={updateCounter}/>
        
     </div>
  )  
}


// class Parent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       counter: 1
//     }
//   } 
//   updateCounter = (num) => {
//     this.setState(({counter}) => ({
//       counter: num
//     }))
//   }

//   render() {
//     console.log('render' + this.state.counter)
//     const counter = this.state.counter

//     return (
//       <div>
//         <h1>{counter}</h1>
//         <Child updateCounter={this.updateCounter}/>
        
//       </div>
//     )
//   }
// }

export default Parent;