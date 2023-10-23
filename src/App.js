import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';

function App() {


  const [state,setstate]=useState({hamburger:window.innerWidth<520 ?true:false,menuverticalvisible:false})


  useEffect(()=>{

    const callback=(e)=>{
      if(window.innerWidth<520 && !state.hamburger){
        setstate(prev=>({...prev,hamburger:true}))
      }else if(window.innerWidth>=520 && !state.hamburger){
        setstate(prev=>({...prev,hamburger:false,menuverticalvisible:false}))
      }
    }

    window.addEventListener('resize',callback)

    return ()=>{
      window.removeEventListener('resize',callback)
    }

  },[])

  return (
    <div className="App">
      
      <header>
    
        <nav>
          <span onClick ={()=>setstate(prev=>({...prev,menuverticalvisible:!state.menuverticalvisible}))} className={`cursor-pointer d-none ${state.hamburger && "d-inline-block"}`}>&equiv;</span>
          <ul className={state.hamburger ?( !state.menuverticalvisible ? "d-none":"d-flex flex-column"):""}>
            <li>
              Home
            </li>
            <li>
              About
            </li>
            <li>
              Products
            </li>
            <li>
              Services
            </li>
            <li>
              Contact
            </li>
            </ul>

        </nav>
      </header>


      
    </div>
  );
}

export default App;
