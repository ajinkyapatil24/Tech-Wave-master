import React, { useContext, useEffect, useState } from "react";
import signupImg from "../../img/login.svg";
import "./Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UsersContext from "../../context/UsersContext";

const Signup = () => {
  // let [userData, setUserData] = useState([]);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob:'',
    role:'user',
    mobile: "",
  });

  let {userData,setUserData} = useContext(UsersContext)

  let navigate = useNavigate();

  // useEffect(() => {
  //   axios.get("http://localhost:3000/users").then(
  //     (d) => {
  //       setUserData(d.data);
  //     },
  //     (e) => {
  //       console.log(e);
  //     }
  //   );
  // }, []);
  let handleChange = (e) => {
    let { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = (e) => {
    let matching = userData.find((b) => {
      if (b.email === formData.email) {
        return b;
      }
    });

    if (!matching) {
      let regx = /^[a-zA-Z ]{2,30}$/; //  [] here allowed to user ..... { minlength,max,length} here length
      let regx1 = /^[6-9][0-9]{9}$/; //regular expression
      let regx2 = /^[a-zA-Z0-9]{8,15}$/;
      let flag = true;

      let nameError = document.getElementById('nameError')
      let mobileError = document.getElementById('mobileError')
      let emailError = document.getElementById('emailError')
      let passError = document.getElementById('passError')

      if (formData.name === "") {
        nameError.innerHTML = '</br>name is required'
        e.preventDefault();
        flag = false;
      } else if (regx.test(formData.name)) {
        nameError.innerHTML = ''
      } else {
        nameError.innerHTML = ' <br>invalid name';
        e.preventDefault();
        flag = false;
      }

      if (formData.email === "") {
        emailError.innerHTML = '</br>email required'
        e.preventDefault();
        flag = false;
      } else {
        emailError.innerHTML = ''
      }

      if (formData.mobile === "") {
        mobileError.innerHTML = ' <br>invalid mobile number'
        e.preventDefault();
        flag = false;
      } else if (regx1.test(formData.mobile)) {
        mobileError.innerHTML = ''
      } else {
        mobileError.innerHTML = ' <br>invalid mobile number';
        e.preventDefault();
        flag = false;
      }

      if (formData.password === "") {
        passError.innerHTML = '<br>password is required'
        e.preventDefault();
        flag = false;
      } else if (regx2.test(formData.password)) {
        passError.innerHTML = ""
      } else {
        passError.innerHTML = ' <br>invalid password'
        e.preventDefault();
        flag = false;
      }


      if (flag) {
        axios.post("http://localhost:3000/users", formData).then(
          (d) => {
            console.log(d);
          },
          (e) => {
            console.log(e);
          }
        );
       
        navigate("/login");
        window.location.reload()
      }
    } else {
      alert("email already  register");
      e.preventDefault();
    }
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <div className="image">
          <img src={signupImg} alt="img" width={"400px"} height={"400px"} />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="d1">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name"
              onChange={handleChange}
            />
          </div>
            <p id="nameError"></p>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
              onChange={handleChange}
            />
          </div>
          <p id="emailError"></p>
          <div>
            <label htmlFor="dob">Birth Date : </label>
            <input
              type="date"
              name="dob"
              id='dob'
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile : </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Enter Mobile Number"
              onChange={handleChange}
            />
          </div>
          <p id="mobileError"></p>
          <div>
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>
          <p id="passError"></p>

          <button type="submit">Create Account</button>
        <Link to={'/login'} style={{ color: "#f7f7f7eb" }}>Already Have a Account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
