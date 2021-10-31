import React from "react";
import { LogoutIcon } from "@heroicons/react/solid";
function SignOut({ user, signout }) {
  return (
    <div className="flex justify-center h-full">
      <div className="w-full mt-40 ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-700">
            Welcome
          </h2>
        </div>
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 my-8"
          role="alert"
        >
          <p className="font-bold">User Logged In</p>
          <p>{user?.email}</p>
        </div>

        <button
          onClick={signout}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <LogoutIcon
              className="h-5 w-5 text-white group-hover:text-green-400"
              aria-hidden="true"
            />
          </span>
          Sign out
        </button>
      </div>
    </div>
  );
}

export default SignOut;
