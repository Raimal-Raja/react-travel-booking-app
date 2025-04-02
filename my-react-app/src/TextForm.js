import React, { useState } from 'react'
export default function TextForom(props) {

    const handleUpperCase = () => {

        console.log("Uppercase was clicked!")
        setText("You have clicked on Uppercase!")
        let newText = Text.toUpperCase();
        setText(newText)
    }
    const handleLowerCase = () => {

        console.log("Up was Lowercase was clicked!")
        setText("You have clicked on Lowercase!")
        let newText = Text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("Uppercase was clicked!")
        setText(event.target.value)
    }

    const handleExtraSpaces= () =>{
        let newText = Text.split(/[ ]+/);
        setText(newText);
    }

    const handleCopy =() =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [Text, setText] = useState("Enter text here! ")
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div>
                    <div className="mb-3">
                        <textarea className="form-control" value={Text} id="myBox" onChange={handleOnChange} rows="3"></textarea>
                    </div>
                    <button className='btn btn-primary mx-3 my-3' onClick={handleUpperCase}>Convert text to Uppercase</button>
                    <button className='btn btn-primary mx-3 my-3' onClick={handleLowerCase}>Convert text to lowercase</button>
                    <button className='btn btn-primary mx-3 my-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className='btn btn-primary mx-3 my-3' onClick={handleCopy}>Copy Text</button>
                </div>
            </div>
            <div className="container my-4">
                <h3>Your Text Summary</h3>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.0008 * Text.split(" ").length} Mintues read</p>

                <h3>Preview</h3>
                <p>{Text}</p>
            </div>
        </>
    )
}