"use client"
import { useState } from "react";
import Link from "next/link";
export default function counter() {

    const [count ,setCount]= useState(0)    ;
    return (
        <div>
            <h1>hello by client component</h1>
            <button onClick={()=>setCount(count+1)}>click</button>
            <h1>{count}</h1>
            <Link href="/">Home</Link>
        </div>
    );
}
