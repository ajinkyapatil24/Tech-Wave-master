import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./CourseDetails.css";
import { RxTriangleRight } from "react-icons/rx";
import { VscTriangleRight } from "react-icons/vsc";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import UsersContext from "../../context/UsersContext";

const CourseDetails = () => {
  let [course, setCourse] = useState({});
  let { courseName } = useParams();
  let {isLogin} = useContext(UsersContext)
  let navigate = useNavigate() 

  useEffect(() => {
    axios.get(`http://localhost:3000/course/?courseName=${courseName}`).then(
      (d) => {
        setCourse(d.data[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const isEmpty = Object.keys(course).length === 0;

  // console.log(course)
  return (
    <div className="courseDetails-cont">
      <section className="course-Main">
        <div className="courseDetails-header">
          <h1>{course.courseName}</h1>
          <p className="course-div-links">
            <Link to={(isLogin) ? `/enroll/${course.courseName}` : `/login`}>+Enroll</Link>
            <Link to={'/course'}>Back</Link>
          </p>
        </div>
        <div className="courseOverview">
          <h3>CourseOverview</h3>
          <aside>{course.courseOverview}</aside>
        </div>
        <div className="keyBenefits">
          <h3> keyBenefits</h3>
          <aside>
            {!isEmpty &&
              course.keyBenefits.map((v, i) => {
                return (
                  <p key={i}>
                    <VscTriangleRight /> {v}
                  </p>
                );
              })}
          </aside>
        </div>
        <div className="Course-Content">
          <h3>Course Content</h3>
          <aside>
            {!isEmpty &&
              course.curriculum.map((v, i) => {
                return (
                  <div key={i + 1}>
                    <h1>
                      {i + 1}. {v.module}
                    </h1>
                    <>
                      {v.topics.map((e,i) => {
                        return (
                          <p key={i+1}>
                            <RxTriangleRight /> {e}
                          </p>
                        );
                      })}
                    </>
                  </div>
                );
              })}
          </aside>
        </div>
        <div className="Course-Details">
          <h3>Course Details</h3>
          <aside>
            <p>
            <span>Duration : </span>
            {!isEmpty && course.duration}</p>
            <p>
              <span>Format : </span>
            {!isEmpty && course.format}</p> 
            <p>
            <span>Eligibility : </span>
            {!isEmpty && course.admissionInformation.eligibilityRequirements}
            </p> 
            <p>
            <span>TotalFee : </span>
            {!isEmpty && course.admissionInformation.feesAndPayment.totalFee}
            </p>
            <p>
            <span>ClassTimings : </span>
            {!isEmpty && course.courseSchedule.classTimings}
            </p>

          
          </aside>
        </div>
        <div className="keyBenefits">
          <h3>Instructors</h3>
          <aside>
            <span>Name : </span>
            {!isEmpty && course.instructors[0].name} <br />
            <span>Experience : </span>
            {!isEmpty && course.instructors[0].bio}
          </aside>
        </div>
        <div className="keyBenefits">
          <h3>Question & Answer</h3>
          <aside>
            {!isEmpty && course.faq.map((v,i)=>{
              return(
                <section key={i+1}>
                  <p>Q{i+1}. {v.question}</p>
                  <p><RxTriangleRight /> {v.answer}</p>
                </section>
              )
            })} <br />
          </aside>
        </div>
        <div className="callToAction">
          <h3>Take A Step</h3>
          <aside>
           <p><MdEmail /> <span> Email : </span>
            {!isEmpty && course.callToAction.contactEmail}
            </p>
            <p>
            <FaPhone /> <span>Phone : </span>
            {!isEmpty && course.callToAction.contactPhone}
            </p>
            <p>
            <FaGlobe /> <span>Visit : </span>
            {!isEmpty && course.callToAction.enrollNowUrl}
            </p>
            
          </aside>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
