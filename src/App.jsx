import { useState } from 'react'


function App() {
  const [colour1, setColour1] = useState("#27aaa7");
  const [colour2, setColour2] = useState("#2b1381");

  function handleButtonLeft(){
     let num=Math.floor((Math.random()*16777215));
     //console.log(num)
    let code="#"+num.toString(16);
    let paddedCodeStr = code.padEnd(6, "0");
    //console.log(paddedCodeStr)
    setColour1(paddedCodeStr)
  }
  function handleButtonRight(){
    let num=Math.floor((Math.random()*16777215));
    //console.log(num)
    let code="#"+num.toString(16)
    let paddedCodeStr = code.padEnd(6, "0");
   // console.log(paddedCodeStr)
   setColour2(paddedCodeStr)
 }

 function handleCopy(e){
   navigator.clipboard.writeText(e.target.innerText);
 }

  return (
    <>
        <section className="background" style={{ backgroundImage: `linear-gradient(45deg, ${colour1}, ${colour2})` }}>
          <div className="buttons">
          <button class="btn-left" onClick={handleButtonLeft}>{colour1}</button>
          <button class="btn-right" onClick={handleButtonRight}>{colour2}</button>
          </div>
          <div className="copy-code" onClick={(e)=>{
            handleCopy(e)
          }}>background-image: linear-gradient(45deg,{colour1},{colour2});</div>
          </section>  
    </>
  )
}

export default App
