import React from 'react';

const RenderButtons = (props) => {
   if (props.numOfRatings >= 11) {
       return <button onClick={props.handleRemoveRating}>Remove rating</button>
   } else if (props.numOfRatings <= 0){
    return <button onClick={props.handleAddRating}>Add another rating</button>
   } else {
       return <div><button onClick={props.handleAddRating}>Add another rating</button> 
              <button onClick={props.handleRemoveRating}>Remove rating</button></div>;           
   }
};

export default RenderButtons;