import { useRef } from 'react';
import SearchInput from "../../baseUI/Button/Input/SearchInput";
import Header from "../Header";
import SearchButton from '../../baseUI/Button/Input/SearchButton';

const Banner = () => {
  const searchInputRef = useRef();

  const handleSearch = () => {
    alert(`You typed ${searchInputRef.current.value}`)
  }

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="h-[60vh] bg-banner bg-no-repeat bg-cover bg-center text-white">
      <div className="flex flex-col gap-10 py-10 items-center justify-center h-[50vh] md:w-[80vh] w-[300px] mx-auto">
        <div className="text-white">
          <h1 className="font-semibold font-display md:text-5xl text-3xl text-tmdbLightBlue py-2 ">
            Welcome.
          </h1>
          <h2 className="text-2xl font-heading font-semibold md:text-[2rem] text-[1.5rem] py-2">
            Millions of movies, TV shows and people to discover.
          </h2>
          <h2 className="text-2xl font-heading font-semibold md:text-[2rem] text-[1.5rem]">Explore Now.</h2>
        </div>
        <div className="relative">
          <SearchInput ref={searchInputRef} onKeyDown={handleKeyDown} />
          <div className='absolute top-[5px] right-[5px]'>
            <SearchButton onClick={handleSearch}/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
