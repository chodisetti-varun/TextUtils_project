import React, {useState}from 'react'


export default function TextFile(props) {
    const handleupClick=()=>
    {
        // console.log("uppercase was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success");
    }
    const handleclerClick=()=>
    {
        // console.log("uppercase was clicked"+text);
        let newtext="";
        setText(newtext);
        props.showAlert("Text cleared","success");

       
    }
    const handleloClick=()=>
    {
        // console.log("uppercase was clicked"+text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase","success");
    }
    const handleOnChange=(event)=>
    {
        // console.log("On change");
        setText(event.target.value);
        
    }
    const handlecopy=()=>
    {
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
    }
    const handleExtraSpace=()=>
    {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra space","success");
    }

    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'rgb(29 26 26)':'white' , color:props.mode==='dark'?'white':'black'}}id="myBox"  rows="8" ></textarea>
    
  </div>
  <button type="button" className="btn btn-primary mx-3 my-3" onClick= {handleupClick} >Convert To Uppercase</button>
  <button type="button" className="btn btn-primary mx-3 my-3" onClick= {handleloClick}  >Convert To Lowercase</button>
  <button type="button" className="btn btn-primary mx-3 my-3" onClick= {handleclerClick}  >Clear Text</button>
  <button type="button" className="btn btn-primary mx-3 my-3" onClick= {handlecopy}  >Copy Text</button>
  <button type="button" className="btn btn-primary mx-3 my-3" onClick= {handleExtraSpace}  >Remove Extra Space</button>
 </div>


    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{(0.008*text.split(" ").length)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter any text see the preview"}</p>
  </div>
    </>
  ) 
}
 