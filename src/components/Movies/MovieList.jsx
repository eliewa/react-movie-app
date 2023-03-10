import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import tmdb from "../../api/tmdb";


const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    const fetchMovies = async () => {
      const {data} = await tmdb.get("tv/top_rated")
      setMovies(data.results)
    }
    fetchMovies();
  },[])

  return <div className="flex pb-5 px-5 overflow-x-auto">
    {movies.map((movie,index)=>{
      return <MovieCard key={index} {...movie} />
    })}
  </div>
}

export default MovieList;