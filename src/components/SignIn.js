import React from "react";
import { Login } from "heroicons-react";
function SignIn({ signinEmailRef, signinPasswordRef, signin, message }) {
  return (
    <div>
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-green-700">
          Sign In
        </h2>
      </div>
      {/* Start Sign In  */}
      <form className="mt-2 space-y-6">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm -space-y-px text-left">
          <div className="">
            <label
              htmlFor="email-address"
              className="text-green-700 font-semibold"
            >
              Email address
            </label>
            <input
              ref={signinEmailRef}
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div className="py-4">
            <label htmlFor="password" className="text-green-700 font-semibold">
              Password
            </label>
            <input
              ref={signinPasswordRef}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button
            onClick={signin}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <Login
                className="h-5 w-5 text-white group-hover:text-green-400"
                aria-hidden="true"
              />
            </span>
            Sign In
          </button>
        </div>
        {message && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error ! </strong>
            <span className="block sm:inline">{message}</span>
          </div>
        )}
      </form>

      {/* End Sign In  */}
    </div>
  );
}

export default SignIn;
