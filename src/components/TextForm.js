import React , {useState} from 'react'

export default function TextForm(props) {
   
    const [text,newtext]=useState("");

    const handleUpclick=()=>{
        newtext(text.toUpperCase())
    };

    const handlecpclick=()=>{
      var text=  document.getElementById("myBox");
      navigator.clipboard.writeText(text.value)
    };
   
     const handleeditclick=(e)=>{
      newtext(e.target.value)
     };

    const  handleLoclick=()=>{
      newtext(text.toLowerCase());
    };

    const handleclclick=()=>{
      newtext("")
    };

    const handlerdclick=()=>{
     newtext(Math.random().toString(36).substring(2,7));
    };

    return (
        <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
         <textarea className="form-control" value={text} style={{ backgroundColor: props.mode==='light'? 'white':'grey', color :props.mode==='light'? 'black':'white' }} onChange={handleeditclick} id="myBox" rows="9"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpclick} >Convert To UpperCase</button>
      <button className="btn btn-secondary mx-2" onClick={handleLoclick} >Convert To LowerCase</button>
      <button className="btn btn-success mx-2" onClick={handleclclick} >Clear Text Area</button>
      <button className="btn btn-info mx-2" onClick={handlecpclick} >Copy Text</button>
      <button className="btn btn-danger mx-2" onClick={handlerdclick} >Random Captcha</button>
    </div>
    <div className='container' my='3'>
        <h1>
           Your Text Summary is  
        </h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2> Preview Data  </h2>
        <p>{text.length > 0 ? text :" Enter Some Text In the Text Area To Display Preview" }</p>
    </div>
    </>
  )
};
