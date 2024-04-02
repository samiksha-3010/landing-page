import logo from './logo.svg';
import './App.css';
import Home from './Cmponent/Home';
import About from './Cmponent/About';
import Work from './Cmponent/Work';
import Testimonial from './Cmponent/Testimonial';
import Contact from './Cmponent/Contact';
import Footer from './Cmponent/Footer';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route     path='/' element={<Home/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/work' element={<Work/>}/>
          <Route  path='/contact' element={<Contact/>}/>
          <Route  path='/testimoinal' element={<Testimonial/>}/>
        </Routes> 







     {/* <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/> */}
    </div>
  );
}

export default App;
