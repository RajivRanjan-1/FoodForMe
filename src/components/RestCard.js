import {CDN_URL} from "../utils/constants";

const RestCard = (props) => {
    const {resData} = props;
    const {name,avgRatingString,cuisines,areaName,cloudinaryImageId}= resData?.info;
    const {deliveryTime,slaString}= resData?.info.sla;
    return (
        <div className="card" style={{backgroundColor: "#d4d3d3ff"}}>
            <img src={CDN_URL+cloudinaryImageId} className="restlogo"/>
            <h3>{name}</h3>
            <h3>{avgRatingString}</h3>
            <h3>{slaString}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
        </div>
    );
};

export default RestCard;