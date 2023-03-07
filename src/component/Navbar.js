import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const navItemChanger = (mode) => {
        if (mode === 'dark')
            return 'white'
        else if (mode === 'red')
            return 'yellow'
        else if (mode === 'green')
            return 'skyblue'
        else
            return 'black'
    }

    const titleColorChanger = (mode) => {
        if (mode === 'dark' || mode === 'green' || mode === 'red')
            return 'white'
        else return 'black'
    }
    return (
        <>
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        {/* <Link className="navbar-brand" to="/" style={{ color: titleColorChanger(props.mode) }}>{props.title}</Link> */}
                        <a className="navbar-brand" href="#" style={{ color: titleColorChanger(props.mode) }}>{props.title}</a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>

                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    {/* <Link className="nav-Link active" aria-current="page" style={{ color: navItemChanger(props.mode) }} to="/">Home</Link> */}
                                    <a className="nav-Link active" aria-current="page" style={{ color: navItemChanger(props.mode) }} href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-Link" to="/About" style={{ color: navItemChanger(props.mode) }}>{props.aboutText}</Link> */}
                                </li>
                            </ul>

                            <div className={`m-lg-4 form-check form-switch text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                            </div>

                            <div className={`m-lg-4 form-check form-switch text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleModeGreen} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Grennish Dark Mode</label>
                            </div>

                            <div className={`m-lg-4 form-check form-switch text-${props.mode === 'dark' ? 'white' : 'black'}`}>
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleModeRed} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Reddish Dark Mode</label>
                            </div>
                        </div>
                    </div>
                </nav>

                <br></br>
            </div>
        </>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//     title: 'lorem',
//     aboutText: 'Lorem ipsum'
// }