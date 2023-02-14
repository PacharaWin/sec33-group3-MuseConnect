'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../ui/SideBar'
import NavBar from '../ui/NavBar'
import '../app/globals.css'
import React, { useEffect, useState } from "react";
import { Montserrat } from '@next/font/google'
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const [isActive, setActive] = useState("false");
  const handleClick = () => {
    console.log('hello world');
    setActive(!isActive);
  };

  return(
    <>
      <body>
        <div className="wrapper d-flex align-items-stretch">
			<SideBar children={isActive}/>

        {/* <!-- Page Content  --> */}
      <div id="content">
        <NavBar show={handleClick} />
        <div className="p-4 p-md-5">
        <h2 className="mb-4">Welcome to Muse Connect</h2>
        <h4 className="mb-4">Music connects us.</h4>
        </div>
      </div>

		</div>
      </body>
    </>
        
  )
}
