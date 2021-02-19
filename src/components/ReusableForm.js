import React from 'react';
import PropTypes from 'prop-types';

export default function ReusableForm(props){
  return (
    <>
      <h1>FORM</h1>
        <form onSubmit={props.formSubmissionHandler}>
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
          <button type='submit'>{props.buttonText}</button>
        </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};