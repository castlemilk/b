import React from 'react'
import ReactRevealText from 'react-reveal-text'
import styled from 'styled-components'
import Link from 'gatsby-link'
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: 'Prompt';
  font-weight: bold;
  font-size: ${props => props.size}px;
  .header-content span {
    font-family: 'Prompt';
  }
`

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { show: false, loading: true, windowWidth: 1700 }
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this)
  }
  componentWillUnmount () {
    typeof window !== 'undefined' &&
      window.removeEventListener('resize', this.handleWindowSizeChange)
    clearTimeout(this.transitionTimeout)
  }
  handleWindowSizeChange () {
    typeof window !== 'undefined' &&
      setTimeout(this.setState({ windowWidth: window.innerWidth }))
  }
  componentDidMount () {
    this._ismounted = true
    this.transitionTimeout = setTimeout(() => {
      if (this._ismounted) {
        this.setState({ show: true })
      }
    }, 1000)
    setTimeout(window.addEventListener('resize', this.handleWindowSizeChange))
    typeof window !== 'undefined' &&
      setTimeout(
        this.setState({
          windowWidth: window.innerWidth,
          loading: false
        })
      )
  }
  render () {
    const { windowWidth } = this.state
    return (
      <StyledLink to='/' size={windowWidth <= 480 ? 35 : 60}>
        <div className='header-content'>
          <ReactRevealText show={this.state.show}>BEN EBSWORTH</ReactRevealText>
        </div>
      </StyledLink>
    )
  }
}

export default Header
