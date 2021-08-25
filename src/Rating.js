import React from 'react';

const Rating = (props) => {

    return (
        <div className="va-rating-container">
          <input type='number' name={props.id} onChange={props.handleRatingChange} value={props.data[props.id].rating}></input>
          <p>Combined Rating: {props.data[props.id].combinedRating}%</p>
          <p>Final Rating: {props.data[props.id].finalRating}%</p>
        </div>
    );
}

export default Rating;