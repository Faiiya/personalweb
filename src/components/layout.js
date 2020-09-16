/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import NavBar from "../components/navbar"


const Layout = ({ children }) => {

  return (
    <div className="wrapper">
      <NavBar/>
      <main >{children}</main>
      <footer className="bg-black text-white w-full">
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
