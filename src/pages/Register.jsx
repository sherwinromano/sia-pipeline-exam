import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "male",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="h-screen xs:px-4 lg:px-0 flex items-center justify-center bg-[#1d1d1d]">
      <form
        onSubmit={handleRegister}
        className="bg-[#0d0d0d] p-8 w-[auto] rounded-[1rem] flex flex-col border border-[#303030] gap-2"
      >
        <div className="py-4 flex justify-center">
          <h1 className="font-bold text-[1.5rem] text-white">
            SIA Pipeline Exam
          </h1>
        </div>
        <div className="flex xs:flex-col lg:flex-row gap-2 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="firstName" className="text-base text-white">
              First Name
            </label>
            <input
              className="outline-none py-2 text-white rounded-sm bg-transparent border-b border-[#cccccc]"
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="lastName" className="text-base text-white">
              Last Name
            </label>
            <input
              className="outline-none py-2 text-white rounded-sm bg-transparent border-b border-[#cccccc]"
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex xs:flex-col lg:flex-row gap-2 w-full">
          <div className="flex flex-col gap-2 w-full justify-between">
            <label htmlFor="gender" className="text-base text-white">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className="outline-none py-2 text-white rounded-sm bg-transparent border-b border-[#cccccc]"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="age" className="text-base text-white">
              Age
            </label>
            <input
              className="outline-none py-2 text-white rounded-sm bg-transparent border-b border-[#cccccc]"
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
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
            value={formData.email}
            onChange={handleChange}
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
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-[#f0f0f0] text-black w-full mt-4 p-2 cursor-pointer rounded-sm"
          type="submit"
        >
          Submit
        </button>
        <p className="text-white text-[14px] mt-[4px]">
          Already have an account?{" "}
          <Link to="/login" className="font-bold">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
