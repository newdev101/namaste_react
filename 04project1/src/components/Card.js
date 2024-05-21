const Card = ({cloudinaryImageId, name, avgRatingString, cuisines = ["indian"], id})=>{
     return (
          <div className="w-60 h-96 border-2 border-dashed border-yellow-500 p-3 m-5 rounded-md shadow-lg hover:bg-slate-200 ">
               <img className="w-full h-48 rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
               {/* <hr className="border-1 border-dashed border-yellow-500 my-2 w-56" /> */}
               <h2 className="text-lg font-bold" >{name}</h2>
               <p>{avgRatingString} Stars</p>
               <p>{cuisines.join(" ")}</p>
          </div>
     );
};

// export const IndividualCard = ({cloudinaryImageId, name, avgRatingString, cuisines = ["indian"], id})=>{
//      return (
//           <div className="card individual-card">
//                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
//                <h2>{name}</h2>
//                <p>{avgRatingString} Stars</p>
//                <p>{cuisines.join(" ")}</p>
//           </div>
//      );
// }
export default Card;