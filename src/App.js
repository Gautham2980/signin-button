import logo from './logo.svg';
import './App.css';
import Array from './Function';
import React,{useState} from 'react'
function App() {
 

  const employee=[

    {
    name:"Alex",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ]
    
    },

    {name:"Anna",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
    
    }


    
    
    ]

    let[count,setCount]=useState("Red")
    const textChange=()=>{
      setCount("Blue")
    }


    const[btn,setBtn]=useState(true)
    const[para,setPara]=useState(true)

    const signIn=()=>{
      setBtn(false)
      setPara(false)
    }

    const signOut=()=>{
      setBtn(true)
      setPara(true)
    }





  return (
    <div className="App">
      <p>value:{count}</p>
      <button onClick={textChange}>Click</button>
      <Array details={employee}/>
      
      {btn?(<button onClick={signIn}>sign in</button>):(<button onClick={signOut}>sign out</button>)}
      {para?( <p>please sign in </p>):( <p>welcome back,good to see you in here</p>)}
      
     
     
      
      

     
      

      
      
     
    </div>
  );
}

export default App;
