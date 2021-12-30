import React, { useState } from 'react';

const Tour = (props) => {
  const [readmore, setReadmore] = useState(true);
  const [read, setRead] = useState("Read More");
  const {id, name, info, image, price} = props.tour;
  const changereadmore = () => {
    setReadmore(false);
    setRead("Show Less");
  }
  const changeshowless = () => {
    setReadmore(true);
    setRead("Read More");
  }
  return (<article className = "single-tour">
            <img src={image} alt={name}/>
            <footer>
              <div className = "tour-info">
                <h4>{name}</h4>
                <h4 className = "tour-price">{price}</h4>
              </div>
              <p>{readmore?
                <>{info.slice(0,200)}...<button onClick = {changereadmore}>{read}</button></>
                  :<>{info}<button onClick = {changeshowless}>{read}</button></>}
              </p>
              
              <button className ="delete-btn"
              onClick= {() => props.notInterested(id)}>Not Interested</button>
            </footer>
          </article>);
};

export default Tour;
 