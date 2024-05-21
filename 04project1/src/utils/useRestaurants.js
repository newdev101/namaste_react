import { Swiggy_api } from "../config";
import { useState, useEffect } from "react";
const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  async function fetchData() {
    const response = await fetch(Swiggy_api);
    let jsonData = await response.json();
    jsonData = jsonData?.data?.cards;
    jsonData = jsonData.filter((restaurant, ind) => ind > 2);
    console.log(jsonData);
    setAllRestaurants(jsonData);
  }

  useEffect(() => {
    console.log("userEffect called");
    fetchData();
  }, []);

  return allRestaurants;
};

export default useRestaurants;
