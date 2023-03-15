import {useState, useEffect, useCallback} from 'react';
import {Container} from 'react-bootstrap';


// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


//имитация запроса 
// const getSomeImages = () => {
//   console.log('fetching');

//   return [
//     'https://images.unsplash.com/photo-1621933339970-9bbe7ca69bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80', 
//     'https://images.unsplash.com/photo-1596462861051-91d4486e800e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
//   ]
// }


const Slider = (props) => {
  
    // const slideStateArray = useState();
    // console.log(slideStateArray)

    // const [state, setState] = useState({slide: 0, autoplay: false });

    // function changeSlide(i) {
    //   setState(state => ({...state, slide: state.slide + 1}))
    // }

    // function toggleAutoplay() {
    //   setState(state => ({...state, autoplay: !state.autoplay}))
    // }

    // const [slide, setSlide] = useState(() => calcValue(100));

    const [slide, setSlide] = useState(0);

    // useEffect(() => {
    //     console.log('effect')
    //     document.title = `Вы нажали ${slide} раз`
    // }, [slide])

    const [autoplay, setAutoplay] = useState(false);


    const getSomeImages = useCallback( () => {
        console.log('fetching');

        return [
            'https://images.unsplash.com/photo-1621933339970-9bbe7ca69bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80', 
            'https://images.unsplash.com/photo-1596462861051-91d4486e800e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
        ]
    }, [])


    function changeSlide(i) {
      setSlide(slide => slide + i)
    }

    function toggleAutoplay() {
      setAutoplay(autoplay => !autoplay)
    }


    return (
        <Container>
            <div className="slider w-50 m-auto">
{/* 
                {
                    getSomeImages().map((url, i) => {
                        return (
                            <img key={i} className="d-block w-100" src={url} alt="slide" />
                        )
                    })
                } */}
                
                {<Slide  getSomeImages={getSomeImages}/>}
                <div className="text-center mt-5">Active slide {slide} <br/>{autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


//если функция изменится то только в таком случае у нас будет запускаться useEffect повторно 
const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);
    
    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />) }
        </>
    )
}


export default Slider;