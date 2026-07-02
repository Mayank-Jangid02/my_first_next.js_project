"use client"
import Counter from "./counter/page"
export default async function page() {
   
    const handleclick=async()=>{
        alert("hello")
        console.log("hello")
    }
    return (
        <div>
            <h1>hello by client component</h1>
            <Counter/>
            <button onClick={handleclick}>click</button>
        </div>
    );
}