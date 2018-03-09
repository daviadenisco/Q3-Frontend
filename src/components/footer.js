import React from 'react';
import "../Cards.css";
import galvanizeG from '../images/galvanize-G.svg';
import Bootstrap from 'react-bootstrap';

const Footer = () => <div>
  <footer className="bootstrap-style footer-legacy clearfix -redesign">
    <div className="container">
      <div className="">
        <span>
          <table className="table" width="100%" cellPadding="0" cellSpacing="0">
            <tr>
              <td className="hidden-sm hidden-xs">
                <a href="http://www.galvanize.com">
                  <img id="logo" src={galvanizeG} className="galvanizeG" alt="Galvanize G Logo"/>
                </a>
              </td>

              <td className="">

                  <div className="">
                    <li className="menuItems">
                      <a className="menuAbout" title="About" href="http://www.galvanize.com/about/">ABOUT</a>
                      <a className="menuFAQ" title="FAQ" href="http://www.galvanize.com/faq/">FAQ</a>
                      <a className="menuPress" title="Press" href="http://www.galvanize.com/press/">PRESS</a>
                      <a className="menuCareers" title="Careers" href="http://www.galvanize.com/careers/">CAREERS</a>
                      <a className="menuLogin" title="Login" href="http://www.members.galvanize.com">LOGIN</a>
                      <a></a>
                      <span>
                      <div id="rightSide" className="right side">
                        <span>
                          <a id="hireOur">Hire Our</a><a className="techTalent" href="https://talent.galvanize.com">
                            Tech Talent</a> </span>
                            <a className="spacing">......</a>
                        <li className="socialIcons">
                          <a href="https://twitter.com/galvanize">
                            <i id="icons" className="fab fa-twitter fa-fw fa-lg"></i>
                          </a>
                        </li>
                        <li className="socialIcons">
                          <a href="https://www.facebook.com/GalvanizeHQ">
                            <i id="icons" className="fab fa-facebook-f fa-fw fa-lg"></i>
                          </a>
                        </li>
                        <li className="socialIcons">
                          <a href="https://instagram.com/GalvanizeHQ">
                            <i id="icons" className="fab fa-instagram fa-fw fa-lg"></i>
                          </a>
                        </li>
                        <li className="socialIcons">
                          <a href="https://www.linkedin.com/company/galvanize-it">
                            <i id="icons" className="fab fa-linkedin-in fa-fw fa-lg"></i>
                          </a>
                        </li>
                        <li className="socialIcons">
                          <a href="https://plus.google.com/104456246601890468626/posts">
                            <i id="icons" className="fab fa-google-plus-g fa-fw fa-lg"></i>
                          </a>
                        </li>
                        <li className="socialIcons">
                          <a href="https://www.youtube.com/channel/UC6CFuXHLJQ_30gOxUTEFj_g">
                            <i id="icons" className="fab fa-youtube fa-fw fa-lg"></i>
                          </a>
                        </li>
                      </div>
                    </span>

                    </li>
                    <li></li>
                  </div>

                  <div>
                    <p></p>
                    <span>

                    <div className="address">
                      <address>
                        <strong>Galvanize, Inc.</strong>
                        <br></br>
                        1062 Delaware Street
                        <br></br>
                        Denver, CO 80204
                      </address>

                    </div>
                  </span>

                </div>

              </td>
            </tr>
          </table>
        </span>
      </div>
    </div>
  </footer>
</div>

export default Footer;
