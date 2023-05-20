import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import { elementType } from "prop-types";

export const About = () => {
  const {store, actions} = useContext(Context)
  let params=useParams()
  console.log(params)
  let type=params.type
  let item=null
  let id=parseInt(params.id)
  let field=null
  if(type === "people"){
    item=store.people[id]
    field=
    <div className="aboutContainer">
      <div className="aboutTop">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${id + 1}.jpg`}/>
        <div>
          <h2>{ item.name }</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div className="aboutBot">
        <p>Mass: { item.mass }</p>
        <p>Height: { item.height }</p>
        <p>Hair Color: { item.hair_color}</p>
        <p>Skin Color: { item.skin_color }</p>
        <p>Eye Color: { item.eye_color }</p>
        <p>Birth Year: { item.birth_year }</p>
        <p>Gender: { item.gender }</p>
      </div>
    </div>
  }else if(type === "planets"){
    item=store.planets[id]
    field=
    <div className="aboutContainer">
    <div className="aboutTop">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id + 1}.jpg`}/>
      <div>
        <h2>{ item.name }</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
    <div className="aboutBot">
      <p>Rotation Period: { item.rotation_period }</p>
      <p>Orbital Period: { item.orbital_period }</p>
      <p>Diameter: { item.diameter}</p>
      <p>Climate: { item.climate }</p>
      <p>Gravity: { item.gravity }</p>
      <p>Terrain: { item.terrain }</p>
      <p>Surface Water: { item.surface_water }</p>
    </div>
  </div>
  }
	return(
	<div>
        {field}
    </div>
);
}