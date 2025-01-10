const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <form action="" className="bg-[#cccccc] p-4 w-[24rem] rounded-[1rem]">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="outline-none p-2 rounded-sm"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="outline-none p-2 rounded-sm"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <input
          className="bg-[blue] text-white w-full mt-4 p-2 cursor-pointer rounded-sm"
          type="button"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Login;
