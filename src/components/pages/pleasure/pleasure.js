import React, {Component} from "react";
import Header from "../../header";
import AboutUs from "../../aboutUs/";
import Goods from "../../goods/goods";
import Footer from "../../footer";
import Error from "../../error/error";
import "./pleasure.sass";

class Pleasure extends Component {
  state = { error: false };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <Error />;
    }
    return(
      <div>
        <div className="wrapper" style={{background: `url(${process.env.PUBLIC_URL + "/img/Plesaure_bg.jpg"})`}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Header/>
              </div>
            </div>
            <h1 className="title-big">For your pleasure</h1>
          </div>
        </div>
        <AboutUs
          title="About our goods"
          img={process.env.PUBLIC_URL + '/img/coffee_pleasure.png'}
          pOne="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
          pTwo="Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face."
        />
        <div className="container">
          <Goods/>
        </div>
        <Footer/>
      </div>
    );
  }
};

export default Pleasure;