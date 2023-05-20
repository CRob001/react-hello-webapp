import React, { useContext } from "react";
import "../../styles/home.css";
import MyCard from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
  const {store, actions} = useContext(Context)
	return(
	<div className="homeContainer"> 
    <div className="cardContainer">
      {store.people.map((item,index) =>{
        return <MyCard person={item} key={index} id={index} type={"people"}/>
      })}
    </div>
    <div className="cardContainer">
      {store.planets.map((item,index) =>{
        return <MyCard planet={item} key={index} id={index} type={"planets"}/>
      })}
    </div>
	</div>
);
}