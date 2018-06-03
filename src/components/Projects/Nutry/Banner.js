import React from 'react';
import { Link } from 'gatsby-link';
// import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import TweenOne from 'rc-tween-one';
import ScrollParallax from 'rc-scroll-anim/lib/ScrollParallax';
import QueueAnim from 'rc-queue-anim';
import NutryAnimationOne from './components/NutryAnimationOne';
import BannerWrapper from './BannerWrapper';
import messages from './messages';
const loop = {
  duration: 3000,
  yoyo: true,
  repeat: -1,
};

export default class Banner extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    // const { isMobile } = this.props;
    return (
      <BannerWrapper >
        <div className="home-page-wrapper banner-wrapper" id="banner">
          <div className="banner-bg-wrapper">
            <svg width="400px" height="576px" viewBox="0 0 400 576" fill="transparent">
              <TweenOne component="g" animation={[{ opacity: 0, type: 'from' }, { ...loop, y: 15 }]}>
                <ellipse id="Oval-9-Copy-4" cx="100" cy="100" rx="10" ry="10" stroke="#2F54EB" strokeWidth="1.6" />
              </TweenOne>
              <TweenOne component="g" animation={[{ opacity: 0, type: 'from' }, { ...loop, y: -15 }]}>
                <g transform="translate(200 450)">
                  <g style={{ transformOrigin: '50% 50%', transform: 'rotate(-340deg)' }}>
                    <rect stroke="#FADB14" strokeWidth="1.6" width="13" height="13" />
                  </g>
                </g>
              </TweenOne>
            </svg>

            <ScrollParallax location="banner" className="banner-bg" animation={{ playScale: [1, 1.5], rotate: 1 }} />
          </div>
          <QueueAnim className={'banner-page'} type="alpha" delay={150}>
            <QueueAnim
              className="text-wrapper"
              key="text"
              type="bottom"
            >
              <h1 key="h1">
              Nutry
            </h1>
              <p key="p">
                <FormattedMessage {...messages.introduce} />
              </p>
              <div className='buttons-wrapper' >
              <div key="button-search" className="buttons" style={{ marginTop: 24 }} >
                  <FormattedMessage {...messages.search} />
              </div>
              <div key="button-enterprise" className="buttons" style={{ marginTop: 24 }} >
                  <FormattedMessage {...messages.enterprise} />
              </div>
              </div>

            </QueueAnim>
            <div className="img-wrapper" key="image" >
              <NutryAnimationOne />
            </div>
          </QueueAnim>
        </div>
      </BannerWrapper>
    );
  }
}
