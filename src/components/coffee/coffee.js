import React, { Component } from "react";
import "./coffee.sass";
import CoffeeItem from "../coffeeItem/coffeeItem";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import WithService from "../hoc/withService";
import {connect} from "react-redux";
import {dataLoaded, dataRequsted, dataError} from "../../actions";

class Coffee extends Component {
  componentDidMount() {
    this.props.Service.getCoffee()
    .then(items => {this.props.dataLoaded(items)})
    .catch(dataLoaded)
  }

  render() {
    const {data, loading, error} = this.props;
    if (error) {
      return (
        <Error/>
      );
    }
    if (loading) {
      return (
        <Spinner/>
      );
    }

    return(
      <>
        <div className="our-list">
          {data.map((item, index) => (
            <CoffeeItem 
              key={index} 
              item={item}
              pageTitle="/our-coffee/"/>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dataLoaded: items => {
      dispatch(dataLoaded(items));
    },
    dataRequsted: () => dispatch(dataRequsted()),
    dataError: () => dispatch(dataError())
  };
};

export default WithService()(
  connect(mapStateToProps, mapDispatchToProps)(Coffee)
);