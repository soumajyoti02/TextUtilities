import React, { useState } from 'react'

export default function TextForm(props) {
    const upper = () => {
        setText(text.toUpperCase())
    }
    const lower = () => {
        setText(text.toLowerCase())
    }
    const emailExtracter = () => {
        let x = text.search('@')
        let str = text.slice(0, x)
        setEmail(str)
    }
    const multiply = () => {
        let x = text.indexOf('*')
        let l = Number(text.slice(0, x))
        let r = Number(text.slice(x + 1, text.length))
        setNumber(l * r)
    }

    const clear = () => {
        setText('')
        setNumber('')
        setEmail('')
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    return (
        <>
            <div>
                <h1 className="">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
                </div>

                <button className="btn btn-outline-success" onClick={upper}>Convert To UpperCase</button>
                <button className="btn btn-outline-warning m-lg-2" onClick={lower}>Convert To LowerCase</button>

                {/* EMAIL EXTRACTER */}
                <div className="card">
                    <div className="card-header">
                        Email ID
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p className='form-control'>{email}</p>
                            <button type="button" className="btn btn-outline-info" onClick={emailExtracter}>Extract Email</button>
                        </blockquote>
                    </div>
                </div>


                {/* Multiplier */}
                <div className="card">
                    <div className="card-header">
                        Multiply Number
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p className='form-control'>{number}</p>
                            <button type="button" className="btn btn-outline-info" onClick={multiply}>Multiply</button>
                        </blockquote>
                    </div>
                </div>


                {/* CLEAR */}
                <button type="button" className="btn btn-outline-secondary m-lg-2" onClick={clear}>Clear</button>
            </div>
        </>
    )
}
