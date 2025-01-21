import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  return (

    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">{props.AboutText}</Link>
              </li>

            </ul>
          </div>
        </div >

        <div className="collapse navbar-collapse mx-5" id="navbarNavDarkDropdown" >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Themes
              </a>
              <ul className="dropdown-menu dropdown-menu-dark px-2">
                <li>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="themeSwitch"
                      id="redTheme"
                      onChange={() => props.handleThemeChange("#b71c1c")}
                      checked={props.theme === "#b71c1c"}
                    />
                    <label className="form-check-label" htmlFor="redTheme">
                      Red
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="themeSwitch"
                      id="greenTheme"
                      onChange={() => props.handleThemeChange("#006400")}
                      checked={props.theme === "#006400"}
                    />
                    <label className="form-check-label" htmlFor="greenTheme">
                      Green
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="themeSwitch"
                      id="blueTheme"
                      onChange={() => props.handleThemeChange("#00008b")}
                      checked={props.theme === "#00008b"}
                    />
                    <label className="form-check-label" htmlFor="blueTheme">
                      Blue
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="themeSwitch"
                      id="greyTheme"
                      onChange={() => props.handleThemeChange("grey")}
                      checked={props.theme === "grey"}
                    />
                    <label className="form-check-label" htmlFor="greyTheme">
                      Grey
                    </label>
                  </div>
                </li>
                <li>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="themeSwitch"
                      id="whiteTheme"
                      onChange={() => props.handleThemeChange("white")}
                      checked={props.theme === "white"}
                    />
                    <label className="form-check-label" htmlFor="whiteTheme">
                      White
                    </label>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} mode</label>
            </div> */}

      </nav >
    </div >
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string,
}

// Navbar.defaultProps ={
//   title: 'title here',
//   AboutText: 'about here'
// }
