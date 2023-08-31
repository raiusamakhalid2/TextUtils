import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert(
      {
        message: message,
        type: type
      }
    );
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const [mode, setmode] = useState('light')
  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert('Darkmode Enabled', 'success');
  }else{
    setmode('light');
    document.body.style.backgroundColor = 'White';
    showalert('Lightmode Enabled', 'success');
  }
}

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
        <Route path="/About" element={<About mode={mode}/>}/>
        <Route path="/" element={<Textform hading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} showalert={showalert}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
} 

export default App;
