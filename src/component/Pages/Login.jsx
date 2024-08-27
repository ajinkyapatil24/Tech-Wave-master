import React, { useContext, useState } from "react";
import "./Login.css";
import image from "../../img/login1.svg";
import { Link, useNavigate } from "react-router-dom";
import UsersContext from "../../context/UsersContext";

const Login = () => {
  let { userData, setIsLogin, setLoginCredential } = useContext(UsersContext);

  let [login, setLogin] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  let handleChange = (e) => {
    let { value, name } = e.target;
    setLogin({ ...login, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    let matching = userData.find((e) => {
      if (e.email === login.email && e.password === login.password) {
        return e;
      }
    });
    //  setLoginCredential(matching)
    //  setIsLogin(true)

    if (login.email === "" && login.password === "") {
      e.preventDefault();
      // espan.innerHTML = 'pagal type the user email'
      // pspan.innerHTML = 'pagal type the password'
    } else if (login.email === "") {
      // espan.innerHTML = 'pagal type the user email'

      e.preventDefault();
    } else if (login.password === "") {
      // pspan.innerHTML = 'pagal type the user password'
      e.preventDefault();
    } else if (matching) {
      // alert('boss welcome to the page')
      localStorage.setItem("particularUser", JSON.stringify(matching));
      navigate("/");
      window.location.reload();
    } else {
      // bspan.innerHTML = ' password is not matching'
      alert("Invalid Creadentails");
      e.preventDefault();
    }
  };

  return (
    <div className="container-login">
      <div className="signup">
        <div className="image">
          <img src={image} alt="img" width={"400px"} height={"400px"} />
        </div>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </div>

          <button type="submit">Login</button>
          <Link to={"/signup"} style={{ color: "#f7f7f7eb" }}>
            Create a new Account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
