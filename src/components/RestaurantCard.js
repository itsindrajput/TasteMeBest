import {IMG_CDN_URL} from "../contants"

const RestaurantCard=({cloudinaryImageId, name, cuisines, totalRatingsString})=>{ 
    return (
        <div className="card">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{totalRatingsString} Ratings</h5>
        </div>
    );
};

export default RestaurantCard;