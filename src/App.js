import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeImage from './components/HomeImage';
import Category from './components/Category';
import Slider from './components/Slider';
import Product from './components/Product';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
       <Header />
       <Navbar />
       <Category />
       <HomeImage/>
       <Slider />
       <Product />
       <Service />
    </div>
  );
}

export default App;
