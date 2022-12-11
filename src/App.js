import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {

const [myData,setMyData]=useState([])  

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=> setMyData(res))
  
}, [])

 
  return (
    <>
    <h1>Axious</h1>
    {myData&&myData.map((posts)=>{
    const { id,title,body}= posts;
     return(
     <div className="card" key={id}>
      <h2>{title}</h2>
     <p>{body}</p>
     </div>
     )
    })
}
</>
  );
}

export default App;
