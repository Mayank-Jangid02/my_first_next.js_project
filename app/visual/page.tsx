import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {cache} from "react"
const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "Start" },
  },
  {
    id: "2",
    position: { x: 300, y: 100 },
    data: { label: "End" },
  },
  {
    id: "3",
    position: { x: 300, y: 100 },
    data: { label: "middle" },
  }
];


const getdata=cache(async()=>{ 
  let res= await fetch('https://jsonplaceholder.typicode.com/posts');
  console.log(res);

});

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e2-1",
    source: "2",
    target: "1",
  }
  ,{
    id: "e3-1",
    source: "3",
    target: "1",
  }
];

 