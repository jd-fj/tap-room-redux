import React from 'react';
import PropTypes from 'prop-types';

export default function KegDetail(props){
  const {keg, onClickingDelete, onClickingSell, onClickingEdit} = props;

  return (
    <>
      <h1>About This Beer</h1>
      <h3>The {keg.name} from {keg.brewery}</h3>
      <h5>Description: {keg.description}</h5>
      <h5>ABV: {keg.abv}</h5>
      <h5>Price: ${keg.price}</h5>
      {keg.pints === 0 ? <h5>No More Pints Left</h5> : <h5>{keg.pints}</h5>} 
      <button onClick={()=> onClickingDelete(keg.id)}>Delete Keg</button>
      {keg.pints > 0 ? <button onClick={()=> onClickingSell(keg.id)}>Sell a Pint from this Keg</button> : null}
      <button onClick={() => onClickingEdit(keg)}>Edit Keg Deets</button>
      <hr/>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingSell: PropTypes.func,
  onClickingEdit: PropTypes.func
};