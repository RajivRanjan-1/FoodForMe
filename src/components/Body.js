import RestCard from "./RestCard";
import RestList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="card-container">
                {
                    RestList.map ((resturant) => (<RestCard key={resturant.info.id} resData = {resturant}/>))
                }
            </div>
        </div>
    );
};

export default Body;