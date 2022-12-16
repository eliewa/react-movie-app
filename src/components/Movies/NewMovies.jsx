import { useEffect, useState } from "react";
import tmdb from "../../api/tmdb";
import AppCard from "./AppCard"


const NewMovies = () => {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    const fetchMovies = async () => {
      const {data} = await tmdb.get("movie/now_playing")
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

export default NewMovies;