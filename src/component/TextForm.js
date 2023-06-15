import React, {useState} from 'react'

function TextForm(props) {
    const [text, setText] = useState('')
    function handleUpClick(){
    let newText = text.toUpperCase();  
    setText(newText)
    }
    function handleLoClick(){
      let newText = text.toLowerCase();  
      setText(newText)
      }
      function handleClear(){
      let newText = "";
       setText(newText)
        }
  

    function handleOnChange(event){

      setText(event.target.value)
    }
  return (
    <>
    <div className='container-fluid'>
    <h1 style={{color: props.mode==="dark"?"white":"black"}}>{props.heading}</h1>
    <div class="mb-3">
    <label for="mybox" class="form-label"></label>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"grey":"white"}} id="mybox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-1 my-1' onClick={handleClear}>Clear Text</button>
    </div>
    <div className='container my-3'style={{color: props.mode==="dark"?"white":"black"}}>
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p> {0.008 * text.split(" ").length} Minutes Read</p>
    </div>
    <h2 style={{color: props.mode==="dark"?"white":"black"}}>PREVIEW</h2>
    <p style={{color: props.mode==="dark"?"white":"black"}}>{text.length>0?text:"Enter Something to preview It here"}</p>
    </>
  )
}

export default TextForm
