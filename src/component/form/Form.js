

import React, {Component, useRef, useState, useEffect} from 'react';
import {Container}  from 'react-bootstrap';

// class Form extends Component {

//   //можно создавать как React.createRef();
//   // myRef = React.createRef();

//   //можем сразу инициировать фокус на отрендеренном элементе,   обращаемся к свойству current ref-a
//   // componentDidMount() {
//     // this.myRef.current.focus();
//   // }

//   //также мы можем создавать рефы через функцию, колбэк ref в таком случае обращаемся к свойству напрямую без промежуточного свойста current
//   setInputRef = elem => {
//     this.myRef = elem
//   }

//   focusFirstTI = () =>{
//     //всегда лучше проверять существует ли ref
//     if (this.myRef) {
//       // this.myRef.current.focus();
//       this.myRef.focus();
//     }
//   }

//   render() {
//     return (
//       <Container>
//         <form className="w-50 border mt-5 p-3 m-auto">
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlInput1" className="form-label">Адрес электронной почты</label>

//             <input 
//               ref={this.setInputRef}
//               type="email" 
//               className="form-control" 
//               id="exampleFormControlInput1" 
//               placeholder="name@example.com"/>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleFormControlTextarea1" className="form-label">Пример текстового поля</label>
//             <textarea 
//               onClick={this.focusFirstTI}
//               className="form-control" 
//               id="exampleFormControlTextarea1" 
//               rows="3"></textarea>
//           </div>
//         </form>
//       </Container>
//     );
//   }
// }

const Form = () => {
  const [text, setText] = useState('');

  const myRef = useRef(1)  ;

  useEffect(() => {
    myRef.current = text;
    // myRef.current++;
    // console.log(myRef.current);
  })

  // const myRef = useRef(null)  ;

  // const focusFirstTI = () => {
  //   myRef.current.focus();
  // }
  
  return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Адрес электронной почты</label>

            <input 
              // ref={myRef}
              onChange={(e) => setText(e.target.value)}
              type="email" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name@example.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Пример текстового поля</label>
            <textarea 
              // onClick={focusFirstTI}
              // onClick={() => myRef.current++ }
              value={myRef.current}
              className="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3"></textarea>
          </div>
        </form>
      </Container>
    );
}

export default Form;
