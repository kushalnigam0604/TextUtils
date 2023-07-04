import React from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [_mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout( ()=> {
      setAlert(null);
    }, 1500);
  }


  const toggle= ()=> {
    if(_mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#7a8289';
      showAlert("Dark mode has been enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled" , "success");

    }
  }

  return (
    <>
    <Router>
    <Navbar title='TextUtils' aboutText='About TextUtils' mode={_mode} toggleMode = {toggle}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
            <Route path="/about" element={<About mode={_mode} />}/>
            <Route path="/" element={<TextForm heading='Enter the text to analyze below' mode={_mode} showAlert = {showAlert}/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
