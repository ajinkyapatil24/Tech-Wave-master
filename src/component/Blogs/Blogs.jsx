import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Blogs.css'
import { Link, useNavigate } from 'react-router-dom'

const Blogs = () => {

  let [blogs, setBlogs] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:3000/blogs`).then(
      (d)=>{setBlogs(d.data)},
      (e)=>{console.log(e)}
    )
  },[])

  let navigate = useNavigate()
  return (
    <div className='BlogContainer'>
      <h1>Blogs</h1>
      {
        blogs.length>1 && blogs.map((d,i)=>{
          return <div className='blog-cont' key={i+1}>
            <div className='d1'>
              <h2>{d.title}</h2>
              <p>
                <h4>By:  {d.author.name} </h4>  <Link to={`/blogspost/${d.id}`}>{d.author.articlesUrl}</Link> Date: {d.publicationDate}
              </p>
            </div>
            <aside>
            <p> {d.content.introduction} </p>
            <button onClick={()=>{
              navigate(`/blogspost/${d.title}`)
            }}>Explore</button>
            </aside>

        
          </div>
        })
      }
    </div>
  )
}

export default Blogs
