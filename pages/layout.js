import Link from "next/link";
import React,{useEffect, useRef, useState} from "react"
const Layout = ({children}) => {

 

const handellog=()=>{
  const doc=document.getElementById('log')
  doc.classList.toggle("opc")
}
const handello=()=>{
  const doc=document.getElementById('log')
  doc.classList.toggle("opcl")
}

  const [color,setcolor]=useState()
  
function navre(){  
  const doc=document.getElementById('log')

        const nav=document.getElementById("navbar")
       doc.classList.remove("opc")
        nav.classList.remove("toglle")

        //remove
        const docm=document.getElementById('log')
        docm.classList.remove("opcl")

     }
      function navb(){  
        const nav=document.getElementById("navbar")
         nav.classList.toggle("toglle")
     }

  return (
    <div >
     <div>
   <ul className="linknav">
         <li><Link href='/' ><a download> Home</a></Link></li>
         <li><Link href='/pro' ><a > Workied</a></Link></li>
         <li><Link href='/store' ><a > Store</a></Link> </li>
         <li  className="loginf">Login</li>
           <div className="search" dir="rtl" title="searching" >
            <input type="search" placeholder="ابحث..." name="" id="" />
          </div>
 </ul>
   </div>
    {children} 
  
    </div>
  )
}

export default Layout
