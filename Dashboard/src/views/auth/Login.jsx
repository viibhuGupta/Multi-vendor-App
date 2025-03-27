import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      className="mx-10 my-15 md:mx-32 md:my-32 lg:mx-[30%]  flex 
flex-col items-center"
    >
      <div className="flex flex-col gap-0 mb-10">
      <h1 className=" text-3xl text-gray-800 font-semibold  ">
        Welcome Back
      </h1>
      <p className="text-gray-400 text-sm ">Enter your Credentials to access your account</p>
      </div>
     

      <form className=" md:w-[80%] ">
      

        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="inputClass"
            placeholder="john.doe@company.com"
            required
          />
        </div>

        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="inputClass"
            placeholder="•••••••••"
            required
          />
        </div>
       
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>

      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-64 h-[1px] my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700" />
        <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
          or
        </div>
      </div>

      <div className="flex justify-between gap-5">
        <button
          type="button"
          className="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
        >
          <FcGoogle fontSize={25} />
          <span className="hidden sm:inline">Sign in with Google</span>
        </button>

        <button
          type="button"
          className="text-gray-900 gap-2 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 sm:px-8 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
        >
          <FaFacebook fontSize={25} />

          <span className="hidden sm:inline">Sign in with Facebook</span>
        </button>
      </div>

      <p className="text-sm mt-2">
        Have an account?
        <Link
          className=" ml-2 cursor-pointer text-blue-500 font-semibold text-sm"
          to="/register"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
