//import React, { Component } from 'react';
import React from 'react';
import $ from 'jquery';
import { PopulateListings } from './PopulateListings';

export default class Listings extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listings: []
    }

  }

  componentDidMount () {
    $.ajax({
      type: "GET",
      url: 'http://localhost:3001/listings',
      dataType: "JSON",
    }).done((data) => {
      this.setState({listings: data});
    });
  }


  render() {
    //if (listings.length > 0) {
      return (

        <PopulateListings listings={this.state.listings} />

      );
    //}
  }
}
