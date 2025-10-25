import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const RestCard = (props) => {
//     return (
//         <div className="card" style={{backgroundColor: "#d4d3d3ff"}}>
//             <img src={props.logo} alt={props.resName} className="resimg"/>
//             <h3>{props.resName}</h3>
//             <p>{props.cuisine}</p>
//             <p>{props.rating}</p>
//         </div>
//     );
// };

// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="card-container">
//                 <RestCard resName="KFC" logo="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" cuisine="Burger" rating="4"/>
//                 <RestCard resName="Wow Momo" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiwoXUAbNVCz_aJk7dsfZieHPJDojdUHS9ww&s" cuisine="Momos" rating="4.2"/>
//                 <RestCard resName="Monginis" logo="https://d1f3aa6ifduais.cloudfront.net/assets/images/wedding-icon-2.png" cuisine="Cake" rating="3.8"/>
//                 <RestCard resName="Dominos" logo="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/2048px-Dominos_pizza_logo.svg.png" cuisine="Pizza" rating="4.1"/>
//                 <RestCard resName="Mio Amore" logo="https://api.mioamoreshop.com/storage/137/mio_amore_logo.svg" cuisine="Cake" rating="4"/>
//             </div>
//         </div>
//     );
// };

const Footer = () => {
    return (
        <div className="footer"></div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);