import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars Database</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map((item,index) => {
							return <li key={index}><Link class="dropdown-item" to={`/about/${item.type}/${item.id}`}>{item.name}</Link><button onClick={() => actions.deletefavorites(index)}>x</button></li>
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};