import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EditKegForm from './EditKegForm';
import * as a from './../actions';

export default class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedKeg: null,
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null){
      const { dispatch } = this.props;
      const action1 = a.toggleEditing();
      dispatch(action1);
      this.setState({
        selectedKeg: null,
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleEditing();
    dispatch(action);
    console.log( this.props)
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    const action2 = a.toggleEditing();
    dispatch(action);
    this.setState({ 
      selectedKeg: null 
    });
    dispatch(action2)
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }
  
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    this.setState({ selectedKeg: null });
  }

  handleSellingPint = (id) => {
    const { dispatch } = this.props;
    const selectedKeg = this.props.masterKegList[id];
    const newPints = selectedKeg.pints - 1;
    const updatedKeg = {...selectedKeg, pints: newPints}
    const action = a.addKeg(updatedKeg);
    dispatch(action);
    this.setState({ selectedKeg: updatedKeg });
  }

  render(){
    let currentlyVisibleState = null;
    let btnText = null;

    if (this.props.editing){
      currentlyVisibleState =
      <EditKegForm
      keg={this.state.selectedKeg}
      onEditKeg={this.handleEditingKegInList}
      />
      btnText = "Return to Keg List"
    }
    else if (this.state.selectedKeg != null) {
      currentlyVisibleState = 
      <KegDetail 
      keg={this.state.selectedKeg} 
      onClickingSell={this.handleSellingPint} 
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick}/>
      btnText = "Return to Keg List";
    }
    else if (this.props.formVisible){
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      btnText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
      btnText = "Add Keg";
    }

    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{btnText}</button>
      </>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object, 
  formVisible: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisible: state.formVisible,
    editing: state.editing
  }
}

KegControl = connect(mapStateToProps)(KegControl);
