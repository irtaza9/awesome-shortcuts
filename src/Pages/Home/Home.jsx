import React from "react";
import ItemCard from "../../components/ItemCards/ItemCard";
import actions from "../../components/data";
import { Paper } from "@mui/material";
import "./home.css"
const Home = () => {
  return (
    <div className="out">
    <section className="py-2 container negative-margin">
      <Paper elevation={3} id="paper">
        <div className="row justify-content-center py-4 px-4">
          {actions.shortcutdata.map((item, index) => {
            return (
              <ItemCard
                title={item.name}
                desc={item.description}
                img={item.icon}
                key={index}
              />
            );
          })}
        </div>
      </Paper>
    </section>
    </div>
  
  );
};

export default Home;
