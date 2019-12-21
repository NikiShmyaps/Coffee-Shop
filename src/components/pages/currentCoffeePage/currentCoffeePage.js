import React, { Component } from "react";
import "./currentCoffeePage.sass";
import Header from "../../header/header";
import CurrentCoffee from "../../currentCoffee/currentCoffee";
import Footer from "../../footer/footer";
import WithService from "../../hoc/withService";
import {
  setCurrentCoffee,
  dataLoaded,
  dataRequsted,
  dataError
} from "../../../actions";
import { connect } from "react-redux";

class CurrentCoffeePage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.props.dataRequsted();
  //   this.props.Service.getCoffee()
  //     .then(res => this.props.dataLoaded(res))
  //     .catch(() => this.props.dataError());
  // }
  componentDidMount() {
    this.props.setCurrentCoffee(this.props.id);
    this.props.Service.getCoffee()
    .then(items => {this.props.dataLoaded(items)})
    .catch(dataLoaded)
  }
  render() {
    const { coffee } = this.props;
    const [data] = coffee;
    return (
      <div>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Header />
              </div>
            </div>
            <h1 className="title-big">Our Coffee</h1>
          </div>
        </div>
        <CurrentCoffee data={data} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    coffee: state.currentCoffee,
    mas: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentCoffee: currentCoffee => {
      dispatch(setCurrentCoffee(currentCoffee));
    },
    dataLoaded: newData => {
      dispatch(dataLoaded(newData));
    },
    dataRequsted: () => dispatch(dataRequsted()),
    dataError: () => dispatch(dataError())
  };
};

export default WithService()(
  connect(mapStateToProps, mapDispatchToProps)(CurrentCoffeePage)
);