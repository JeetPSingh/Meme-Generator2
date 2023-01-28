import React from 'react'
import './loginpage.css';
import { Formik } from 'formik';
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const Loginpage = () => {

  const navigate = useNavigate();

  const loginSubmit = async (formdata, { resetForm, setSubmitting }) => {
    console.log(formdata)
    resetForm()
    setSubmitting(true)

    const res = await fetch('http://localhost:5500/user/authenticate', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'success',
        text: 'Login Successfull'
      })
      navigate("/home");
    } else if (res.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Email or Password is incorrect'
      })
    }

    setTimeout(() => {
      setSubmitting(false)
    }, 2000)
  }


  const userSubmit = async (formdata) => {
    console.log(formdata);
    //make a request to backend for saving data

    //1. url
    //2. method
    //3. data
    //4. data format

    const res = await fetch('http://localhost:5500/user/add', {
        method: 'POST',
        body : JSON.stringify(formdata),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    console.log(res.status);

    //alert for signup success
    if(res.status === 200){
        Swal.fire({
            icon: 'success',
            title:'success',
            text:'signed succssfully',

        })
        navigate('/login');
    }
}


  return (
    <div><>


      <div className="container">
        <div className="login-container">
          <input
            id="item-1"
            type="radio"
            name="item"
            className="sign-in"
            defaultChecked=""
          />
          <label htmlFor="item-1" className="item">
            Sign In
          </label>
          <input id="item-2" type="radio" name="item" className="sign-up" />
          <label htmlFor="item-2" className="item">
            Sign Up
          </label>
          <div className="login-form">

            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={loginSubmit}>
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <div className="sign-in-htm">
                    <div className="group">
                      <input
                        placeholder="Username"
                        value={values.email} name="email" onChange={handleChange}
                        type="text"
                        className="input"
                      />
                    </div>
                    <div className="group">
                      <input
                        placeholder="Password"
                        value={values.password} name="password" onChange={handleChange}
                        type="password"
                        className="input"
                        data-type="password"
                      />
                    </div>
                    <div className="group">
                      <input type="submit" className="button" defaultValue="Sign In" />
                    </div>
                    <div className="hr" />
                    <div className="footer">
                      <a href="#forgot">Forgot Password?</a>
                    </div>
                  </div>
                </form>
              )}
            </Formik>

            <Formik
              initialValues={{ username: "", password: "", email: "" }}
              onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange, isSubmitting }) => (
                <form onSubmit={handleSubmit}>

                  <div className="sign-up-htm">
                    <div className="group">
                      <input
                        placeholder="Username"
                        value={values.username} name="username" onChange={handleChange}
                        type="text"
                        className="input"
                      />
                    </div>
                    <div className="group">
                      <input
                        placeholder="Email adress"
                        value={values.username} name="username" onChange={handleChange}
                        type="text"
                        className="input"
                      />
                    </div>
                    <div className="group">
                      <input
                        placeholder="Password"
                        value={values.username} name="username" onChange={handleChange}
                        type="password"
                        className="input"
                        data-type="password"
                      />
                    </div>
                    <div className="group">
                      <input
                        placeholder="Repeat password"
                        value={values.username} name="username" onChange={handleChange}
                        type="password"
                        className="input"
                        data-type="password"
                      />
                    </div>
                    <div className="group">
                      <input type="submit" className="button" defaultValue="Sign Up" />
                    </div>
                    <div className="hr" />
                    <div className="footer">
                      <label htmlFor="item-1">Already have an account?</label>
                    </div>
                  </div>
                </form>
              )}
            </Formik>







          </div>
        </div>
      </div>

    </>
    </div >
  )
}

export default Loginpage