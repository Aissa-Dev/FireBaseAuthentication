import "./App.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfiguration";
function App() {
  const [registerEmail, setRegisterEmail] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {};

  const logout = async () => {};

  return (
    <div className="App">
      <div>
        <h3>Register</h3>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Create User</button>
      </div>
      <div>
        <h3>Login</h3>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </div>
      {/* {auth.currentUser.email} */}
    </div>
  );
}

export default App;
