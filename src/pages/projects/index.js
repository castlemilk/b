import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Projects from '../../components/Projects'

const BlogIndexPage = () => (
  <div>
    <Helmet
      key='app-head'
      titleTemplate='%s · Projects'
      defaultTitle='Ben Ebsworth'
      meta={[
        { name: 'description', content: 'Ben Ebsworth' },
        {
          name: 'keywords',
          content:
            'Blog, technology, software engineering, about, personal, ben ebsworth, telstra, digio, projects, open source'
        }
      ]}
    >
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <title>Ben Ebsworth</title>
      <meta
        name='keywords'
        content='Blog, technology, software engineering, about, personal, ben ebsworth, telstra, digio, projects, open source'
      />
      <meta name='apple-mobile-web-app-title' content='benebsworth.com' />
      <meta name='application-name' content='benebsworth.com' />
      <meta name='theme-color' content='#c800ec' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#c800ec' />
    </Helmet>
    <Projects />
  </div>
)

export default BlogIndexPage
