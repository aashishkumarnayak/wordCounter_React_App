import React, {useState} from 'react'

export default function Textform() {
    const [text, setText] = useState("")
    const handle = (event) =>
    {
        setText(event.target.value)
    }

    
    function Changetolow() {
      
      let newText1 = text.toLowerCase()
        setText(newText1)
      }
    function Changetoup() {
      
       let newText2 = text.toUpperCase()
         setText(newText2)
       }
  return (
    <div>
     <h1>Enter Text Here</h1>
<div className = 'container'>
  <label for="exampleFormControlTextarea1" class="form-label"></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" value = {text} onChange={handle}></textarea>
  <button className='btn btn-primary my-3 mx-3' mt-4 onClick={Changetoup}>convert into uppercase</button>
  <button className='btn btn-primary mx-3' mt-4 onClick={Changetolow}>convert into lowercase</button>
</div>

  <div className= 'container'>
    <h2>Your Text Summary</h2> 
    <h1>{text.split(" ").length} words |OR| {text.length} characters</h1>
  <h2>Preview</h2>
  <p>{text}</p>
  </div>
    </div>
  )
}
