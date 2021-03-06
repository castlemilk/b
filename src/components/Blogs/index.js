import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import icon16 from '../../assets/images/favicon.png'

import { blogs } from './tests/fixtures'
import BlogList from './BlogList'
import Header from '../Header'

const BlogsWrapper = styled.div``
const blogPosts = [
  {
    title: 'dog',
    description: 'cats dont like dogs',
    image: 'image would go here',
    link: 'link here',
    key: '1'
  },
  {
    title: 'dog',
    description: 'cats dont like dogs',
    image: 'image would go here',
    link: 'link here',
    key: '2'
  },
  {
    title: 'dog',
    description: 'cats dont like dogs',
    image: 'image would go here',
    link: 'link here',
    key: '3'
  }
]
export class Blogs extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <BlogsWrapper>
        <Grid style={{ textAlign: 'center', width: '100%' }}>
          <Header />
        </Grid>
        <BlogList items={blogs} />
      </BlogsWrapper>
    )
  }
}

export default Blogs
