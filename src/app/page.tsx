"use client"
import Image from 'next/image'

export default function Home() {

  // enums 
   
  enum RType {SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN}

  interface APIResponse<T> {
  status : number,
  type : RType;
  data : T
 }
 
 
 const response : APIResponse<string> ={
  status : 200,
  type : RType.FORBIDDEN, 
  data : 'response'
 
}

console.log(response)

  return (
   <div>
    <p>First repo from tys with my repostitorydfd </p>
   </div>
  )
}
