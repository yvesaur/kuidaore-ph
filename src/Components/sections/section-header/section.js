import React, { Component } from 'react';
import './section.css';
import Brand from '../../miscelleous/brand/brand';
import GrabBtn from '../../buttons/grab-offer/grab-btn';
import Tiles from '../section-tiles/tiles/tiles';
import Specs from '../section-specs/specs';
import SpecOffer from '../spec-offer/specOffer';
import Stacked from '../stacked-photos/stacked';
import Map from '../../miscelleous/Map';
import Footer from '../../navigation/footer/footer';

let back = <Brand />;
class section1 extends Component {

    state = {
        cls1: "circle",
        brand: false
    }
    componentDidMount() {
        setTimeout(() => this.clickBtn(1), 3000);

    }
    clickBtn(valv) {
        if (valv === 1) {
            back = <Brand show />;

            this.setState({ cls1: "full" });
        }
    }
    render() {
        return (
            <div style={{ overflowY: "hidden" }}>
                <section className="Header">
                    {this.props.children}
                    {back}
                    <div className="button-offer">
                        <GrabBtn url="/offers" content="Grab Offer" />
                    </div>
                </section>
                <section className="sec-tiles">

                    <Tiles data={this.props.data.cards} />
                </section>
                <section className="specs">
                    <Specs />
                </section>
                <section className="specOffer">
                    <SpecOffer data={this.props.data.mainoffer} />
                </section>
                <section className="sec-stacked">
                    <Stacked />
                </section>
                <section className="sec-map">
                        <div class="map-container">
                            <iframe class="map-frame" src="https://maps.google.com/maps?width=10%25&amp;height=auto&amp;hl=en&amp;q=Seryna%20Japanese%20Restaurant,%202277%20Chino%20Roces%20Ave,%20Legazpi%20Village,%20Makati,%201230%20Metro%20Manila+(KUIDAOIRE)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{height:"50vh",width:"100vh"}}><a href="https://www.mapsdirections.info/en/custom-google-maps/">Create a custom Google Map</a> by <a href="https://www.mapsdirections.info/en/">Measure area on map</a></iframe>
                        </div>                  
                </section>
                <Footer />
            </div>
        );
    }

}
export default section1;