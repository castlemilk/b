import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FaGithub } from 'react-icons/lib/fa';
// import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import NutryLogo from './images/icon-120x120.png';
// import NutryTitle from './images/title-120x120.png';

import HeaderWrapper from './HeaderWrapper';

export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper >
        <div className="logo" >
        <a className="logo-link" >
          <img className="logo" alt="logo" src={NutryLogo} />
          {/* <img className="title" alt="Nutry" src={NutryTitle} /> */}
        </a>
        </div>
        <div className="github-link">
          <OutboundLink href="https://github.com/castlemilk/nutry" >
            <FaGithub style={{ fontSize: 70 , height: 105}} />
          </OutboundLink>
        </div>
      </HeaderWrapper>
    );
  }


}
