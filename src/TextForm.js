import React, { useState } from 'react'
export default function TextForom(props) {

    const handleUpperCase = () => {

        console.log("Uppercase was clicked!")
        setText("You have clicked on Uppercase!")
        let newText = Text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("Uppercase was clicked!")
        setText(event.target.value)
    }


    const [Text, setText] = useState("Enter text here! ")
    return (
        <>
            <h1>{props.heading}</h1>
       <div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" value = {Text} id="exampleFormControlTextarea1" onChange = {handleOnChange} rows="3"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpperCase}>Convert text to Uppercase</button>
            </div>
        </>
    )
}