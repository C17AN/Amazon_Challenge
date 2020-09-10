import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12341413"
            title="The lean Startup: How Constant Innovation Creates Radically Successful
          Businesses Paperback"
            price={19.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
          <Product
            id="71717192"
            title="amFilm Tempered Glass Screen Protector for Nintendo Switch 2017 (2-Pack)"
            price={7.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61mJu3spvUL._SL1414_.jpg"
          />
          {/* product Component */}
        </div>
        <div className="home__row">
          <Product
            id="191929231"
            title="AmazonBasics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display"
            price={9.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg"
          />
          <Product
            id="1828282119"
            title="Hestia Goods Switch Carrying Case for Nintendo Switch, with 20 Games Cartridges Protective Hard Shell Travel Carrying Case Pouch for Nintendo Switch Console & Accessories, Black"
            price={12.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81%2BcJVR3%2B0L._SL1500_.jpg"
          />
          <Product
            id="41741192"
            title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse (Black)"
            price={39.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg"
          />
          {/* product Component */}
          {/* product Component */}
          {/* product Component */}
        </div>
        <div className="home__row">
          <Product
            id="21932949"
            title="Samsung 49-Inch CRG9 Curved Gaming Monitor (LC49RG90SSNXZA) – 120Hz Refresh, Ultrawide Screen QLED Computer Monitor, 5120 x 1440p Resolution, 4ms Response, FreeSync 2 with HDR, HDMI"
            rating={5}
            price={1199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg"
          />
          {/* product Component */}
        </div>
      </div>
    </div>
  );
}

export default Home;
