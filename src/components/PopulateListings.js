import React from 'react';
import Listing from './Listing';

export const PopulateListings = ({listings}) =>
    <div className='listingList'>
      {listings.map(function(listing) {
        return (
          <Listing listing={listing} key={listing.id} />
        )
      })}
    </div>
