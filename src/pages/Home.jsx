import { useEffect, useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    localStorage.getItem("name") && setName(localStorage.getItem("name"));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/sia-pipeline-exam/login");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#1d1d1d]">
      <h1 className="text-[2rem] font-bold text-white">
        Hello, {!name ? "user" : name}
      </h1>
      <button
        className="bg-[#f0f0f0] text-black w-[14rem] mt-8 p-2 cursor-pointer rounded-sm"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
