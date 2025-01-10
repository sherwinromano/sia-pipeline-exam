import { useState } from "react";
import { db } from "../../firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

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
        window.location.replace("/sia-pipeline-exam/home");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-screen xs:px-4 lg:px-0 flex items-center justify-center bg-[#1d1d1d]">
      <form
        onSubmit={handleLogin}
        className="bg-[#0d0d0d] p-8 w-[24rem] rounded-[1rem] flex flex-col border border-[#303030] gap-2"
      >
        <div className="py-4 flex justify-center">
          <h1 className="font-bold text-[1.5rem] text-white">
            SIA Pipeline Exam
          </h1>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-base text-white">
            Email
          </label>
          <input
            className="outline-none py-2 text-white rounded-sm bg-transparent border-b border-[#cccccc]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-base text-white">
            Password
          </label>
          <input
            className="outline-none py-2 text-white rounded-sm bg-transparent border-b border-[#cccccc]"
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-[#f0f0f0] text-black w-full mt-4 p-2 cursor-pointer rounded-sm"
          type="submit"
        >
          Submit
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <p className="text-white text-[14px] mt-[4px]">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
