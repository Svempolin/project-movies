import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { BASE_URL } from './utils/urls';
import Header from './components/Header';
import List from './components/List'
import Details from './components/Details';
import NotFound from './components/NotFound';


export const App = () => {
	const [list, setList]=useState([]);

	useEffect (()=>{
		fetch (BASE_URL)
		.then((res)=> res.json())
		.then((data)=> setList(data.results))
	}, []);
	// console.log(list)

	return (
	<>	
	<BrowserRouter>
	<Header/>
	 <Switch>
		<Route exact path="/" render={() => <List movies={list}/>}/>
		<Route path="/details/:movieId" component={Details}/>
		<Route path= "/404" component={NotFound}/>
		<Redirect to="/404"/>
	 </Switch>
	</BrowserRouter>
	</>
	);
};

