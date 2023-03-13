import React from 'react'
import './sidebar.css';
import home from '../images/home.png'
import blog from '../images/blog.png'
import community from '../images/community.png'
import contest from '../images/contest.png'
import about from '../images/about.png'
import contact from '../images/contact.png'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className='sidebar_content'>
        <div className='profileDetails'>
          <div className='profileImage'>
              <span>NT</span>
          </div>
          <span className='userName'>Nicola Turco</span>
          <span className="userDesig">Developer</span>
        </div>

        <div className="menu-item">
        <nav>
          <ul>
            <li><img src={home} alt="Home"/><span>Home</span></li>
            <li className="gray"><img src={blog} alt="Blog"/><span >Blog</span></li>
            <li><img src={community} alt="community"/><span>Community</span></li>
            <li><img src={contest} alt="contest"/><span>Contest</span></li>
            <li><img src={about} alt="about"/><span>About</span></li>
            <li><img src={contact} alt="contact"/><span>Contact</span></li>
          </ul>
        </nav>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar