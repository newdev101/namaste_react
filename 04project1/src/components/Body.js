import Card from "./Card";
import Shimmer from "./Shimmer";
import { config, Swiggy_api } from "../config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState([]);

  function filterData(searchText) {
    const data = allRestaurants.filter((restaurant) =>
      restaurant?.card?.card?.info?.name.toLowerCase().includes(searchText)
    );

    // console.log(data);
    return data;
  }

  async function fetchData() {
    const response = await fetch(Swiggy_api);
    let jsonData = await response.json();
    jsonData = jsonData?.data?.cards;
    jsonData = jsonData.filter((restaurant, ind) => ind > 2);
    console.log(jsonData);
    setAllRestaurants(jsonData);
    setRestaurants(jsonData);
  }

  useEffect(() => {
    console.log("userEffect called");
    fetchData();
  }, []);

  console.log("render called");

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search..."
          value={searchText}
          className="search-input"
          onChange={async (e) => {
            setSearchText(e.target.value);
            const data = filterData(e.target.value.toLowerCase());
            setRestaurants(data);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText.toLowerCase());
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          restaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.card.card.info.id}
                key={restaurant.card.card.info.id}
              >
                <Card {...restaurant.card.card.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
