// import { restaurentList } from "../contants";
import RestaurantCard from "../components/RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants){
    const filterData= restaurants.filter((restaurant) => 
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
    return filterData;
}

const Body=()=>{
    const [allrestaurents, setAllrestaurents] = useState([]);
    const [filteredrestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText]=useState("");  
    
    useEffect(()=>{
    // Api call will be done here
        getRestaurants();
    }, []);
    
    
    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1339811&lng=75.8443171&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        //Optional Chaining 
        setAllrestaurents(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (!allrestaurents) return null;
    // if(filteredrestaurants?.length===0){
    //     return <h1 className="FilteredText">No Restaurant Found At Your Search</h1>;
    // }
    return filteredrestaurants?.length === 0 ? <Shimmer/> : (
        <> 
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Search With Restaurant Names....!" 
            value={searchText} 
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            />
            <button className="search-btn"
            onClick={()=>{
                const data = filterData(searchText, allrestaurents);
                setFilteredRestaurants(data) ;
            }}
            >Search</button>
        </div>

        <div className="Restaurant-List">
            {
                filteredrestaurants.map((restaurant) => {
                    return <RestaurantCard {...restaurant.info} key = {restaurant.info.id} />
                })
            }
        </div>

        {/* <div className="Restaurant-List">
        {filteredrestaurants ? (
            restaurants.map((restaurant) => (
            // Check if restaurant.info is defined and has an 'id' property
            restaurant.info || restaurant.info.id ? (
                <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
            ) : null
            ))
        ) : (
            <p>No restaurants found.</p>
        )}
        </div> */}

        </>
    );
};

export default Body;