const SearchButton = (props) => {
  return <>
  <button
    {...props}
    className="text-white text-lg rounded-full font-bold font-heading px-8 py-4 hover:text-blue-900 focus:outline-none"
    style={{
    background:
    "linear-gradient(to right,rgb(30,213,169),rgb(1,180,228))",
      }}
  >
      Search
    </button>
    </>
}

export default SearchButton