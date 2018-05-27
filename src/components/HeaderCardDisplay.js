import React from 'react'
import Grid from 'material-ui/Grid';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from "styled-components"
import Link from 'gatsby-link'

const StyledLink = styled(Link)`
  color: black;
`;
const Paper = styled.div`
  -webkit-box-shadow: 6px 7px 11px -5px rgba(138,133,138,1);
  -moz-box-shadow: 6px 7px 11px -5px rgba(138,133,138,1);
  box-shadow: 6px 7px 11px -5px rgba(138,133,138,1);
  height: 250px;
  width: 309px;
  display: inline-flex;
  justify-content: center;
  text-align: center;
`
class HeaderCardDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }
  componentWillMount() {
    this.setState({ loading: false})
  }
  render() {
    const plainCard = (key, text, color) => {
      return (<Paper key={key} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 250}} >
          {text}
      </Paper>)
    }
    const cards =this.state.loading ? [] : this.props.items.map(({ title, id, isComponent, component, color, path }) => (
      <Grid key={id || title} xs={12} sm={12} md={4} lg={4} item >
        { isComponent ? <StyledLink to={path}><Paper>{component}</Paper></StyledLink> : plainCard(id, title, color)}
    </Grid>
    ))
    // const cards = this.state.loading ? [] : this.props.items.map(({ title, id, isComponent, component, color, path }) => (
    //   <Col key={id || title} col={2} xs={2} sm={2} smOffset={4} xsOffset={4} md={2} lg={2} xl={2} justifyContent='center' alignSelf='center' auto={true}>
    //     { isComponent ? <StyledLink to={path}><Paper >{component}</Paper></StyledLink> : plainCard(id, title, color)}
    // </Col>
    // ))
    return this.state.loading ? <div>loading</div> : (
      <div style={{  textAlign: 'center' }} >
        <Row >
            {cards}
        </Row>
      </div>
    )}
}

export default HeaderCardDisplay
