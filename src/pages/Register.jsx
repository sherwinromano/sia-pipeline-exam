import React, { useState } from "react";
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
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="bg-[#cccccc] p-4 w-[auto] rounded-[1rem] flex flex-col"
      >
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="firstName">First Name</label>
            <input
              className="outline-none p-2 rounded-sm"
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="outline-none p-2 rounded-sm"
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              className="outline-none p-2 rounded-sm"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="age">Age</label>
            <input
              className="outline-none p-2 rounded-sm"
              type="number"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="outline-none p-2 rounded-sm"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="outline-none p-2 rounded-sm"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="bg-[blue] text-white w-full mt-4 p-2 cursor-pointer rounded-sm"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
