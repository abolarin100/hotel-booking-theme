import React, { useState, useEffect } from 'react';
import '../css/Searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faCalendar, faLocation } from '@fortawesome/free-solid-svg-icons';

import Ba from '../images/travel1.jpg';
import Ca from '../images/bed4.jpg';
import Ha from '../images/bed5.jpg';
import Ja from '../images/bed6.jpg';
import Ka from '../images/bed7.jpg';

function Searchbar() {
    const [selectedValue, setSelectedValue] = useState('London, UK'); // Set an initial value here

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    // Use useEffect to set a default value when the component mounts
    useEffect(() => {
        setSelectedValue('London, UK');
    }, []);

    return (
        <div className="searchbar">
            <div className="search">
                <h5>
                    <ion-icon name="search-outline"></ion-icon> Search any things...
                </h5>
                <p>
                    Tuesday, October 17, 2023{' '}
                    <ion-icon name="notifications-outline"></ion-icon>
                </p>
            </div>
            <div className="highlight">
                <div className="image">
                    {/* <img src={Ba} alt="" className="image" height='100px' width='600px'/> */}
                </div>
                <div className="frm">
                    <div className="custom-dropdown">
                        <select value={selectedValue} onChange={handleSelectChange}>
                            <option value="London, UK">Where Are You Going?</option>
                            <option value="Paris, France">Paris, France</option>
                            <option value="Zanzibar, Uganda">Zanzibar, Uganda</option>
                            <option value="Lagos, Nigeria">Lagos, Nigeria</option>
                        </select>
                        <div className="icon">
                            <FontAwesomeIcon icon={faLocation} />
                        </div>
                    </div>
                    <hr />
                    <div className="custom-dropdown">
                        <select value={selectedValue} onChange={handleSelectChange}>
                            <option value="London, UK">Check-in Date</option>
                            <option value="Paris, France">Paris, France</option>
                            <option value="Zanzibar, Uganda">Zanzibar, Uganda</option>
                            <option value="Lagos, Nigeria">Lagos, Nigeria</option>
                        </select>
                        <div className="icon">
                            <FontAwesomeIcon icon={faCalendar}  />
                        </div>
                    </div>
                    <hr />
                    <div className="custom-dropdown">
                        <select value={selectedValue} onChange={handleSelectChange}>
                            <option value="London, UK">3 adults</option>
                            <option value="Paris, France">Paris, France</option>
                            <option value="Zanzibar, Uganda">Zanzibar, Uganda</option>
                            <option value="Lagos, Nigeria">Lagos, Nigeria</option>
                        </select>
                        <div className="icon">
                            <FontAwesomeIcon icon={faUser}  />
                        </div>
                    </div>
                    <button className="btn-btn">Search</button>
                </div>
            </div>
            <div className="main-highlight">
                <div className="main-header">
                    <h2 className="main-title">Trending Destinations</h2>
                </div>
                <div className="detail-wrapper">
                    <div className="detail-card">
                        <div className="detail-img"  alt="" />
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Montmartre,France</h4>
                                <p className="detail-sub">
                                    Visiting the best Tourist areas chosen by the audience
                                </p>
                                <p className="price">$450,000.00</p>
                            </div>

                            
                            <ion-icon
                                class="detail-favourite"
                                name="star" 
                            > </ion-icon> <span>4/5</span>
                        </div>
                    </div>
                    <div className="detail-card">
                        <div className="detail-img"  alt="" />
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>Instanbul, Turkey</h4>
                                <p className="detail-sub">
                                One of the best selling tours to Turkey and its regions
                                </p>
                                <p className="price">$600,000.00</p>
                            </div>

                            
                            <ion-icon
                                class="detail-favourite"
                                name="star" 
                            > </ion-icon> <span>5/5</span>
                        </div>
                    </div>
                    <div className="detail-card">
                        <div className="detail-img"  alt="" />
                        <div className="detail-desc">
                            <div className="detail-name">
                                <h4>London, UK</h4>
                                <p className="detail-sub">
                                    Visiting the best Tourist areas in London for your holiday..
                                </p>
                                <p className="price">$360,000.00</p>
                            </div>

                            
                            <ion-icon
                                class="detail-favourite"
                                name="star" 
                            > </ion-icon> <span>4/5</span>
                        </div>
                    </div>
                </div>
            </div>

            
          <div className="main-detail">
            <h2 className="main-title">Best offers</h2>

            {/* detail  */}

            <div className="offer-wrapper">
              <div className="offer-card">
                <img className='offer-img' src={Ca} alt="" />
                <div className="offer-desc">
                  <div className="offer-name">
                    <h4>7Seasons Apartments</h4>
                    <p className="offer-sub"><ion-icon  name="pin"></ion-icon> Kensinton / London</p>
                    <p className="price">$65.00 / Night</p>
                  </div>
                  <ion-icon class="offer-favourite" name="heart-outline"></ion-icon>

                </div>

              </div>
              {/* detail wrapper */}
              <div className="offer-card">
                <img className='offer-img' src={Ha} alt="" />
                <div className="offer-desc">
                  <div className="offer-name">
                    <h4>Along With The Villa</h4>
                    <p className="offer-sub"><ion-icon  name="pin"></ion-icon> Budapest / Hungray</p>
                    <p className="price">$65.00 / Night</p>
                  </div>
                  <ion-icon class="offer-favourite" name="heart-outline"></ion-icon>

                </div>

              </div>
              {/* detail wrapper */}
              <div className="offer-card">
                <img className='offer-img' src={Ja} alt="" />
                <div className="offer-desc">
                  <div className="offer-name">
                    <h4>Resort and Recreation</h4>
                    <p className="offer-sub"><ion-icon  name="pin"></ion-icon> Williamstreet / Lagos</p>
                    <p className="price">$65.00 / Night</p>
                  </div>
                  <ion-icon class="offer-favourite" name="heart-outline"></ion-icon>

                </div>

              </div>
              {/* detail wrapper */}
              <div className="offer-card">
                <img className='offer-img' src={Ka} alt="" />
                <div className="offer-desc">
                  <div className="offer-name">
                    <h4>Beautiful and Classy</h4>
                    <p className="offer-sub"><ion-icon  name="pin"></ion-icon> Zanzibar / Tanzania</p>
                    <p className="price">$65.00 / Night</p>
                  </div>
                  <ion-icon class="offer-favourite" name="heart-outline"></ion-icon>

                </div>

              </div>
              {/* detail wrapper */}
              </div>
              </div>
        </div>
    );
}

export default Searchbar;
