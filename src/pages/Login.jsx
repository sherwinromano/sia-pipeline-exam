import { useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const loginUser = async ({ email, password }) => {
  try {
    const usersRef = collection(db, "users");
    const q = query(
      usersRef,
      where("email", "==", email),
      where("password", "==", password)
    );

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      console.log("User logged in:", userData);
      return userData;
    } else {
      console.error("Invalid email or password");
      return null;
    }
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userData = await loginUser(credentials);
      if (userData) {
        console.log("User logged in:", userData);
        localStorage.setItem("name", userData.firstName);
        window.location.replace("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-[#cccccc] p-4 w-[24rem] rounded-[1rem]"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="outline-none p-2 rounded-sm"
            type="email"
            name="email"
            id="email"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="outline-none p-2 rounded-sm"
            type="password"
            name="password"
            id="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-[blue] text-white w-full mt-4 p-2 cursor-pointer rounded-sm"
          type="submit"
        >
          Submit
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
