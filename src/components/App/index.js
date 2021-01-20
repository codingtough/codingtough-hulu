import { useState } from 'react';
import Header from '../Header';
import Nav from '../Nav';
import Results from '../Results';
import './App.css';
import requests from '../Requests';
import Footer from '../Footer';

function App() {
   const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
       <Header />
       <Nav setSelectedOption={setSelectedOption} />
       <Results selectedOption={selectedOption} />
       <Footer />
    </div>
  );
}

export default App;
