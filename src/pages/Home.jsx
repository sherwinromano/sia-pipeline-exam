import { useEffect, useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.getItem("name") && setName(localStorage.getItem("name"));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-[2rem] font-bold">Hello, {name}</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Home;
