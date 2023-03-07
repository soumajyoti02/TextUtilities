import './App.css';
import Navbar from './component/Navbar';
import TextFormNew from './component/TextFormNew';
import React, { useState } from 'react'
import Alert from './component/Alert';
import About from './component/About';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alertMessage, setAlertMessage] = useState(null)

  const showAlert = (message, type) => {
    setAlertMessage({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlertMessage(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light' || mode === 'red' || mode === 'green') {
      setMode('dark')
      document.body.style.backgroundColor = '#031527'
      showAlert("Dark Mode Activated", "success")
      document.title = `TextEditor - Dark Mode`
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Activated", "success")
      document.title = `TextEditor`
    }
  }

  const toggleModeGreen = () => {
    if (mode === 'light' || mode === 'red' || mode === 'dark') {
      setMode('green')
      document.body.style.backgroundColor = '#012615'
      showAlert("Greenish Mode Activated", "success")
      document.title = `TextEditor - Greenish Mode`
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Activated", "success")
      document.title = `TextEditor`
    }
  }

  const toggleModeRed = () => {
    if (mode === 'light' || mode === 'green' || mode === 'dark') {
      setMode('red')
      document.body.style.backgroundColor = '#390107'
      showAlert("Greenish Mode Activated", "success")
      document.title = `TextEditor - Reddish Mode`
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Activated", "success")
      document.title = `TextEditor`
    }
  }

  return (
    <>
      {/*<-------------- FOR ROUTING -------------> */}

      {/* <Router>
        <div>
          <Navbar title="Blog" aboutText="React About" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed} toggleModeGreen={toggleModeGreen} />
          <Alert alertMessage={alertMessage} />
          <div className="container">
            <Routes>
              <Route exact path='/About' element={<About />} />
              <Route exact path='/' element={<TextFormNew heading="Enter Text To Analyze" mode={mode} showAlert={showAlert} />} />
            </Routes>
          </div>
        </div>
      </Router> */}

      <div>
        <Navbar title="Blog" aboutText="React About" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed} toggleModeGreen={toggleModeGreen} />
        <Alert alertMessage={alertMessage} />
        <div className="container">
          <TextFormNew heading="Enter Text To Analyze" mode={mode} showAlert={showAlert} />
        </div>
      </div>
    </>
  );
}

export default App;
