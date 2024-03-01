
import React from "react"
import { useNavigation,useParams } from "react-router-dom";
export default function Contact(){
   const a = useParams()
   console.log("🚀 ~ Contact ~ a:", a);
  return <div>contact</div>
}