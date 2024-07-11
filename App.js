
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';


import { useState } from 'react';
function App() {
  const [Mode, setMode] = useState('light');

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = 'gray'
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="Website" mode={Mode} toggleMode={toggleMode} />
      <div className="container">
        <About/>
            <Textform heading="Enter the text to analyze" mode={Mode} />
      </div>
    </>
  );
}

export default App;
