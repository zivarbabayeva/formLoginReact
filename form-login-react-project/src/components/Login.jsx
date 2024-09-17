import React, { useState } from 'react'


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");


  const LoginForm = () => {
    return (
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <h2 className='p-3 text-3xl font-bold text-black-400'>Login Form</h2>
        <div className=' flex flex-col items-center justify-center mt-2  m-0 md:w-full items-center'>
          <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
            Login
          </button>
          <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
            Signup
          </button>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email address'></input>
          <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1  focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
          <p className='text-blue-400 cursor-pointer pl-0'>Forgot password?</p>
          <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 md:w-full shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
            Login
          </button>
        </div>
        <div className='d-flex mb-4 text-sm font-medium cursor-pointer text-align-left '>
          <p className='text-black-400 ' onClick={() => setIsLogin(false)}>Create an account?</p>
          <p className='text-blue-400' onClick={() => setIsLogin(false)}>Signup now</p>
        </div>

      </div>
    )
  }
  const SignUpForm = () => {
    return (
      <div className="bg-white-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
        <h3 className='text-xl font-semibold text-black pt-2'>Signup Form!</h3>
        <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
            Login
          </button>
          <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
            Signup
          </button>
        <div className='flex flex-col items-center justify-center mt-2'>
          
          <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Name'></input>
          <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email address'></input>
          <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
          <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Confirm password'></input>
          <button className='rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 md:w-full shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in'>
            Sign Up
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-22 border-white border-solid"></div>
        <p className='text-black mt-4 text-sm'>Already have an account?</p>
        <p className='text-blue-400 mb-4 text-sm font-medium cursor-pointer' onClick={() => setIsLogin(true)}>Login</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
      
        {
          isLogin ? (
            <LoginForm />
          ) : (
            <SignUpForm />
          )
        }
      </main>
    </div>
  )
}

export default Login

