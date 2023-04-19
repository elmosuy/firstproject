import React from 'react'
import Letters from './Letters'
import Header from './header'
import Head from 'next/head'
import Image from 'next/image'

const Layout = ({children}) => {
  const handelBorger = () => {
    const nav = document.getElementById("letters");
    nav.classList.toggle("show-letters");
    
  };
  return (
    <div>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Cairo+Play:wght@300&family=Kufam&family=Noto+Nastaliq+Urdu&family=Reem+Kufi&family=Reem+Kufi+Fun&display=swap" rel="stylesheet"/>         <title>
            Dream | حلم
          </title>
      <meta charset="UTF-8"/>
      <meta name="application-name" content="courses 4 arab"/>
      <meta name="author" content="Ali Hassan"/>
      <meta name="description" content="تفسير جميع الاحلام بالاحرف الابجدية"/>
      <meta name="Keywords" content="dream تفسير الاحلام"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="Permissions-Policy" content="interest-cohort=()"/>
      </Head>
      <section className="bouger-menu"  >
      <label class="burger" for="burger" >
            <input type="checkbox" className="check" id="burger" onClick={handelBorger} />
            <span ></span>
             <span></span>
              <span></span>
              </label>
      </section>
      
        <div>
            <Header/>
        </div>
        <div  dir='rtl'>
            <Letters />
      </div>
        <div className='media'>


        

      </div>

      
        {children}
    </div>
    
  )
}

export default Layout
