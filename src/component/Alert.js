import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let letter = word.toLowerCase();
        return word[0].toUpperCase() + letter.slice(1)
    }
    return (
        props.alertMessage && <div div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show role="alert"`
        }>
            <strong>{capitalize(props.alertMessage.type)}</strong>  {props.alertMessage.msg}
        </div >
    )
}
