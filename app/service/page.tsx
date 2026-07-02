"use client"
import Link from "next/link";
import { useState,useEffect } from "react";
import Image from "next/image";
import prof from "../../public/prof.jpg"
import { handleAction } from "next/dist/server/app-render/action-handler";


function handleAction1(e) {
    e.preventDefault();
    alert("hello");
}
export default function service() {
    let [data ,setData]= useState([]);

    useEffect(() => {
        
        async function fetchData(){
        const res= await fetch('https://jsonplaceholder.typicode.com/posts');
        console.log(res);
        const dat= await res.json();
        console.log(dat);
        setData(dat);
        }

        fetchData();
    },[])
    return (
       <div>
         <h1> hello by service </h1>
         <div className="w-200 h-200">
         <Image src={'/prof.jpg'} width={200} height={200} alt="prof" />
         
        </div>
         <button onClick={handleAction1}>submit</button>
       </div>
    )
}