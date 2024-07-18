import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your craving and elevate your dining experience,
        one delicious meal at a time
      </p>
      <div className="explore-menu-list">
        {menu_list.map((elem, i) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === elem.menu_name ? "All" : elem.menu_name
                )
              }
              key={i}
              className="explore-menu-list-item"
            >
              <img
                className={category === elem.menu_name ? "active" : ""}
                src={elem.menu_image}
                alt=""
              />
              <p>{elem.menu_name}</p>
            </div>
          );
        })}
      </div>
      {/* <br /> */}
      <hr />
    </div>
  );
};

export default ExploreMenu;
