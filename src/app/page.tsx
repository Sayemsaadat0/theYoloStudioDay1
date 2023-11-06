"use client"
import Image from 'next/image'

export default function Home() {
let fruits: any = ['applee', 'banana', 'mango']

fruits.push(35)
console.log(fruits)





type stringOrNumber = string | number 

const aNumber : stringOrNumber = '54522'


console.log(aNumber)


interface circleOptions {
  width : number;
  height : number; 
}


function drawCircle (options :circleOptions){
  let width = options.width; 
  let height = options.height
}

let optionsOfdrawCircle = {
width : 50,
height : 50
}


console.log(optionsOfdrawCircle)

// declae interface 
interface optionofsquire {
  left : number;
  right :number;
  up : number;
  down : number;
}

// create the function 
function drawSquire(options:optionofsquire){
  left : options.left ;
  right : options.right ;
  up : options.up ;
  down : options.down ;
}


// assign the value 
 let valueOfSquire = {
  left : 40 ,
  right : 50 ,
  up : 50 ,
  down : 50 
 }

// call the function 
 console.log(valueOfSquire)
 drawSquire(valueOfSquire)


  return (
   <div>
    <p>First repo from tys with my repostitory </p>
   </div>
  )
}
