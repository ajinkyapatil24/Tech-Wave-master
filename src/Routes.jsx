import React from 'react'
import { Route, Routes as Router } from 'react-router-dom'
import Home from './component/Home/Home'
import Blogs from './component/Blogs/Blogs';
import Articles from './component/Articles/Articles';
import Course from './component/Course/Course';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Signup from './component/Pages/Signup';
import Login from './component/Pages/Login';
import CourseDetails from './component/Course/CourseDetails';
import Enroll from './component/Enroll/Enroll';
import BlogPost from './component/Blogs/BlogPost';
import Profile from './component/Profile/Profile';

const Routes = () => {
  return (
    <Router>
      <Route path='/' element={<Home/>} />
      <Route path='/blogs' element={<Blogs/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/blogspost/:title' element={<BlogPost/>} />
      <Route path='/articles' element={<Articles/>} />
      <Route path='/course' element={<Course/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='login' element={<Login/>} />
      <Route path='course/:courseName' element={<CourseDetails/>} />
      <Route path={'enroll/:courseName'} element={<Enroll/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Router>
  )
}

export default Routes
