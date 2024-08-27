import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import UsersContext from '../../context/UsersContext';
import { Link } from 'react-router-dom';

const Profile = () => {
  let [courses, setCourses] = useState([])


  let { loginCredential, courseData } = useContext(UsersContext);

  useEffect(()=>{
    let arr = []
    courseData.forEach((e) => {
      if (e.email === loginCredential.email) {
        arr.push(e);
      }
    });
    setCourses(arr)

  },[courseData,loginCredential.email,courses])


  return (
    <div className='profile-container'>
      <div className="profile-cont">
        <section className="user-profile">
          <div className="profile">
            <h1>Profile</h1>
            <h3>Name : {loginCredential.name} </h3>
            <h3>Email : {loginCredential.email} </h3>
            <h3>Mobile : {loginCredential.mobile}</h3>
            <h3>Date of Birth : {loginCredential.dob}</h3>
            <h3>Total Courses : {courses.length}</h3>
          </div>
        </section>
        <section className="user-course">
          <h1>Courses</h1>
          <table>
            <thead>
            <tr>
              <th>sr.no</th>
              <th>Course Name</th>
              <th>Total Fees</th>
              <th>Paid Fees</th>
              <th>Remaining Fees</th>
              <th>Payment Link</th>
            </tr>
            </thead>
            <tbody>
              {courses.length > 0 && courses.map((v,i)=>{
                return <tr key={i+1}>
                  <td>{i+1}</td>
                  <td>{v.courseName}</td>
                  <td>{v.courseFee}</td>
                  <td>0</td>
                  <td>{v.courseFee}</td>
                  <td><Link>Pay</Link></td>
                </tr>
              })}
            </tbody>
          </table>
        </section>

      </div>
    </div>
  )
}

export default Profile
