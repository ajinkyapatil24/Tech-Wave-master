import React, { useContext, useEffect, useState } from "react";
import "./Enroll.css";
import { useNavigate, useParams } from "react-router-dom";
import UsersContext from "../../context/UsersContext";
import enrollImg from "../../img/form.avif";
import axios from "axios";

const Enroll = () => {
  let [allCourses, setAllCourses] = useState([])
  let { courseName } = useParams();
  let { loginCredential, courseData } = useContext(UsersContext);
  let navigate = useNavigate()

  let [data, setData] = useState({
    name: loginCredential.name,
    courseName: courseName,
    mobile: loginCredential.mobile,
    email: loginCredential.email,
    address: "",
    degree: "BE/BTECH",
    yop:"",
    courseFee:'',
    comment: "",
    otherdegree: "N/A",
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/course/?courseName=${courseName}`).then(
      (d) => {
        setAllCourses(d.data[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  let [flag, setFlag] = useState(false)

  let handleChange = (e) => {
    let { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  let handleSubmit = (e) => {

    let matching = courseData.find((e) => {
      if (e.email === data.email && e.courseName === data.courseName) {
        return e;
      }
    });

    // data.courseName =

    if(!matching){

      if(data.address === "") {
        setFlag(false)
      }else if(data.degree === ''){
        setFlag(false)
      }else if(data.yop === ' '){
        setFlag(false)
      }else{
        setFlag(true)
      }

      if(flag){
        data.courseFee = !isEmpty ? allCourses.admissionInformation.feesAndPayment.totalFee : '3000$';
        console.log(data);
        axios
          .post("http://localhost:3000/enroll", data)
          .then((d) => {
            console.log(d);
          })
          .catch((e) => {
            console.log(e);
          });

          navigate('/')
          // window.location.reload()
      } else {
        e.preventDefault()
        alert("filled all the nessacarry filed");
      }
    } else {
      alert("you already subscribe the course");
    }
  };
  const isEmpty = Object.keys(allCourses).length === 0;

  return (
    <div className="enroll-container">
      <div className="enroll-container-div">

        <div className="images-enroll">
          <img src={enrollImg} alt="" width={"100%"} height={"100%"} />

        </div>

        <form onSubmit={handleSubmit}>
          <h1>Enroll Now </h1>
          <div>
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              value={loginCredential.name}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="courseName">CourseName : </label>
            <input
              type="text"
              name="courseName"
              id="courseName"
              value={courseName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="courseFee">CourseFee : </label>
            {/* <h4 style={{margin:'0px',marginRight:'13rem', borderBottom:'1px solid grey'}}>  {!isEmpty && allCourses.admissionInformation.feesAndPayment.totalFee}</h4> */}
            <input type="text" name="courseFee" id="courseFee" value={!isEmpty ? allCourses.admissionInformation.feesAndPayment.totalFee : '3000$'} />
          </div>
          <div>
            <label htmlFor="mobile">Mobile : </label>
            <input
              type="text"
              name="mobile"
              value={loginCredential.mobile}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              value={loginCredential.email}
              onChange={handleChange}
            />
          </div>

          <div className="address">
            <label htmlFor="address">Address : </label>
            <input
              type="text"
              name="address"
              id="address"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="degree">Degree :</label>

            <select name="degree" id="degree" onChange={handleChange} required>
              <option disabled>Select Degree</option>
              <option defaultValue="BE/BTECH">BE/BTECH</option>
              <option value="BSC/BCA">BSC/BCA</option>
              <option value="ME/MTECH">ME/MTECH</option>
              <option value="MSC/MCA">MSC/MCA</option>
              <option value="other">other</option>
            </select>
          </div>
          <div>
            <label htmlFor="otherdegree">Enter Degree : </label>
            <input
              type="text"
              name="otherdegree"
              id="otherdegree"
              placeholder="If other"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="yop">Enter YOP : </label>
            <input
              type="text"
              name="yop"
              id="yop"
              placeholder="Year of passout"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="comment">Additional Comments or Questions:: </label>
            <textarea
              name="comment"
              id="comment"
              placeholder="comment"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Enroll;
