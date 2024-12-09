import Carousel from './components/Carousel';
import './styles/css/styles.css';

function App() {
  return <div className='wrapper'>
    <div className="container">
      <div className="content">
        <a className='header__link' target='_blank' href="https://mobile-pay-app.vercel.app/">About Me</a>
        <Carousel />
      </div>
    </div>
  </div>
}

export default App;
