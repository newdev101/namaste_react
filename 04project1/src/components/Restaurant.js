import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiggy_api, img_cdn_url } from "../config";
import {IndividualCard} from "./Card";
import Shimmer from "./Shimmer";

const Restaurant = () => {
  const { id } = useParams();
  
  const [restaurant, setRestaurant] = useState(null);
  async function fetchData() {
    const response = await fetch(Swiggy_api);
    let jsonData = await response.json();
    jsonData = jsonData?.data?.cards;
    jsonData = jsonData.filter(
      (restaurant, ind) => ind > 2 && restaurant?.card?.card?.info?.id == id
    );

     jsonData = jsonData[0]?.card?.card?.info;
     setRestaurant(jsonData);
  }
  useEffect(() => {
    fetchData();
  }, []);

  if(restaurant === null){
     return <Shimmer />;
  }
  return (
    <div className="individual-restaurant">
      <IndividualCard {...restaurant} />
    </div>
  );
};

export default Restaurant;
