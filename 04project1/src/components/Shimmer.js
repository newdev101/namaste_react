const Shimmer = ({cnt, page=null}) => {
  console.log(cnt);
  return (
    <>
    <div className="m-4">
        <input
          type="text"
          placeholder="search..."
          value=""
          className="h-10 w-80 border-2 border-gray-300 p-2 rounded-md"
        />
        <button
          className=" text-white p-2 rounded-lg ml-2"
        >
          Search
        </button>

        <h2  className="font-extrabold w-full text-4xl text-center">{page}</h2>
      </div>
    <div className="flex flex-wrap justify-center">
     {Array(cnt).fill("").map((e,ind)=>(<div className="w-60 h-96 border-2  p-3 m-5 rounded-md shadow-lg  " key={ind}></div>))}
    </div>
    </>
  );
};

export default Shimmer;
