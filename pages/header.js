import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = ({handelTheme}) => {

  
  return (
    <div className="header" id="header">
      <div className="logo-search">
            <div>
               {/* <Image width={50} src='/vetors.png' height={40}/> */}
              <h1 className="h1">Dream</h1> 
            </div>
            
          
           
      </div>
      
      <div className="list-header">
        <ul dir="rtl">
            <Link href="/"><li>الصفحة الرئيسية</li></Link>
            <li>الامام الصادق ع</li>
            <li>ابن سيرين</li>
            <li>من نحن</li>
        </ul>
      </div>
      <div class="container">
  <input type="checkbox" class="checkbox" onClick={handelTheme} id="checkbox"/>
  <label class="switch" for="checkbox">
    <span class="slider"></span>
  </label>
  <div>
   
  </div>
</div>

    </div>
  );
};

export default Header;
