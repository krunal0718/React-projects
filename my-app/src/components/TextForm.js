import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }

    const handleClClick = ()=>{
        console.log("lowercase was clicked" + text);
        let newText = "  ";
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const handleCopy = ()=>{
       
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); 
    }

    const  handlRemoveSpace = ()=>{
       
         let  newText = text.split(/[ ]+/);
         setText(newText.join(" "))
     
    }

   


    const [text,setText] = useState("Enter text here")
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
            
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                   
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white',color: props.mode==='dark'?'white':'black'}} id="mybox"  rows="8"></textarea>
                   
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClClick}>Claear text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={handlRemoveSpace}>Remove Extra space</button>

        </div>
           <div className="container my-2 " style={{color: props.mode==='dark'?'white':'black'}} >
               <h1> Your text summry </h1>
               <p> {text.split(" ").length} words and {text.length} characters</p>
               <p>{0.008 * text.split(" ").length} Minutes read</p>
               <h2>Preview</h2>
               <p>{text}</p>
           </div>
        </>
    )
}
