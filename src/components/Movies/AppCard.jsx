const getPosterURL =(posterpath)=> {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const MovieCard = ({poster_path, original_title, release_date}) => {
  return <div className="flex flex-col pl-5 gap-2">
    <img src={getPosterURL(poster_path)} alt={original_title} className="w-[150px] h-[225px] shadow-sm rounded-md"/>
    <div className="flex flex-col px-3 w-[150px]">
      <h1 className="font-bold">{original_title}</h1>
      <p className="font-normal">{release_date}</p>
    </div>
  </div>
}
export default MovieCard;