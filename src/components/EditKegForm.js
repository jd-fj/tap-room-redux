import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

export default function EditKegForm(props){
  const { keg } = props;
  function handleEditKegFormSubmission(event){
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brewery: event.target.brewery.value,
      description: event.target.description.value,
      abv: event.target.abv.value,
      price: event.target.price.value,
      pints: event.target.pints.value,
      id: keg.id
    });
  }

  return (
    <>
      <ReusableForm 
          defaultValue={keg.name}
          buttonText="Update Keg"
          formSubmissionHandler={handleEditKegFormSubmission}
          />
    </>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
}