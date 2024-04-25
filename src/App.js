import './App.css';
import Residencies from './Residencies/Residencies';
import Companies from './companies/Companies';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import ContactUs from './contact/ContactUs';
import Footer from './footer/Footer';
import GetStarted from './getStarted/GetStarted';
import Value from './value/Value';

function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient' />
        <Navbar />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <ContactUs/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
