import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/NavBar';
import TextFrom from './Components/TextFrom';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {

  // const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [theme, setThemeColor] = useState("white");

  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = 'grey';
  //     showAlert("Dark mode Enabled", "success");
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode Enabled", "success");
  //   }
  // }

  const handleThemeChange = (color) => {
    setThemeColor(color);
    document.body.style.backgroundColor = color;

    switch (color) {
      case "white":
        showAlert("White mode Enabled", "success");
        break;
      case "#b71c1c":
        showAlert("Red mode Enabled", "success");
        break;
      case "#006400":
        showAlert("Green mode Enabled", "success");
        break;
      case "#00008b":
        showAlert("Blue mode Enabled", "success");
        break;
      case "grey":
        showAlert("Grey mode Enabled", "success");
        break;
      default:
        showAlert("Light mode Enabled", "success");
    }
  };

  const showAlert = (msgs, types) => {
    setAlert({
      msg: msgs,
      type: types
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" AboutText="About us" theme={theme} handleThemeChange={handleThemeChange} />
        <Alert alert={alert} theme={theme} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/"
              element={<TextFrom heading="Enter text to Analyse" mode={theme} showAlert={showAlert} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}  

export default App;
