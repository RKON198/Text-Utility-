import React, {useState} from 'react'

export default function Textform(props) {
  const handleUp = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handlelow = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handlechange = (event)=>{
    setText(event.target.value)
  }
  const[text,setText] = useState("")   
  return (  
    <>
     <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handlechange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-2" onClick={handleUp} >Conver to UpperCase </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handlelow} >Conver to LowerCase </button>

        </div>
    </div>
    <div className="container" >
      <h1>Your text summary</h1>
      <p>Total word: {text.split(" ").length}</p>
      <p>Total Character: {text.length}</p>
      <p>Time to read: {0.08*text.split(" ").length} Minutes</p>
    </div>
    </>
   
  )
}
