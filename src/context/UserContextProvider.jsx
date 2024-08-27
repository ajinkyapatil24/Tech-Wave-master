import React, { useEffect, useState } from 'react'
import UsersContext from './UsersContext';
import axios from 'axios';

const UserContextProvider = ({children}) => {

  let [userData, setUserData] = useState([]);
  let [courseData, setCourseData] = useState([])
  let [isLogin, setIsLogin] = useState(false)
  let [loginCredential, setLoginCredential] = useState({})


  let particularUser = JSON.parse(localStorage.getItem('particularUser'))
 


  useEffect(()=>{
    if(particularUser){
       setLoginCredential(particularUser)
        setIsLogin(true)
  }else{
    setLoginCredential({})
    setIsLogin(false)
    
  }
  },[])

  useEffect(() => {
    axios.get("http://localhost:3000/users").then(
      (d) => {
        setUserData(d.data);
      },
      (e) => {
        console.log(e);
      }
    );
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3000/enroll").then(
      (d) => {
        setCourseData(d.data);
      },
      (e) => {
        console.log(e);
      }
    );
  }, []);

  return (
    <UsersContext.Provider value={{userData,setUserData,isLogin,setLoginCredential,loginCredential,setIsLogin,courseData}} >
      {children}
    </UsersContext.Provider>
  )
}

export default UserContextProvider
