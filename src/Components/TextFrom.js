import React, { useState } from 'react'

export default function TextFrom(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase());

        text.length > 0 ?
            props.showAlert("Converted to Upper Case", "success") :
            props.showAlert("Please Enter some text", "warning")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());


        text.length > 0 ?
            props.showAlert("Converted to Lower Case", "success")
            :
            props.showAlert("Please Enter some text", "warning")
    }

    const handleReverseCaseClick = () => {
        let reversedText = text
            .split("")
            .map((char) =>
                char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
            )
            .join("");
        setText(reversedText);
        text.length > 0 ?
            props.showAlert("Reversed the Case", "success") :
            props.showAlert("Please Enter some text", "warning")
    }
    const handleClearAllClick = () => {
        setText("");
        text.length > 0 ?
            props.showAlert("Cleared All", "success") :
            props.showAlert("Nothing to Clear", "warning")
    }

    const handleRemoveExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));

        text.length > 0 ?
            props.showAlert("Removed Extra Spaces", "success") :
            props.showAlert("Please Enter some text", "warning")
    }
    const getColor=(color)=>{

        switch (color) {
            case "white":
                return "black";
            case "#b71c1c":
                return "#5c0e0e";
            case "#006400":
                return "#024002";
            case "#00008b":
                return "#000042";
            case "grey":
                return "#4f4e4e";
            default:
                return "white"; // Default color
        }
    }


    const [text, setText] = useState("");
    return (
        <div style={{ color: props.mode === 'white' ? 'black' : 'white' }}>
            <div className='container'>
                <h5>{props.heading}</h5>
                <div className="form-group">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'white' ? 'white' : 'white', color:'black' }} onChange={handleOnChange} id="myBox" rows="5"></textarea>
                </div>
                <button className={`btn rounded-pill my-3 mx-2`} 
                 style={{ backgroundColor: getColor(props.mode), color: "white", border:"1px solid white" }}
                  onClick={handleUpClick}>Upper Case</button>

                <button className={`btn rounded-pill my-3 mx-2`}
                 style={{ backgroundColor: getColor(props.mode), color: "white", border:"1px solid white" }}
                  onClick={handleLowClick}>Lower Case</button>

                <button className={`btn rounded-pill my-3 mx-2`} 
                 style={{ backgroundColor: getColor(props.mode), color: "white" , border:"1px solid white" }}
                 onClick={handleReverseCaseClick}>Reverse Case</button>

                <button className={`btn rounded-pill my-3 mx-2`}
                 style={{ backgroundColor: getColor(props.mode), color: "white" , border:"1px solid white"}}
                  onClick={handleClearAllClick}>Clear All</button>

                <button className={`btn  rounded-pill my-3 mx-2`} 
                 style={{ backgroundColor: getColor(props.mode), color: "white", border:"1px solid white" }}
                 onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3">
                <u> <h5>Your text summary</h5></u>
                <p>
                    <b>Words :</b> {text.trim().split(/\s+/).filter((word) => word !== "").length} || <b>Characters :</b> {text.length}
                </p>

                <p>  <b>  Minutes read : </b> {0.008 * text.trim().split(/\s+/).filter((word) => word !== "").length} </p>
                <u>  <h5>Preview</h5></u>
                <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview here'}</p>
            </div>

        </div>
    )
}
