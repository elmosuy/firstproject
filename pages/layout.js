import Link from "next/link";
import React,{useEffect, useRef, useState} from "react"
import { useContext } from "react";
import AppContext from "./Colorcontext";
import { motion } from "framer-motion";
const Layout = ({children}) => {

 

const handellog=()=>{
  const doc=document.getElementById('log')
  doc.classList.toggle("opc")
}
const handello=()=>{
  const doc=document.getElementById('log')
  doc.classList.toggle("opcl")
}

const bac=useContext(AppContext)    
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
     <div className="header"   style={{background:`linear-gradient(to left,${bac.con} ,#e66465 )` }}>
        <motion.h1 drag dragConstraints={{bottom:10,top:1,left:10,right:1} }>Moon</motion.h1>
          
        
      </div>
        <header> 
 

 <ul className="linknav">
         <li><Link href='/' ><a download> Home</a></Link></li>
         <li><Link href='/appCv' ><a > Workied</a></Link></li>
         <li><Link href='/store' ><a > Store</a></Link> </li>
         <li onClick={handellog } className="loginf">Login</li>
           <div className="search" dir="rtl" title="searching" >  <input type="search" placeholder="ابحث..." name="" id="" /></div>
 </ul>
      <section className='burg' onClick={navb}><p>|</p> <p>|</p><p>|</p></section>
      <nav className='navnar' id='navbar'style={{background:`linear-gradient(to left,${bac.con} ,rgba(0, 17, 255,0) )` }}  >
                        
   
             
      <ul className="navbar">
             <div dir="rtl" className="search" title="searching">  <input type="search" placeholder="بحث..." name="" id="" /></div>
         <li><Link href='/' ><a > Home</a></Link></li>
         <li><Link href='/appCv' ><a > Workied </a></Link></li>
         <li><Link href='/store' ><a > Store</a></Link> </li>
         <li><Link href='/Qustion' ><a > Qustion</a></Link> </li>
          
      </ul>
       <div className="setcolor">
       <p>set color</p>
       <input type="color"  placeholder="Set Color" onChange={e=>bac.setcon(e.target.value)} name="" id="" />
       <div onClick={handello } className="logi">Login</div>

      </div>
 
</nav></header>
<section className="list"  id="log">
  <h1>Login</h1>
  <form action="" method="get" >
    
    <input placeholder="Email / User Name"  type="text" required/>
    <input type="password" placeholder="Password" required/>
    <p dir="rtl" style={{fontSize:'13px',marginRight:'20px',color:'#086fee',cursor:'pointer'}}>هل نسيت كلمة السر؟</p>
    <button type="submit">تسجيل الدخول</button>
  </form>
</section>
    <div className="media">
     
   <a href="https://facebook.com/"> <img src="face.svg" alt="" width={30} style={{background:`linear-gradient(to left,${bac.con} ,#e66465 )` }}  /></a>
  <a href="https://www.instagram.com/">  <img src="insta.svg" alt="" width={25} style={{background:`linear-gradient(to left,${bac.con} ,#e66465 )` }}/></a>
    <a href="https://twitter.com/login"><img src="twitter.svg" alt="" width={25} style={{background:`linear-gradient(to left,${bac.con} ,#e66465 )` }} /></a>
   <a href="https://www.linkedin.com/"> <img src="link.svg" alt="" width={25} style={{background:`linear-gradient(to left,${bac.con} ,#e66465 )` }} /></a>
 <input type="color" title="Set Color" alt="set Color"  className="setcol" name="" id="" onChange={e=>bac.setcon(e.target.value)}/>
  
  
  
   {/* <p className="note">set Color</p>  */}


  </div>
  <div onClick={navre} className='style.container' >
    {children} </div> 
  
    </div>
  )
}

export default Layout