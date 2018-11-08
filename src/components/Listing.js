import React from 'react';
import { Link } from 'react-router-dom';

export default class Listing extends React.Component {

  render() {
    return (
      <div className='listing'>
        <Link to={`/offer/${this.props.listing.id}`} >
          <img src={this.props.listing.image1} alt={this.props.listing.item_name}/>
          <h3>{this.props.listing.item_name} {this.props.listing.currency}{this.props.listing.unit_cents}</h3>

        </Link>
      </div>
    );
  }
}
