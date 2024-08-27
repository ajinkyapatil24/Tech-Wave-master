
import React, { useContext, useEffect, useState } from "react";
import "./Course.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UsersContext from "../../context/UsersContext";

const Course = () => {
  const [courseNames, setCourseName] = useState("");
  const [course, setCourse] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const { isLogin } = useContext(UsersContext);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/course`).then(
      (response) => {
        setCourse(response.data);
        setFilteredCourses(response.data);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const handleChange = (e) => {
    setCourseName(e.target.value.toLowerCase());
  };

  const handleClick = () => {
    const filtered = course.filter((v) => v.courseName.toLowerCase().includes(courseNames));
    setFilteredCourses(filtered);
  };

  return (
    <div className="course-container">
      <main>
        <h1>Courses</h1>
        <p>Empower your future with the skills to build the digital world.</p>
        <section className="searchBar">
          <h3>Search Courses</h3>
          <p>
            <input
              type="text"
              name="courseName"
              id="courseName"
              onChange={handleChange}
              placeholder="Search Course"
            />
            <button type="button" onClick={handleClick}>
              Search
            </button>
          </p>
        </section>
        <section className="show-course">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((v, i) => (
              <div key={i} className="card">
                <h2>{v.courseName}</h2>
                <p>{v.courseOverview}</p>
                <div className="cardButton">
                  <button onClick={() => navigate(`/course/${v.courseName}`)}>
                    Details
                  </button>
                  <button onClick={() => isLogin ? navigate(`/enroll/${v.courseName}`) : navigate(`/login`)}>
                    +Enroll
                  </button>
                  <button>Batches</button>
                </div>
              </div>
            ))
          ) : (
            <p>Course Not Found</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Course;
