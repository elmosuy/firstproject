import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-search">
            <div>
               {/* <Image width={50} src='/vetors.png' height={40}/> */}
              <h1>Dream</h1> 
            </div>
            
          
           
      </div>
      
      <div className="list-header">
        <ul dir="rtl">
            <li>الصفحة الرئيسية</li>
            <li>الامام الصادق ع</li>
            <li>ابن سيرين</li>
            <li>من نحن</li>
        </ul>
      </div>
      <div class="container">
  <input type="checkbox" class="checkbox" id="checkbox"/>
  <label class="switch" for="checkbox">
    <span class="slider"></span>
  </label>
</div>

    </div>
  );
};

export default Header;
