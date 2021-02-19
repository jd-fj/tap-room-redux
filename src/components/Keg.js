import React from 'react';
import PropTypes from 'prop-types';

export default function Keg(props){
  return (
    <>
      <div onClick= {() => props.whenKegClicked(props.id)}>
        <h2>{props.name}</h2>
        <h4>Brewery: {props.brewery}</h4>
        <h4>Description: {props.description}</h4>
        <h4>ABV: {props.abv}</h4>
        <h4>price: {props.price}</h4>
        {props.pints === 0 ? <h3>We're out!</h3> : <h4>Pints Left: {props.pints}</h4>}
        <hr/>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewery: PropTypes.string,
  abv: PropTypes.number,
  description: PropTypes.string,
  price: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}