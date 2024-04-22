import React, {useState} from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const Signup = () => {
    const navigate = useNavigate()
    const [signUpDetails, setSignUpDetails] = useState({ username : "",email : "", password : ""})
    const [signUpStatus, setSignUpStatus] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(signUpDetails)

        axios.post("https://girei.tech/api/user/signup",signUpDetails)
        .then(response => {
            console.log(response)
            response.data.message ? navigate("/login")  : console.log("Signup failed ")
        })
    }

    const handleSuccess = () => {
        console.log("SignUp success")
    }

    const handleFailure = () => {
        console.log("SignUp failed")
    }

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create new account
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
                    value={signUpDetails.username}
                    onChange={ (e)=> { setSignUpDetails({...signUpDetails,username : e.target.value})}}
                    required
                    className="block w-full rounded-lg border-0 py-1.5 px-2 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="mail"
                    value={signUpDetails.email}
                    onChange={ (e)=> { setSignUpDetails({...signUpDetails,email : e.target.value})}}
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
                    value={signUpDetails.password}
                    onChange={(e) => {setSignUpDetails({...signUpDetails, password : e.target.value})} }
                    required
                    className="block w-full rounded-lg border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Signup
                </button>
              </div>
            </form>
  
          </div>
        </div>
      </>
    )
  }

export default Signup