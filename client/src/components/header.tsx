import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOutSuccess } from '../redux/user/user.actions';
import './header.scss';

const Header = () => {
    const dispatch = useDispatch();
    const  currentUser = useSelector((state:any) => state.user.currentUser);
    return (
        <div >
            <nav className="header">
             <div className="left-header">
               <Link className="logo" to="/">Logo</Link>
               {
                   currentUser?
                      <Link className="header-link" to="/home">Home</Link>
                   :  null
               }
             </div>
             {
                currentUser ? <div className="right-header">
                            <div className="">
                                <Link className="header-link" to="/bookings">My Bookings</Link> 
                            </div>
                            <div className="">
                                <Link onClick={() => {
                                    dispatch(signOutSuccess())
                                }} className="header-link" to="/login">Logout</Link> 
                            </div>
                        </div>
                
                :     <div className="right-header">
                            <div className="">
                                <Link className="header-link " to="/register">Register</Link>
                            </div>
                            <div className="">
                                <Link className="header-link" to="/login">Login</Link> 
                            </div>
                        </div>
                 
             }
            </nav>
        </div>
        
    );
}
export default Header;