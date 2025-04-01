import logo from './logo.svg';
import './App.css';
import './TextForm.js'
import Navbar from './Navbar.js';
import TextForm from './TextForm.js';
import About from './About.js';

function App() {
  return (
    <>
    <Navbar/>
    <TextForm heading = "Fill this form"/>
    {/* <TextForm/> */}
    <About/>
    
  </>
  );
}

export default App;
