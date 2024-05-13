import React from 'react'
import './Admin.css'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { FaChartArea } from "react-icons/fa";
 import { TbComponents } from "react-icons/tb";
 import { BsLayoutSidebar } from "react-icons/bs";
 import Image from '../assets/download.png';


function Admin({openSidebarToggle, OpenSidebar}) {
  return (
   
        
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SPUR
            </div>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
               
                    <BsGrid1X2Fill className='icon'/> Dashboard
              
            </li>
            <li className='sidebar-list-item'>
               
                    <FaChartArea className='icon'/> Charts
               
            </li>
            <li className='sidebar-list-item'>
                
                    <TbComponents className='icon'/> Components
               
            </li>
            <li className='sidebar-list-item'>
                
                    <BsLayoutSidebar className='icon'/> Layouts
               
            </li>
            <li className='sidebar-list-item'>
                
                    <BsListCheck className='icon'/> About
               
            </li>
        </ul>
    </aside>
   
   
  )
}

export default Admin