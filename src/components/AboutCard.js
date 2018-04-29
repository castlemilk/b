import React from 'react'
import Paper from 'material-ui/Paper';

import {Motion, spring} from 'react-motion';
import MtSvgLines from 'react-mt-svg-lines';
import AboutPanel from './AboutPanel';
import AboutAnimation from './AboutAnimation';
class AboutCard extends React.Component {
  constructor() {
      super();
      this.state = {
        isHover: false,
      }
  }
  handleHover(active) {
    this.setState({ isHover: active})
  }
  getSpringProps() {
   return {
     defaultStyle: {
       scale: 1.15,
       marginTop: 0,
       marginLeft: 0,
       imageOpacity: 0.7,
       opacity: 0,
       fontSize: 25,
     },
     style:{
       scale: spring(this.state.isHover ? 1 : 1.15),
       marginTop: spring(this.state.isHover ? 0 : 0),
       marginLeft: spring(this.state.isHover ? 0 : 0),
       imageOpacity: spring(this.state.isHover ? 0.4 : 0.7),
       opacity: spring(this.state.isHover ? 1 : 0),
       fontSize: spring(this.state.isHover ? 35 : 30)
     },
   };
 }
  render() {
    return (
      <Paper
        onMouseOver={() => this.handleHover(true)}
        onMouseOut={() => this.handleHover(false)}
        style={{ height: 250, width: 309}}>

        <div className="container" style={{ height: 250}}>
          <Motion {...this.getSpringProps()}>
            {tweenCollection => {
             let styleTitle = {
                marginTop: tweenCollection.marginTop +'%',
                marginLeft: tweenCollection.marginLeft +'%',
                zIndex: 10,
                position: 'absolute',
                fontSize: tweenCollection.fontSize,
             };
             return (
              <div className="subcontainer">
                <div className="animation-1">
                <AboutAnimation />
                </div>
                <div className="title-subcontainer">
                  <div className="title-content" style={styleTitle}>
                      <AboutPanel />
                    </div>
                  </div>
                </div>
             )
           }}
          </Motion>
        </div>

      </Paper>
    )
}
}
export default AboutCard