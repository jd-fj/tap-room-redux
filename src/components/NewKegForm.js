import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

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
      <ReusableForm 
          buttonText="Add New Keg"
          formSubmissionHandler={handleNewKegFormSubmission}/>
    </>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};