const Card = ({cloudinaryImageId, name, avgRatingString, cuisines, id})=>{
     return (
          <div className="card">
               <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
               <h2>{name}</h2>
               <p>{avgRatingString} Stars</p>
               <p>{cuisines.join(" ")}</p>
          </div>
     );
}

export default Card;