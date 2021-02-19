import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default class KegControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisble: false,
      selectedKeg: null,
      // masterKegList: [
      //   {
      //     name: 'Goose Neck Pilsner',
      //     brewery: 'Pillsbury Brewery',
      //     abv: 6.7,
      //     description: 'has a pill-y, light flavor, great for the whole family',
      //     price: 10,
      //     pints: 1,
      //     id: "0"
      //   },
      //   {
      //     name: 'Chucks Brown Ale',
      //     brewery: 'Hilltop',
      //     abv: 8,
      //     description: 'Chunky, dark, malty flaves',
      //     price: 15,
      //     pints: 127,
      //     id: "1"
      //   },
      //   {
      //     name: 'PNW IPA',
      //     brewery: 'Moland Springs',
      //     abv: 8.8,
      //     description: 'Like sipping from a river',
      //     price: 14,
      //     pints: 127,
      //     id: "2"
      //   }
      // ]
    };
  }

  handleClick = () => {
    if(this.state.selectedKeg != null){
      this.setState({
        formVisible: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState =>({
        formVisible: !prevState.formVisible,
      }));
    }
  }

  
  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brewery, abv, description, price, pints, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      id,
      name,
      brewery,
      abv,
      description,
      price,
      pints,
    }
    dispatch(action);
    this.setState({ formVisible: false });
  }
  
  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
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

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} onClickingSell={this.handleSellingPint} onClickingDelete = {this.handleDeletingKeg}/>
      btnText = "Return to Keg List";
    }
    else if (this.state.formVisible){
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
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);
