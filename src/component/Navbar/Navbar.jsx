import React, { useContext } from "react";
import img from "../../img/logo.png";
import {  NavLink, useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { PiNotebookBold } from "react-icons/pi";
import { RiArticleFill } from "react-icons/ri";
import { ImBlog } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import './Navbar.css'
import UsersContext from "../../context/UsersContext";

const Navbar = () => {

  let navigate = useNavigate()
  let {isLogin} = useContext(UsersContext)
  let handleLogout =()=>{
    localStorage.removeItem('particularUser')
    navigate('/login')
    window.location.reload()
  }

  return (
    <div className="nav">
      <div className="left">
        <img src={img} alt=""  />
      </div>
      <div className="right">
        <ul>
          <NavLink to={'/'}><IoHome /> Home</NavLink>
          <NavLink to={'course'}><PiNotebookBold /> Course</NavLink>
          <NavLink to={'blogs'}><ImBlog />
 Blogs</NavLink>
          <NavLink to={'articles'}><RiArticleFill />
 Articles</NavLink>
          
        </ul>
      </div>
      <div className="usersAuth">
      {/* <NavLink><FaUser /></NavLink> */}
      {isLogin? 
      <><NavLink to={'/profile'}><FaUser /></NavLink>
      <NavLink><button onClick={handleLogout}>LogOut</button></NavLink>
      </> :
      <>
      <NavLink to={'/signup'}><button >SignUp</button></NavLink>
      <NavLink to={'/login'} ><button>Login</button></NavLink></>
    }
        
      </div>
    </div>
  );
};

export default Navbar;
