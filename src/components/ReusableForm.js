import React from 'react';
import PropTypes from 'prop-types';

export default function ReusableForm(props){
  
  return (
    <>
      <h1>FORM</h1>
        <form onSubmit={props.formSubmissionHandler} className='form-group'>
          <input className='form-control'
            type='text'
            name='name'
            defaultValue={props.kegName}
            placeholder='Beverage Name' />
          <input className='form-control'
            type='text'
            name='brewery'
            defaultValue={props.kegBrewery}
            placeholder='Brewery' />
          <input className='form-control'
            type='text'
            name='description'
            defaultValue={props.kegDescription}
            placeholder='Beverage Description' />
          <input className='form-control'
            type='float'
            name='abv'
            defaultValue={props.kegAbv}
            placeholder='ABV number' />
          <input className='form-control'
            type='float'
            name='price'
            defaultValue={props.kegPrice}
            placeholder='Price Per Pint' />
          <input className='form-control'
            type='number'
            name='pints'
            defaultValue={props.kegPints}
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