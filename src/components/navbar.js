import React from 'react';
import "../Cards.css";
import galvanize from '../images/galvanize-logo.svg';
import eventbrite from '../images/eventbrite.jpg'

const NavBar = () =>


      <div className={'navbar'}>
        <a href="https://www.galvanize.com/denver-golden-triangle" target="_blank">
          <img className="galvanize-logo" src={galvanize} alt="galvanize logo" />
        </a>
        <a href="https://www.eventbrite.com/d/ny--new-york/galvanize/?q=galvanize&loc=New+York%2C+NY&date=" target="_blank">
          <img className="eventbrite-logo" src={eventbrite} title="RSVP" alt="rsvp"/>
        </a>
      </div>



export default NavBar;
