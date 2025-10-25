import RestCard from "./RestCard";
import RestList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    // let listofRest = [
    //     {
    //     "info": {
    //         "id": "149560",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/5fdc9726-3af5-4147-a3e8-47fd8050c541_149560.JPG",
    //         "areaName": "Howrah Railway Station",
    //         "cuisines": ["Italian","Pizzas","Snacks"],
    //         "avgRating": 4,
    //         "parentId": "721",
    //         "avgRatingString": "4.0",
    //         "sla": {
    //         "slaString": "55-65 mins"
    //         }
    //         }
    //     },
    //     {
    //     "info": {
    //         "id": "407661",
    //         "name": "Burger King",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/3079cc60-8ee1-4306-8390-fc436f9dc9d5_407661.jpg",
    //         "locality": "New Market",
    //         "areaName": "Esplanade",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //             "Burgers",
    //             "American"
    //         ],
    //         "avgRating": 4.3,
    //         "parentId": "166",
    //         "avgRatingString": "4.3",
    //         "sla": { "slaString": "55-65 mins" }
    //         }
    //     }
    // ];

    // const [listofRest,setlistofRest] = useState([
    //     {
    //     "info": {
    //         "id": "149560",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/5fdc9726-3af5-4147-a3e8-47fd8050c541_149560.JPG",
    //         "areaName": "Howrah Railway Station",
    //         "cuisines": ["Italian","Pizzas","Snacks"],
    //         "avgRating": 4,
    //         "parentId": "721",
    //         "avgRatingString": "4.0",
    //         "sla": {
    //         "slaString": "55-65 mins"
    //         }
    //         }
    //     },
    //     {
    //     "info": {
    //         "id": "407661",
    //         "name": "Burger King",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/3079cc60-8ee1-4306-8390-fc436f9dc9d5_407661.jpg",
    //         "locality": "New Market",
    //         "areaName": "Esplanade",
    //         "costForTwo": "₹350 for two",
    //         "cuisines": [
    //             "Burgers",
    //             "American"
    //         ],
    //         "avgRating": 4.3,
    //         "parentId": "166",
    //         "avgRatingString": "4.3",
    //         "sla": { "slaString": "55-65 mins" }
    //         }
    //     }
    // ]);

    const [listofRest,setlistofRest] = useState(RestList);

    return (
        <div className="body">

            {/* <div className="search">Search</div> */}

            <div className="filter">

                {/* <button className="filter-btn" onClick={() => {console.log("Clicked");}}>Top Rated Restaurants</button> */}

                {/* <button className="filter-btn" onMouseOver={() => {console.log("Clicked");}}>Top Rated Restaurants</button> */}
                
                {/* <button className="filter-btn" onClick={() => {
                    listofRest=listofRest.filter((res) => res.info.avgRating > 4);
                    console.log(listofRest);
                    }}>Top Rated Restaurants</button> */}

                {/* <button className="filter-btn" onClick={() => {
                    const filterList = listofRest.filter((res) => res.info.avgRating > 4);
                    setlistofRest(filterList);
                    }}>Top Rated Restaurants</button> */}

                <button className="filter-btn" onClick={() => {
                    const filterList = listofRest.filter((res) => res.info.avgRating > 4.5);
                    setlistofRest(filterList);
                    }}> Top Rated Restaurants
                </button>
            </div>

            <div className="card-container">
                {
                    listofRest.map ((resturant) => (<RestCard key={resturant.info.id} resData = {resturant}/>))
                }
            </div>

        </div>
    );
};

export default Body;