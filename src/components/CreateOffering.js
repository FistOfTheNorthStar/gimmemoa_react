import React from 'react';
import { LabelledInput, LabelledCheckbox, LabelledTextarea } from './LabelledInput';
import { CategorySelection, CurrencySelection } from './OfferingSelections'
import $ from 'jquery';
import {Redirect} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateOffering extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      item_name: '',
      description: '',
      category: '',
      currency: '',
      allow_pickup: false,
      offer_expires: moment(),
      offer_ships: moment(),
      unit_cents: 0,
      unit_description: '',
      shipping_per_unit_cents: 0,
      int_shipping_cents: 0,
      price_vat: 0,
      shipping_vat: 0,
      minimum_order_cents: 0,
      maximum_order_cents: 0,
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null

    }
    this.addFieldsToListing = this.addFieldsToListing.bind(this);
    this.offerEnd = this.offerEnd.bind(this);
    this.shippingDate = this.shippingDate.bind(this);
  }

  addFieldsToListing = (obj) => {
    this.setState(obj);
  }

  //might be able to lump these into one function, but did not find the datepicker parameters for that at first glance
  offerEnd = (date) => {
    this.setState({
      offer_expires: date
    });
  }

  shippingDate = (date) => {
    this.setState({
      offer_ships: date
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    var listing = {
      item_name: this.state.item_name,
      description: this.state.description,
      category: this.state.category,
      currency: this.state.currency,
      allow_pickup: this.state.allow_pickup,
      offer_expires: this.state.offer_expires,
      offer_ships: this.state.offer_ships,
      unit_cents: this.state.unit_cents,
      unit_description: this.state.unit_description,
      shipping_per_unit_cents: this.state.shipping_per_unit_cents,
      int_shipping_cents: this.state.int_shipping_cents,
      price_vat: this.state.price_vat,
      shipping_vat: this.state.shipping_vat,
      minimum_order_cents: this.state.minimum_order_cents,
      maximum_order_cents: this.state.maximum_order_cents,
      image1: this.state.image1,
      image2: this.state.image2,
      image3: this.state.image3,
      image4: this.state.image4,
      image5: this.state.image5

    }

    $.post('/listings',
    {listing: listing}).done(function(data){
      return <Redirect to="/"/>
    });

  }

  render() {
    return (
      <div>
        <h2>Create A New List</h2>
        <form onSubmit={this.submitForm}>
          <p>Add up to 5 images, the first one is visible in the search results.</p>
          <input type="file" name="image1"/>
          <input type="file" name="image2"/>
          <input type="file" name="image3"/>
          <input type="file" name="image4"/>
          <input type="file" name="image5"/>
          <LabelledInput label='Product Name:' name='item_name' placeholder='e.g. Nyc IPA' userInput={this.addFieldsToListing}/>
          <LabelledTextarea label='Describe production and product:' name='description' placeholder='Description' userInput={this.addFieldsToListing}/>
          <CategorySelection name='category' userInput={this.addFieldsToListing}/>
          <CurrencySelection name='currency' userInput={this.addFieldsToListing}/>
          <p>Bundle items into convenient units for shipping and pricing purposes</p>
          <LabelledInput label='Describe the unit' name='unit_description' placeholder='e.g. 12 x 500 ml can' userInput={this.addFieldsToListing}/>
          <LabelledInput label='Shipping price per unit' name='price_cents' placeholder='e.g. £50.50' userInput={this.addFieldsToListing}/>
          <LabelledInput label='International shipping price per unit' name='shipping_per_unit_cents' placeholder='e.g. £14.45' userInput={this.addFieldsToListing}/>
          <p>If you allow pickup remember to check that your information is correct in your profile.</p>
          <LabelledCheckbox name='allow_pickup' label='Allow Pickup' userInput={this.addFieldsToListing}/>
          <label>
            The final day for the offer.
            <DatePicker selected={this.state.offer_expires} onChange={this.offerEnd}/>
          </label>
          <label>
            The final date which the product is shipped (arrival can be later).
            <DatePicker selected={this.state.offer_ships} onChange={this.shippingDate}/>
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}
