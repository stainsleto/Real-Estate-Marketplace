import React, {useState} from "react";
import axios from 'axios'
import {Navigate} from 'react-router-dom'

const Login = () => {

    const [loginDetails, setLoginDetails] = useState({ username : "", password : ""})

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(loginDetails)

        axios.post("https://girei.tech/api/user/login",loginDetails)
        .then(response => {
            console.log(response)
            localStorage.setItem('token',response.data.token)
            response.data ? <Navigate to='/dashboard' replace={true} />  : console.log("Login failed ")
        })
    }

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    value={loginDetails.username}
                    onChange={ (e)=> { setLoginDetails({...loginDetails,username : e.target.value})}}
                    required
                    className="block w-full rounded-lg border-0 py-1.5 px-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={loginDetails.password}
                    onChange={(e) => {setLoginDetails({...loginDetails, password : e.target.value})} }
                    required
                    className="block w-full rounded-lg border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Forgot Password ?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Reset
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  
  export  {Login}