const getPosterURL =(posterpath)=> {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
}

const MovieCard = ({poster_path, name, first_air_date}) => {
  return <div className="flex flex-col pl-5 gap-2">
    <img src={getPosterURL(poster_path)} alt={name} className="w-[150px] h-[225px] shadow-sm rounded-md"/>
    <div className="flex flex-col px-3 w-[150px]">
      <h1 className="font-bold">{name}</h1>
      <p className="font-normal">{first_air_date}</p>
    </div>
  </div>
}
export default MovieCard;