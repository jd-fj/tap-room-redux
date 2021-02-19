import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

export default function NewKegForm(props){

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brewery: event.target.brewery.value,
      description: event.target.description.value,
      abv: event.target.abv.value,
      price: event.target.price.value,
      pints: event.target.pints.value,
      id: v4()
    });
  }

  return (
    <>
      <form onSubmit={handleNewKegFormSubmission}>
        <input 
          type='text'
          name='name'
          placeholder='Beverage Name' />
        <input 
          type='text'
          name='brewery'
          placeholder='Brewery' />
          <textarea
            name='description'
            placeholde='Beverage Description' />
        <input 
          type='float'
          name='abv'
          placeholder='ABV number' />
        <input 
          type='float'
          name='price'
          placeholder='Price Per Pint' />
        <input 
          type='number'
          name='pints'
          placeholder='Enter 127 for New Keg' />
        <button type='submit'>Add New Keg</button>
      </form>
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};