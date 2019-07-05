/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

import "../../theme/variables.scss"
import "../../theme/main.scss"
import "../../theme/main.scss"
import "../../theme/theme.scss"

import Navigation from "../navigation/navigation"

class Layout extends React.Component {

  render() {
    return <>
      <Navigation siteTitle={this.props.data.site.siteMetadata.title}/>
      {this.props.children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ({ children }) => (
  <StaticQuery
    query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
    render={(data) => (
      <Layout data={data}>
        {children}
      </Layout>
    )}
  />
)
