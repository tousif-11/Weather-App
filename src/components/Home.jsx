const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto flex justify-center items-center">

        <div className="w-130 h-160 mx-auto mt-5 rounded-3xl
                  bg-linear-to-br from-sky-500/30 to-cyan-300/10
                  backdrop-blur-md border border-white/20">

          {/* Title */}
          <div className="flex justify-center pt-5 text-3xl font-bold ">
            <p className="bg-linear-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">Weather</p>
          </div>

          {/* Search */}
          <div className="flex justify-center mt-4">
            <input
              type="text"
              placeholder="Search city..."
              className="text-gray-700 w-75 h-10 text-center rounded-2xl bg-white outline-none"
            />
          </div>

          {/* Weather Card */}
          <div className="flex justify-center mt-15 cursor-pointer">
            <div className="border border-cyan-100 w-75 h-95 rounded-2xl">

              {/* Weather information will come here */}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;