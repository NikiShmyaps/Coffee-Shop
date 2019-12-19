import React, { Component } from "react";
import "./coffeeShop.sass";
import CoffeeItem from "../coffeeItem/coffeeItem";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import WithService from "../hoc/withService";
import {connect} from "react-redux";
import {dataLoaded, dataRequsted, dataError} from "../../actions";

class CoffeeShop extends Component {
  state = {
    arr: []
  }

  componentDidCatch() {
    this.props.dataRequsted();
    const {Service} = this.props;
    Service.getBestsellers()
      .then(res => this.props.dataLoaded(res))
      .catch(() => this.props.dataError());
  }
  componentWillMount() {
    this.props.Service.getBestsellers().then(items => {this.setState({arr: items})})
  }

  render() {
    const {loading, error, background, sectionTitle} = this.props;
    console.log(this.state.arr);
    if (error) {
      return (
        <div style={{background: `url(${background}) center center/cover no-repeat`}}
        className="list-wrap"
        >
          <Error/>
        </div>
      );
    }
    if (loading) {
      return (
        <div style={{background: `url(${background}) center center/cover no-repeat`}}
        className="list-wrap"
        >
          <Spinner/>
        </div>
      );
    }

    return (
      <div style={{background: `url(${background}) center center/cover no-repeat`}}
        className="list-wrap"
      >
        <h1 className="main-title">{sectionTitle}</h1>
        <div className="list">
          <CoffeeItem item={this.state.arr}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    arr: state.arr,
    loading: state.loading,
    error: state.error
  };
};

const MapDispatchToProps = dispatch => {
  return {
    dataLoaded: newData => {
      dispatch(dataLoaded(newData));
    },
    dataRequsted: () => dispatch(dataRequsted()),
    dataError: () => dispatch(dataError())
  };
};

export default WithService()(connect(mapStateToProps, MapDispatchToProps)(CoffeeShop));