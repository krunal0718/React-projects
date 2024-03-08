import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
  
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

    <div className="flexed flex flex-wrap justify-center bottom-12 inset-x-1 px-3 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
        <button
          onClick={()=>setColor("red")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "red"}}>Red</button>
          <button
           onClick={()=>setColor("Green")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "green"}}>Green</button>
          <button
           onClick={()=>setColor("Orange")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "orange"}}>Orange</button>
          <button
           onClick={()=>setColor("Black")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "black"}}>Black</button>
          <button
           onClick={()=>setColor("Chocolate")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "Chocolate"}}>Chocolate</button>
          <button
           onClick={()=>setColor("DarkBlue")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "DarkBlue"}}>DarkBlue</button>
           <button
           onClick={()=>setColor("DarkSalmon")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "DarkSalmon"}}>DarkSalmon</button>
           <button
           onClick={()=>setColor("DarkSlateGray")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "DarkSlateGray"}}>DarkSlateGray</button>
           <button
           onClick={()=>setColor("Fuchsia")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "Fuchsia"}}>Fuchsia</button>
           <button
           onClick={()=>setColor("Khaki")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "Khaki"}}>Khaki</button>
           <button
           onClick={()=>setColor("Snow")}
          className="outline-none px-3 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor: "Snow"}}>Snow</button>
      </div>
    </div>

    </div>
   
        
  )
}

export default App
