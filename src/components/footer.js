import React from 'react';
import "../Cards.css";
import galvanizeG from '../images/galvanize-G.svg';

const Footer = () =>
  <div>
    <footer className="bootstrap-style footer-legacy clearfix -redesign">
      <div className="container">
        <div className="col-md-12">
      <table className="table" width="100%" cellPadding="0" cellSpacing="0">
        <tbody>
        <tr>
          <td className="hidden-sm hidden-xs">
            <a href="http://www.galvanize.com">
              <img id="logo" src={galvanizeG} className="galvanizeG" alt="Galvanize G Logo" />
            </a>
          </td>
          <td width="20" className="hidden-sm hidden-xs">
          </td>
          <td className="footerNavContainer">
            <div className="footerNav">
              <ul className="menuFooter">
                <li className="menuItems">
                  <a className="menuAbout" title="About" href="http://www.galvanize.com/about/">ABOUT</a>
                  <a className="menuFAQ" title="FAQ" href="http://www.galvanize.com/faq/">FAQ</a>
                  <a className="menuPress" title="Press" href="http://www.galvanize.com/press/">PRESS</a>
                  <a className="menuCareers" title="Careers" href="http://www.galvanize.com/careers/">CAREERS</a>
                  <a className="menuLogin" title="Login" href="http://www.members.galvanize.com">LOGIN</a>
                </li>
              </ul>
            </div>
            <div>
            <p></p>
          </div>
          <br></br>
            <div className="address">
              <address>
                <strong>Galvanize, Inc.</strong>
                <br></br>
                  1062 Delaware Street
                <br></br>
                  Denver, CO 80204
                <br></br>
              </address>
            </div>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
    </div>
    </footer>
  </div>

export default Footer;
