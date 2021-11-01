import "./App.css";
import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { auth } from "./firebaseConfiguration";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

function App() {
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const signinEmailRef = useRef();
  const signinPasswordRef = useRef();
  const [messageSignUp, setMessageSignUp] = useState(null);
  const [messageSignIn, setMessageSignIn] = useState(null);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const signup = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signupEmailRef.current.value,
        signupPasswordRef.current.value
      );
      setMessageSignUp(null);
      console.log(user);
    } catch (error) {
      let msg = error.message.replace("Firebase", "");
      msg = msg.replace("Error", "");
      setMessageSignUp(msg);
    }
  };

  const signin = async (e) => {
    e.preventDefault();
    console.log(signinEmailRef.current.value, signinPasswordRef.current.value);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        signinEmailRef.current.value,
        signinPasswordRef.current.value
      );
      setMessageSignIn(null);
      console.log(user);
    } catch (error) {
      let msg = error.message.replace("Firebase", "");
      msg = msg.replace("Error", "");
      setMessageSignIn(msg);
    }
  };

  const signout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-full flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {user ? (
          <SignOut user={user} signout={signout} />
        ) : (
          <>
            <SignUp
              signupEmailRef={signupEmailRef}
              signupPasswordRef={signupPasswordRef}
              signup={signup}
              message={messageSignUp}
            />
            <SignIn
              signinEmailRef={signinEmailRef}
              signinPasswordRef={signinPasswordRef}
              signin={signin}
              message={messageSignIn}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
