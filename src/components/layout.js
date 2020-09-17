/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import NavBar from "../components/navbar"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {

  return (
    <div className="wrapper">
      <NavBar/>
      <Helmet>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </Helmet>
      <main >{children}</main>
      <footer className="bg-black text-white w-full z-30">
        <div className="p-5">
        © {new Date().getFullYear()}, Big Boss {` `}
        </div>  
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
