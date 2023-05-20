import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom"
import Button from 'react-bootstrap/Button';


const MyCard = (props) => {
    const {store, actions} = useContext(Context)
    let type = props.type
    let field = null
    if (type === "people") {
        field=
        <Card className="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/characters/${props.id + 1}.jpg`}/>
            <Card.Body>
                <Card.Title>{props.person.name}</Card.Title>
                <Card.Text>
                    Height: {props.person.height}
                </Card.Text>
                <Card.Text>
                    Mass: {props.person.mass}
                </Card.Text>
                <Card.Text>
                    Hair Color: {props.person.hair_color}
                </Card.Text>
                <Link to={"/about/"+type+"/"+props.id}><Button variant="primary">Go somewhere</Button></Link>
                <Button variant="primary" onClick={() => actions.addfavorites(props.person.name, props.id, props.type)}>F</Button>
            </Card.Body>
        </Card>
    }else if(type==="planets" && props.id !== 0){
        field=
        <Card className="card" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/planets/${props.id + 1}.jpg`}/>
            <Card.Body>
                <Card.Title>{props.planet.name}</Card.Title>
                <Card.Text>
                    Terrain: {props.planet.terrain}
                </Card.Text>
                <Card.Text>
                    Climate: {props.planet.climate}
                </Card.Text>
                <Card.Text>
                    Gravity: {props.planet.gravity}
                </Card.Text>
                <Link to={"/about/"+type+"/"+props.id}><Button variant="primary">Go somewhere</Button></Link>
                <Button variant="primary" onClick={() => actions.addfavorites(props.planet.name, props.id, props.type)}>F</Button>
            </Card.Body>
        </Card>
    }
    return(
        <>
        {field}
        </>
    )
}
export default MyCard 
