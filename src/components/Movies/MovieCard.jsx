const MovieCard = ({imageUrl, title, date}) => {
  return <div className="flex flex-col pl-5 gap-2">
    <img src={imageUrl} alt={title} className="w-[150px] h-[225px] shadow-sm rounded-md"/>
    <div className="flex flex-col px-3 w-[150px]">
      <h1 className="font-bold">{title}</h1>
      <p className="font-normal">{date}</p>
    </div>
  </div>
}
export default MovieCard;