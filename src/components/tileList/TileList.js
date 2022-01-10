import React from "react";
import { Tile } from '../../components/tile/Tile';


export const TileList = ({data}) => {
  
  return (
    <div>
      {data.map( (value, index) => (<Tile key={index} value={value} />))}
    </div>
  );
}; 