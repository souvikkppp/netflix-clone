import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Nav from './Nav';
import "./ProfileScreen.css";
import { auth } from '../firebase';

export default function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
      <Nav/>
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
         <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg" alt="" />
         <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
             <h3>Plans</h3>
              <div className="planScreen_plan">
                <div className="planScreen_info">
                  <h5>Premium</h5>
                  <h6>4k + HDR</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="planScreen_plan">
                <div className="planScreen_info">
                  <h5>Basic</h5>
                  <h6>720p</h6>
                </div>
                <button>Subscribe</button>
              </div>
              <div className="planScreen_plan">
                <div className="planScreen_info">
                  <h5>Standard</h5>
                  <h6>1080p</h6>
                </div>
                <button>Subscribe</button>
              </div>
                <button onClick={() => auth.signOut()}
                 className="profileScreen_signOut">Sign Out</button>
            </div>
         </div>
        </div>
      </div>
    </div>
  )
}
