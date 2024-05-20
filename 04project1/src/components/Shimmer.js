const Shimmer = () => {
  return (
    <div className="restaurant-list shimmer-list">
     {Array(12).fill("").map((e,ind)=>(<div className="shimmer-card" key={ind}> </div>))}
    </div>
  );
};

export default Shimmer;
