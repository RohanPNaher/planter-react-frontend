import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const GardenDetails = () => {
  const location = useLocation()
  const garden = location.state.garden

  return (
    <>
      {garden.name}
    </>
  );
}
 
export default GardenDetails;