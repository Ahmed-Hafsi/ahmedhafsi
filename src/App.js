import imagInSrc from './imagInSrc.jpeg';
import './App.css';
import './style.css';
import Bike from './video/Bike.mp4';
function App() {
  return (
    <div>
    <div style={{border: 'solid 1px noir', maxWidth: '100vw'}}>
      <h1 className="titleRed">ahmed</h1>
      <br />
      <img src={imagInSrc} alt=""/>
      <br />
      <img src={"./imageInPublic.jpg"} alt=""/>
      </div>
     <video autoPlay loop muted width={320} height={240} controls>
   <source src={Bike} type="video/mp4" />
    </video>
    </div>
)
};

export default App;
