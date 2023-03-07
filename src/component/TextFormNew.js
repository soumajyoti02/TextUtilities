import React, { useState } from 'react'

export default function TextFormNew(props) {
    const upper = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted To Uppercase!", "success")
    }
    const lower = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted To Lowercase!", "success")
    }
    const clear = () => {
        setText('')
        props.showAlert("Cleared!", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const h1Changer = (mode) => {
        if (mode === 'dark')
            return 'white'
        else if (mode === 'red')
            return 'yellow'
        else if (mode === 'green')
            return 'skyblue'
        else
            return 'black'
    }

    const textboxChanger = (mode) => {
        if (mode === 'dark')
            return '#212529'
        else if (mode === 'red')
            return '#52030a'
        else if (mode === 'green')
            return '#02351d'
        else
            return 'white'
    }

    const [text, setText] = useState('')
    return (
        <>
            <div>
                <h1 className="" style={{ color: h1Changer(props.mode) }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5" style={{ backgroundColor: textboxChanger(props.mode), color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>

                <button className="btn btn-outline-success" onClick={upper}>Convert To UpperCase</button>
                <button className="btn btn-outline-warning m-lg-2" onClick={lower}>Convert To LowerCase</button>

                {/* EMAIL EXTRACTER */}
                <div className="card">
                    <div className="card-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#031527' }} >
                        <blockquote className="blockquote mb-2" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529' }}>
                            <p className='form-control' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#031527', border: 0, color: props.mode === 'light' ? 'black' : 'white' }}>{text.slice(0, text.search('@'))}</p>
                        </blockquote>
                    </div>
                </div>

                {/* CLEAR */}
                <button type="button" className="btn btn-outline-secondary m-lg-2" onClick={clear}>Clear</button>
            </div>
        </>
    )
}
