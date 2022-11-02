import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const[img, setImg] = useState("")
  const[appeared, setAppeared] =useState(false)
  useEffect(()=>{
    const promisse = axios.get("https://dog.ceo/api/breeds/image/random")
    promisse.then((resp)=>{
      setImg(resp.data.message)
      setAppeared(true) 
    })
    promisse.catch((resp)=>{
      setImg(resp.data.message)
      setAppeared(true) 
    })

  },[])

return (
  <div className="view">
    <div className="image">
      {!appeared ? "Carregando imagem...": <img src={img} alt="imagem cachorrinho"/>}
      
    </div>
  </div>
);
}

export default App;
