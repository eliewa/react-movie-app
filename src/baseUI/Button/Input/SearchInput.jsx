import { forwardRef } from "react";
const SearchInput = forwardRef((props,ref) => {
  
  return <>
    <div>
      <div>
        <div>
          <div className="overflow-hidden z-0 rounded-full relative p-2 mx-auto">
            <form className="relative flex z-50 bg-white rounded-full">
              <input
                {...props}
                type="text"
                ref={ref}
                className="text-black md:w-[80vh] w-[45vh] h-15 rounded-[8rem] outline-none px-8 py-4 placeholder:text-slate-500 truncate"
                placeholder="Search for a movie, tv show, person...."
              />
              {/* <button
                onClick={handleSearch}
                className="text-white text-lg rounded-full font-bold font-heading px-8 py-4 hover:text-blue-900 focus:outline-none"
                style={{
                  background:
                    "linear-gradient(to right,rgb(30,213,169),rgb(1,180,228))",
                }}
              >
                Search
              </button> */}
            </form>
            <div className="glow glow-1 z-10 animate-glow1 bg-pink-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
            <div className="glow glow-2 z-20 animate-glow2 bg-purple-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
            <div className="glow glow-3 z-30 animate-glow3 bg-yellow-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
            <div className="glow glow-4 z-40 animate-glow4 bg-blue-400 rounded-100 w-120 h-120 -top-10 -left-10 absolute"></div>
          </div>
        </div>
      </div>
    </div>
    </>
});

export default SearchInput;
