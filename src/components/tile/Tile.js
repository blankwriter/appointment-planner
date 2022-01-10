import React from "react";

export const Tile = ({value}) => {
  const arrayValues = Object.values(value);
  return (
    <div className="tile-container">
      {arrayValues.map((objectValues, index) => {

      if(index === 0) {
        return <p className='tile-title' key={index}> {objectValues} </p>; 
      }
        else
        {
      return <p className='tile' key={index}> {objectValues} </p>;}
      })
      } 
    </div>

    
  );
};
