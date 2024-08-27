import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate, Link } from 'react-router-dom'
import './BlogPost.css'
import { RxTriangleRight } from "react-icons/rx";
import { IoArrowBack } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import commentImg from '../../img/web-dev.jpeg'

const BlogPost = () => {
    let [blogs, setBlogs] = useState([])
    let {title} = useParams()
    let navigate =  useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:3000/blogs/?title=${title}`).then(
      (d)=>{setBlogs(d.data)},
      (e)=>{console.log(e)}
    )
  },[title])

  let handleClick = (title)=>{
      navigate(`/blogspost/${title}`)
      // window.location.reload()
  }

  // const isEmpty = blogs.length === 0;
    
  return (
    <div className='BlogPost-Container'>
      <div className="btn-home-back">
      <button onClick={()=>{
          navigate(-1)
        }}><IoArrowBack /></button>
      <button onClick={()=>{
          navigate('/')
        }}><MdHome /></button>
      </div>
      
      {blogs.length > 0 &&  
      <div className="blogPost-cont">
        <h1>{blogs[0].title}</h1>
        <div className='main-blogs-cont'>
            <main>
                <div className='blog-introduction'>
                <h2>Introduction</h2>
                <p>{blogs[0].content.introduction}</p>
                </div>
                <section>
                    {blogs[0].content.sections.map((v,i)=>{
                        return <div className='content-div' key={i+1}>
                            <h3>{v.heading}</h3>
                            <p>{v.description}</p>
                            <div>
                                {v.keySkills.map((d,e)=>{
                                    return <p key={e+1}> <RxTriangleRight /> {d}</p>
                                })}
                            </div>


                        </div>
                    })}
                </section>

                <div className="footer-blogpost">
                    <h4>Conclusion : </h4>
                    <p>{blogs[0].content.Conclusion.description}</p>
                </div>
                <div className="share-blogs-btn">
                  <Link to={`${blogs[0].shareButtons.facebook}`}><button>FaceBook</button></Link>
                  <Link to={`${blogs[0].shareButtons.twitter}`}><button>Twitter</button></Link>
                  <Link to={`${blogs[0].shareButtons.linkedin}`}><button>Linkdin</button></Link>
                </div>
            </main>
            <aside>
               <h4>Author Name :</h4><p>{blogs[0].author.name}</p>
              <h4>Author Info : </h4> <p> {blogs[0].author.bio}</p>
            <h4>PublicationDate : </h4>  <p> {blogs[0].publicationDate} </p>
            <hr />
            <h4>CategoryTags : </h4>
            {blogs[0].categoryTags.map((d,v)=>{
              return <p key={v+1}><RxTriangleRight />   {d} </p>
            })}


            <br /><br /><br /><br />
            <hr />
            <h4>RelatedPosts:</h4>
            <div className="related-post-cont">
            {blogs[0].relatedPosts.map((d,v)=>{
              return <p onClick={()=>{
                handleClick(d.title)
              }} key={v+1}><FaHandPointRight />   <span> {d.title} </span></p>
            })}
            </div>

            </aside>
        </div>

        <div className="blogPost-comment-section">
        <div className="blogPost-comment">
          <h3>Comment : </h3>
          {blogs[0].commentsSection.comments.map((v,i)=>{
            return <section key={i+1}>
              <p>{v.comment}</p>
              <p className='comment-p2'>- {v.name}    {v.date}</p>
            </section>
          })}
        </div>
          <div className="img-marketing">
            <img src={commentImg} alt="" />

          </div>

        </div>
      </div>
      }
    </div>
  )
}

export default BlogPost
