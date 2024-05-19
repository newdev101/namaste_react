import Card from "./Card";
import { config } from "../config";
import { useState } from "react";

const Body = () => {

     let [searchText, setSearchText] = useState();
     const [restaurants, setRestaurants] = useState(config);

     function filterData(searchText){
          const data = config.filter((restaurant)=>restaurant.card.card.info.name.toLowerCase().includes(searchText));
          return data;
     }
  return (
    <>
      <div className="search-container">
          <input type="text"
          placeholder="search..."
          value={searchText}
          className="search-input"
          onChange={async(e)=>{
               setSearchText(e.target.value);
               const data = filterData(e.target.value.toLowerCase());
               setRestaurants(data);
          }}
          />
          <button className="search-btn"
               onClick={()=>{
                    
                    const data = filterData(searchText.toLowerCase());
                    setRestaurants(data);
               }}
          >Search</button>

      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <Card
              {...restaurant.card.card.info}
              key={restaurant.card.card.info.id}
              id={restaurant.card.card.info.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
