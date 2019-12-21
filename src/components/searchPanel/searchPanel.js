import React, { Component } from "react";
import "./searchPanel.sass";
import WithService from "../hoc/withService";
import {connect} from "react-redux";
import {findItems, dataLoaded} from "../../actions";

class SearchPanel extends Component {
  onInputChange(event) {
    const { find } = this.props;
    if (event.target.value === "") {
      const { Service } = this.props;
      Service.getCoffee()
        .then(res => this.props.dataLoaded(res))
        .catch(() => this.props.dataError());
    } else {
      find(event.target.value);
    }
  }
  render() {
    return (
      <div className="search-wrap">
        <div className="search-title">Looking for</div>
        <input
          onChange={e => this.onInputChange(e)}
          className="search-input"
          placeholder="start typing here..."
        ></input>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dataLoaded: newData => {
      dispatch(dataLoaded(newData));
    },
    find: findData => dispatch(findItems(findData))
  };
};

export default WithService()(connect(mapStateToProps, mapDispatchToProps)(SearchPanel));