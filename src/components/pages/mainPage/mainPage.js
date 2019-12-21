import React, {Component} from "react";
import Header from "../../header";
import HeaderMain from "../../headerMain";
import AboutUs from "../../aboutUs";
import Footer from "../../footer";
import CoffeeShop from "../../coffeeShop/coffeeShop";
import Error from "../../error/error";
import "./mainPage.sass";

class MainPage extends Component {
  state = { error: false };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render () {
    if (this.state.error) {
      return <Error />;
    }

    return (
      <div>
        <div className="preview" style={{background: `url(${process.env.PUBLIC_URL + "/img/Main_bg.jpg"})`}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Header/>
              </div>
            </div>
            <HeaderMain/>
          </div>
        </div>
        <AboutUs
          title="Avout us"
          img={null}
          pOne="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at.Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face."
          pTwo="Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend sonrepair day ladies now."
        />
        <div style={{background: `url(${process.env.PUBLIC_URL + '/img/paper.jpg'}) center center/cover no-repeat`}}
        className="list-wrap"
        >
          <CoffeeShop/>
        </div>
        <Footer/>
      </div>
    );
  }
};

export default MainPage;