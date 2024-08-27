import React, { useContext } from "react";
import poster from "../../img/homePosters.jpg";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { VscTriangleRight } from "react-icons/vsc";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

import "./Home.css";
import { useNavigate } from "react-router-dom";
import UsersContext from "../../context/UsersContext";

const Home = () => {
  let navigate = useNavigate();
  let { isLogin } = useContext(UsersContext);

  return (
    <div className="container">
      <div className="poster">
        <img src={poster} alt="" />
      </div>
      <section className="details">
        <div className="information-div">
          <h3>
            <FaLaptopCode />
            LEADING PROVIDER OF TECH EDUCATION
            <FaLaptopCode />
          </h3>
          <p>
            At TechWave Institute, we empower future tech leaders with
            industry-relevant education and hands-on learning. Our expert
            instructors and state-of-the-art facilities provide the skills
            needed to excel in the fast-paced world of technology. Join us and
            ride the wave of innovation!
          </p>
          <p>
            {" "}
            Start your journey with TechWave today and transform your potential
            into success
          </p>
          <p>
            "Embrace the future of tech with TechWave's immersive learning
            experience. Let us be your launchpad to a rewarding career in the
            digital age!"
          </p>
        </div>
        <div className="placement-status">
          <h3>
            <IoIosPeople />
            PLACEMENT STATISTICS
            <IoIosPeople />
          </h3>

          <p>
            <VscTriangleRight />{" "}
            <span>
              <FaArrowUpWideShort /> 94860
            </span>{" "}
            Placed Students who have throughout 60% aggregate
          </p>

          <p>
            <VscTriangleRight />{" "}
            <span>
              <FaArrowUpWideShort /> 42992
            </span>{" "}
            Placed Students who have graduated in Non-IT
          </p>

          <p>
            <VscTriangleRight />{" "}
            <span>
              <FaArrowUpWideShort /> 68481
            </span>{" "}
            Placed Students who have graduated in IT/CS/IS
          </p>
          <p>
            <VscTriangleRight />
            <span>
              <FaArrowUpWideShort /> 15024{" "}
            </span>
            Placed Students who have less than 60% aggregate in Degree
          </p>
        </div>
        <div className="career-div">
          <h3>
            <PiStudentFill />
            CAREER SUCCESS AT TECHWAVE
            <PiStudentFill />
          </h3>

          <p className="p1">
            Over 95% of our graduates secure jobs within six months of
            completing their courses. Our alumni have excelled in both IT and
            non-IT roles, finding positions at top companies such as Google,
            Microsoft, Amazon, and more. Whether you're looking to break into
            the tech industry or enhance your current career, TechWave provides
            the skills and support needed to achieve your professional goals.
            Join the ranks of our successful graduates and take your career to
            the next level.
          </p>
          <p>
            <button
              onClick={() => {
                navigate("/course");
              }}>
              <IoPersonAddSharp /> Enroll
            </button>
            <button>Enquiry</button>
          </p>
        </div>
      </section>

      <section className="home-course">
        <div className="home-course-div">
        <h2>Courses</h2>
        <p>
          We have the most complete range of software training courses needed by
          the professionals around the world.Please do contact us for any
          queries related to the courses.
        </p>
        <h4>Here are some of the popular courses we offer.</h4>
        <div>
          <button
            onClick={() => {
              isLogin
                ? navigate("enroll/Java Full Stack Development")
                : navigate(`/login`);
            }}
            className="btn h-course"
          >
           Java Full Stack
          </button>
          <button
            onClick={() => {
              isLogin
                ? navigate("enroll/Software Testing")
                : navigate(`/login`);
            }}
            className="btn h-course"
          >
            Software Testing
          </button>
          <button
            onClick={() => {
              isLogin
                ? navigate("enroll/MERN Stack Development")
                : navigate(`/login`);
            }}
            className="btn h-course"
          >
            MERN or MEAN
          </button>
          <button
            onClick={() => {
              isLogin
                ? navigate("enroll/Python Full Stack Development")
                : navigate(`/login`);
            }}
            className="btn h-course"
          >
            Python Full Stack
          </button>
        </div>
        </div>
      </section>

      <section id="upcoming-events" className="upcoming-events-section">
        <div className="events-container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Upcoming Events</h2>
              <hr className="divider" />
            </div>
          </div>
          <div className="upcoming-events-container">
            {/* <div className="col-lg-4"> */}
            <div className="event">
              <h3 className="event-title">Data Science and ML Workshop</h3>
              <p className="event-date">
                <MdDateRange /> Date: June 25, 2024
              </p>
              <p className="event-time">
                <MdAccessTimeFilled /> Time: 10:00 AM - 12:00 PM
              </p>
              <p className="event-description">
                Join us for a hands-on workshop on data science fundamentals.
                Learn essential techniques and tools for analyzing and
                visualizing data.
              </p>
              <button
                onClick={() => {
                  isLogin
                    ? navigate("enroll/Data Science and ML")
                    : navigate(`/login`);
                }}
                className="btn btn-primary"
              >
                Register Now
              </button>
            </div>
            {/* </div> */}

            {/* <div className="col-lg-4"> */}
            <div className="event">
              <h3 className="event-title"> Web Development Bootcamp</h3>
              <p className="event-date">
                <MdDateRange /> Date: July 10, 2024
              </p>
              <p className="event-time">
                <MdAccessTimeFilled /> Time: 9:00 AM - 5:00 PM
              </p>
              <p className="event-description">
                Join our intensive web development bootcamp and kickstart your
                career in tech. Gain hands-on experience with HTML, CSS, and
                JavaScript.
              </p>
              <button
                onClick={() => {
                  isLogin
                    ? navigate("enroll/Web Development")
                    : navigate(`/login`);
                }}
                className="btn btn-primary"
              >
                Register Now
              </button>
              {/* </div> */}
            </div>

            {/* <div className="col-lg-4"> */}
            <div className="event">
              <h3 className="event-title">MERN Stack Bootcamp</h3>
              <p className="event-date">
                {" "}
                <MdDateRange /> Date: July 20, 2024
              </p>
              <p className="event-time">
                <MdAccessTimeFilled /> Time: 2:00 PM - 4:00 PM
              </p>
              <p className="event-description">
                Jonn Us to understanding of the MERN stack, a popular JavaScript
                stack for building modern web applications.
              </p>
              <button
                onClick={() => {
                  isLogin
                    ? navigate("enroll/MERN Stack Development")
                    : navigate(`/login`);
                }}
                className="btn btn-primary"
              >
                Register Now
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
