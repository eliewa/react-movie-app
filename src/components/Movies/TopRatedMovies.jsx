import AppCard from "./AppCard";
import { useEffect, useState } from "react";
import tmdb from "../../api/tmdb";


const TopRatedMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    const fetchMovies = async () => {
      const {data} = await tmdb.get("movie/top_rated")
      setMovies(data.results)
    }
    fetchMovies();
  },[])

  return <div className="flex pb-5 px-5 overflow-x-auto">
    {movies.map((movie,index)=>{
      return <AppCard key={index} {...movie} />
    })}
  </div>
}

export default TopRatedMovies;