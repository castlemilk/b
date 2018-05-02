import React from 'react'
import styled from "styled-components"
import {Motion, spring} from 'react-motion';
import Paper from 'material-ui/Paper';

import * as d3 from "d3";

const BlogWrapper = styled.div`
  .paper-wrapper:hover {
    text-shadow: 2px 2px 5px #903fb9;
    font-size: 40px;
  }
`
const BlogTitle = styled.div`
  z-index: 10;
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 309px;
  height: 250px;
  font-family: 'Days One';
  font-size: 30px;
`
class BlogCard2 extends React.Component {

  constructor(props) {
      super(props);
      // this.startAnimation = this.startAnimation.bind(this)
      // this.stopAnimation = this.startAnimation.bind(this)
      this.getSpringProps = this.getSpringProps.bind(this)
      this.margin = {top: 0, right: 0, bottom: 0, left: 0};
      this.width = 309 - this.margin.left - this.margin.right;
      this.height = 250 - this.margin.top - this.margin.bottom;
      this.rect = [0,0, this.width - 0, this.height - 0];
      this.n = 20;
      this.m = 4;
      this.padding = 6;
      this.maxSpeed = 100;
      this.radius = d3.scaleSqrt().range([0, 8]);
      this.color = d3.scaleOrdinal(d3.schemeSet3).domain(d3.range(this.m));
      this.nodes = [];

      for (let i of d3.range(this.n) ){
      this.nodes.push({radius: this.radius(1 + Math.floor(Math.random() * 4)),
        color: this.color(Math.floor(Math.random() * this.m)),
        x: this.rect[0] + (Math.random() * (this.rect[2] - this.rect[0])),
        y: this.rect[1] + (Math.random() * (this.rect[3] - this.rect[1])),
        speedX: (Math.random() - 0.5) * 2 *this.maxSpeed,
        speedY: (Math.random() - 0.5) * 2 *this.maxSpeed});
      }


  }
  generateAnimation() {
    this.generateObjects()
    this.force = d3.forceSimulation()
    .nodes(this.nodes)
    .on("tick", tick)
    .alpha(1)
    .alphaDecay(0.0001)
    .stop()
    var { circle, rect, nodes, padding, radius } = this
    function tick() {
      function gravity(alpha) {
        return function(d) {
        if ((d.x - d.radius - 2) < rect[0]) d.speedX = Math.abs(d.speedX);
        if ((d.x + d.radius + 2) > rect[2]) d.speedX = -1 * Math.abs(d.speedX);
        if ((d.y - d.radius - 2) < rect[1]) d.speedY = -1 * Math.abs(d.speedY);
        if ((d.y + d.radius + 2) > rect[3]) d.speedY = Math.abs(d.speedY);

        d.x = d.x + (d.speedX * alpha);
        d.y = d.y + (-1 * d.speedY * alpha);

        };
      }
      function collide(alpha) {
        var quadtree = d3.quadtree(nodes);
        return function(d) {
          var r = d.radius + radius.domain()[1] + padding,
          nx1 = d.x - r,
          nx2 = d.x + r,
          ny1 = d.y - r,
          ny2 = d.y + r;
          quadtree.visit(function(quad, x1, y1, x2, y2) {
          if (quad.point && (quad.point !== d)) {
            var x = d.x - quad.point.x,
            y = d.y - quad.point.y,
            l = Math.sqrt(x * x + y * y),
            r = d.radius + quad.point.radius + (d.color !== quad.point.color) * padding;
            if (l < r) {
            l = (l - r) / l * alpha;
            d.x -= x *= l;
            d.y -= y *= l;
            quad.point.x += x;
            quad.point.y += y;
          }
        }
        return x1 > nx2
        || x2 < nx1
        || y1 > ny2
        || y2 < ny1;
        });
        };
      };
      circle
      .each(gravity(0.1))
      .each(collide(.5))
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
      }
  }
  collide(alpha) {
    var quadtree = d3.geom.quadtree(nodes);
    return function(d) {
      var r = d.radius + radius.domain()[1] + padding,
      nx1 = d.x - r,
      nx2 = d.x + r,
      ny1 = d.y - r,
      ny2 = d.y + r;
      quadtree.visit(function(quad, x1, y1, x2, y2) {
      if (quad.point && (quad.point !== d)) {
        var x = d.x - quad.point.x,
        y = d.y - quad.point.y,
        l = Math.sqrt(x * x + y * y),
        r = d.radius + quad.point.radius + (d.color !== quad.point.color) * padding;
        if (l < r) {
        l = (l - r) / l * alpha;
        d.x -= x *= l;
        d.y -= y *= l;
        quad.point.x += x;
        quad.point.y += y;
      }
    }
    return x1 > nx2
    || x2 < nx1
    || y1 > ny2
    || y2 < ny1;
    });
    };
  }
  componentDidMount() {
    this.generateAnimation();
  };
  getSpringProps() {
   return {
     defaultStyle: {
       opacity: 0,
     },
     style:{
       opacity: spring(this.state.isHover ? 1 : 0),
     },
   };
 }
  startAnimation() {
    console.log('starting')
    this.force.restart()
    d3.select(".container-blog").select("svg").selectAll("*").attr("opacity", 1)
  }
  stopAnimation() {
    console.log('stopping')
    this.force.stop();
    d3.select(".container-blog").select("svg").selectAll("*").attr("opacity", 0)
  }


  generateObjects() {
    this.svg = d3.select(".container-blog").append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    this.circle = this.svg.selectAll("circle")
      .data(this.nodes)
      .enter().append("circle")
      .attr("r", function(d) { return d.radius; })
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .style("fill", function(d) { return d.color; })
  }


  // Move nodes toward cluster focus.

  render() {
    return (
      <BlogWrapper>
        <Paper className="paper-wrapper"
          onMouseEnter={() => this.startAnimation()}
          onMouseLeave={() => this.stopAnimation()}
          style={{ height: 250, width: 309, display: 'inline-block'}}>
          <div className="container-blog" style={{ height: 250, position: 'absolute'}}>
            <BlogTitle>
                Blog

            </BlogTitle>
          </div>
        </Paper>
      </BlogWrapper>
    )
}
}
export default BlogCard2
