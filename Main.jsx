import React from 'react'
import './Main.css'
import { IoMenu } from "react-icons/io5";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaInbox } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoCall } from "react-icons/io5";

function Main() {
  return (
    <div>
    <main className='mai'>
        <div className='head'>
        <button className='btn'>
        
        <div className='int'>
        <IoMenu className='icon1' />
         <FaSearchPlus className='icon1'/>
         <p>type search</p>
       
        </div>
        </button>
        <div className='boxs'>
        <div className='box'>
          <p className='sign'>Revenue</p>
          <h1 className='num'>114</h1> 
          <div line>
          <IoMdPerson className='icon1' />
          <p className='fr'>+25 from this month</p>
          </div>
        </div>
        <div className='box1'>
        <p className='sign'>Sign  ups</p>
      <p className='num'>$25,541</p>
      <FaShoppingCart  className='icon1' />
      <p className='f'>+25 from this month</p>
            
        </div>
        <div className='box2'>
        <p className='sign'>Open Tickets</p>
        <IoCall  className='icon6' />
        <p className='fre'>5</p>
            
        </div>

        </div>
        </div>

       
  </main>
  <div class="table-2">
<div class="recent-payments">
    <div class="title">
    <IoIosNotifications className='icon3' />
        <h2>Notifications</h2>
    </div>
  </div>
  <table>
    <h6>
        <tr>
         <FaInbox className='icon2' />
         <td>New comment</td>
            <td>21 days ago</td>
          
            <td><a href="#" class="btn">View</a></td>
        </tr>
        <hr />

        <tr>
        <FaInbox className='icon2' />
            <td>New comment</td>
           <td>21 days ago</td>
            <td><a href="#" class="btn">View</a></td>
        </tr>
        <hr />
        <tr>
        <FaInbox className='icon2' />
            <td>New comment</td>
            <td>21 days ago</td>

            <td><a href="#" class="btn">View</a></td>
        </tr>
        <hr />
        <tr>
        <FaInbox className='icon2' />
            <td>New comment</td>
            <td>21 days ago</td>
            <td><a href="#" class="btn">View</a></td>
        </tr>
        <hr />
        <tr className='sh'>Show all</tr>
        </h6>
        </table>
  </div>
  <img src={Image} />
  </div>
 )
 }
export default  Main
