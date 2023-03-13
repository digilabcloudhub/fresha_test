import React from 'react'
import { useState } from 'react';

import './users.css';

const UsersList = () => {
   const [user,setUser]=useState([]);
   const [open,setOpen]=useState(false);
   const [sideContent,setSideContent]=useState([]);
   const [isActive, setIsActive] = useState(null);

      const selectUser =(e)=>{
        console.log('in change');
        fetchData();
       
      }

      const fetchData = async() => {

        const response = await fetch("https://randomuser.me/api/?results=10");
        const json = await response.json();
        console.log(json);
       setUser(json.results);


        
      }
    
      
      const show =(e)=>{
        
        const id=e;
        setIsActive(id);
        
        
        if(open=== false)
        setOpen(!open)

        const filtered=user.filter(item => item.id.value === id );

     
      setSideContent(filtered)
      }
      
  return (

       <div className={`users_info ${open ? "open" : ""}`}>
        
    
<div className='main'>
<h1>User List</h1>
      <div className='userinfo'>
            <span> If you want to get contact information to 
                specific users, select a group and then select 
                them from the list below</span>
                
        </div>
        <div className='userList'>
            <span>Select group of users</span>
            <span className='userDev'>
            <select  onChange={selectUser} className='dropdown-item'>
                <option value='0'>Select</option>
                <option value='1'>Developer</option>
            </select>
            </span>
            </div>
            <div className='user_det'>  
            {
          user.map((user)=>
          <div className={`user_det_block ${isActive===user.id.value ? 'active' : ''}`} >
            <div className='item' key ={user.id.value} onClick={()=>show(user.id.value)}>
            <div className='flex-head'><span>FL</span></div>
            <div className='flex-item'>{user.name.first}{user.name.last}<br/>Developer</div>
          </div>
          </div>
           
         
          
          )
          
        } 
        
      
</div>
    </div>
    
    <div className='side_panel'>
        {sideContent.map(item=>
        <div className='side_panel_sec'><div className='side_panel_top'>
          <div className='initial'><span>FL</span></div>
          <div className='side_panel_name'>{item.name.first}  {item.name.last}</div>
          
        <div className='side_panel_desig'>Developer</div>
        </div>
          <div className='side_panel_details'>
            <div className="city_details">
              <div className='city'>City</div>
              <div className='city_name'>{item.location.city}</div>
              </div>
            <div className='cell_details'>
            <div className='cell'>Cell</div>
              <div className='cell_name'> {item.cell}</div>
              </div>

              <div className='email_details'>
            <div className='email'>Email</div>
              <div className='email_name'> {item.email}</div>
              </div>
            
          </div></div>
          )}
        </div>
  </div>  
  )
}

export default UsersList