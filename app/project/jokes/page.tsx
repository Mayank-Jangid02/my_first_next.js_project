'use client'
import {useState,useEffect} from 'react'
export default function randomjokes() {
    const [jokes,setjokes]=useState<any>({});
    const fetchrandomjokes=async()=>{
        let url='https://official-joke-api.appspot.com/random_joke';
        const res =await fetch(url);
        const data=await res.json();
        setjokes(data);
        console.log(data);
    }
useEffect(() => {
    fetchrandomjokes();
},[])
  return (
    <div>page           
                <h1>{jokes.setup}</h1>
                <p>{jokes.punchline}</p>
    </div>
  )
}
