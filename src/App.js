
import './App.css';
import Homepage from './pages/homepage';
import{Route, BrowserRouter, Routes} from 'react-router-dom'
import Aboutpage from './pages/aboutpage';
import Countriespage from './pages/countriespage';
import Country from './pages/country';


function App() {
return (
  <div className="App">
  <BrowserRouter>
  <Routes>

    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/about' element={<Aboutpage/>}></Route>
    <Route path='/countries' element={<Countriespage/>}></Route>
    <Route path='/country/:countryName' element={<Country/>}></Route>


  </Routes>
  </BrowserRouter>
 
  </div>
)
};

export default App;
