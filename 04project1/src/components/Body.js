import Card from "./Card";
import Shimmer from "./Shimmer";
import { Swiggy_api } from "../config";
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
    <Shimmer cnt={7} />
  ) : (
    <>
      <div className="m-4">
        <input
          type="text"
          placeholder="search..."
          value={searchText}
          className="h-10 w-80 border-2 border-gray-300 p-2 rounded-md"
          onChange={async (e) => {
            setSearchText(e.target.value);
            const data = filterData(e.target.value.toLowerCase());
            setRestaurants(data);
          }}
        />
        <button
          className="bg-blue-500 hover:bg-violet-600 text-white p-2 rounded-lg ml-2"
          onClick={() => {
            const data = filterData(searchText.toLowerCase());
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
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
