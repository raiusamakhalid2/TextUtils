import React, { useState } from 'react'

export default function Textform(props) {

    const handleUpClick = () => {
        setText(Text.toUpperCase());
        props.showalert('Coverted to Uppercase', 'success')
    }     
    
    const handleLoClick = () => {
        setText(Text.toLowerCase());
        props.showalert('Coverted to Lowercase', 'success')
    }

    const handleClear = () => {
        let text = "";
        setText(text);
        props.showalert('Cleared', 'success')
    }

    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert('Copied', 'success')
    }

    const handleExtraSpaces = () => {
        let text = Text.split(/[ ]+/);  
        setText(text.join(" "));
        props.showalert('Removed Extra Spaces', 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    } 

    const [Text, setText] = useState('');
    
  return (
    <div className='container my-5'>
        <div className="container">
            <h1 style={{color: props.mode==='dark'? 'white' : '#042743'}}>{props.hading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'? '#063c68' : 'white',color: props.mode==='dark'? 'white' : '#042743'}} value={Text} onChange={handleOnChange} id='mybox' rows="10" placeholder='Enter Text'></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled ={Text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled ={Text.length===0} onClick={handleLoClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" disabled ={Text.length===0} onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-1 my-1" disabled ={Text.length===0} onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-1 my-1" disabled ={Text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'? 'white' : '#042743'}}>
            <h2>Text Summary</h2>
            <p>{Text.split(" ").filter(element=>element.length!==0).length} Words and {Text.length} Caracters</p>
            <p>{0.008*Text.split(" ").filter(element=>element.length!==0).length} Minuts read</p>
            <h2>Preview</h2>
            <p>{Text}</p>
        </div>
    </div>
  )
}
