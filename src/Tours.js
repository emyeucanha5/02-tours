import React, { useState }  from 'react';
import Tour from './Tour';
import { memo } from "react";


const Tours = (props) => {
  const [tours, setTour] = useState(props.data);
  
  const notInterested = (id) => {
      const tmp = tours.filter((tour) => {
        return tour.id !== id;
      });
      setTour(tmp);
      if(tmp.length === 0){
        props.refresh();
      }
  }
  return (
    <>
      {tours.map((tour) => {
        return <Tour tour = {tour} notInterested = {notInterested}/>
      })}
    </>
  );
};

export default memo (Tours);
 