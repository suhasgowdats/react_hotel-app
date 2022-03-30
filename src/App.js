import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import {Routes, Route} from 'react-router-dom'
import HotelList from './HotelList';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotel-list' element={<HotelList/>} ></Route>
      </Routes>
            
      <Footer/>      
    </div>
  );
}

export default App;
