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
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null){
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } =this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, brewery, abv, description, price, pints, id } = kegToEdit;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({ 
      editing: false,
      selectedKeg: null 
    });
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brewery, abv, description, price, pints, id } = newKeg;
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
    this.setState({
      ...this.state, 
      selectedKeg: null,
      masterKegList: this.state.masterKegList.map((keg) => {
        if (keg.id === id) {
          return{
            ...keg,
            pints: (keg.pints -1)
          };
        }
      return keg; 
      })
    })
  }

  render(){
    let currentlyVisibleState = null;
    let btnText = null;

    if (this.state.editing){
      currentlyVisibleState =
      <EditKegForm
      keg={this.state.selectedKeg}
      onEditKeg={this.handleEditingKegInList} //this adds updated keg info from EditKegForm to KegList
      />
      btnText = "Return to Keg List"
    }
    else if (this.state.selectedKeg != null) {
      currentlyVisibleState = 
      <KegDetail 
      keg={this.state.selectedKeg} 
      onClickingSell={this.handleSellingPint} 
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick}/> //this toggles the EditKeg form to appear
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
    formVisible: state.formVisible
  }
}

KegControl = connect(mapStateToProps)(KegControl);
