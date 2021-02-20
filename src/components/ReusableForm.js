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
            
            placeholder='Beverage Name' />
          <input className='form-control'
            type='text'
            name='brewery'
            placeholder='Brewery' />
          <input className='form-control'
            type='text'
            name='description'
            placeholder='Beverage Description' />
          <input className='form-control'
            type='float'
            name='abv'
            placeholder='ABV number' />
          <input className='form-control'
            type='float'
            name='price'
            placeholder='Price Per Pint' />
          <input className='form-control'
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