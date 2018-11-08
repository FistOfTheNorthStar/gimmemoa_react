import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Listings from './Listings';
import CreateOffering from './CreateOffering'
//import Appointment from './Appointment';
//import AppHeader from './AppHeader';
//import AppointmentForm from './AppointmentForm';
//import Login from './Login';

export default (props) => {
	return (
		<BrowserRouter>
			<div>
				<Route exact path="/" component={Listings} />
        <Route path="/new" component={CreateOffering} />
			</div>
		</BrowserRouter>
	)
}
