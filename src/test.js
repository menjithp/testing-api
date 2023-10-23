import axios from 'axios'
import { useEffect, useState } from 'react'
import {p} from './data'

export default function App(){

    const [state,setstate]=useState(null)
    const [news,setnew]=useState(null)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setstate(json))


      axios.get("https://jsonplaceholder.typicode.com/todos/1").then(response=>setnew(response.data))


    },[])
console.log("dola",state)
    return <div>
<p>{state?.title}</p>
<p>
    {news?.title}
</p>
{p()}
    </div>




}