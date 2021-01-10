import './App.css';
import LazyLoad from './LazyLoad.jsx';
import fullsize from '../assests/fullsize.jpg';
import thumb from '../assests/thumb.jpg';

const altText = "legs with Nike shoes"

const App = () => {
  return (
    <div className="App">
      <LazyLoad
        src={fullsize}
        placeholder={thumb}
        alt={altText}
      />
    </div>
  );
}

export default App;
