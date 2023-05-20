import { NavItem } from "react-bootstrap";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [], 
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getpeople: async () => {
				let url = "https://swapi.dev/api/people"
				let response=await fetch(url,{Method:"GET"})
				let data=await response.json()
				console.log(data)
				setStore({people: data.results})
			},
			getplanets: async () => {
				let url = "https://swapi.dev/api/planets"
				let response=await fetch(url,{Method:"GET"})
				let data=await response.json()
				console.log(data)
				setStore({planets: data.results})
			},
			addfavorites: (name, id, type) => {
				let favorites = getStore().favorites
				let newfavorite = {
					"name":name,
					"id":id,
					"type":type
				}
				favorites.push(newfavorite)
				setStore({favorites:favorites})
			},
			deletefavorites:(index) => {
				let favorites = getStore().favorites
				let filtered = favorites.filter((item,idx) => idx !== index)
				setStore({favorites:filtered})
			}
		}
	};
};

export default getState;
