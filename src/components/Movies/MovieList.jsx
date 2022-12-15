import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

const Movies = [
  {
    title: 'The Peripheral',
    date: 'Oct 20, 2022',
    imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ccBe5BVeibdBEQU7l6P6BubajWV.jpg'
  },
  {
    title: 'The Peripheral',
    date: 'Oct 20, 2022',
    imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ccBe5BVeibdBEQU7l6P6BubajWV.jpg'
  },
  {
    title: 'The Peripheral',
    date: 'Oct 20, 2022',
    imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ccBe5BVeibdBEQU7l6P6BubajWV.jpg'
  },
  {
    title: 'The Peripheral',
    date: 'Oct 20, 2022',
    imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ccBe5BVeibdBEQU7l6P6BubajWV.jpg'
  },
  {
    title: 'The Peripheral',
    date: 'Oct 20, 2022',
    imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ccBe5BVeibdBEQU7l6P6BubajWV.jpg'
  },
  {
    title: 'The Peripheral',
    date: 'Oct 20, 2022',
    imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ccBe5BVeibdBEQU7l6P6BubajWV.jpg'
  },
  {
    title: 'The Peripheral',
    date: 'Oct 20, 2022',
    imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ccBe5BVeibdBEQU7l6P6BubajWV.jpg'
  },
  {
    title: 'The Peripheral',
    date: 'Oct 20, 2022',
    imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ccBe5BVeibdBEQU7l6P6BubajWV.jpg'
  },
  {
    title: 'The Peripheral',
    date: 'Oct 20, 2022',
    imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ccBe5BVeibdBEQU7l6P6BubajWV.jpg'
  },
  {
    title: 'The Peripheral',
    date: 'Oct 20, 2022',
    imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/ccBe5BVeibdBEQU7l6P6BubajWV.jpg'
  },
]

const MovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    console.log("hello")
    const movieData = Movies;
    setMovies(()=>{
      return movieData;
    });
  },[])

  console.log("hi")


  return <div className="flex pb-5 px-5 overflow-x-auto">
    {Movies.map((movie,index)=>{
      return <MovieCard key={index} {...movie} />
    })}
  </div>
}

export default MovieList;