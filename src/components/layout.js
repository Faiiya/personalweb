/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavBar from "../components/navbar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar/>
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Big Boss
          {` `}
          <div id="lipsum">
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla sed ipsum in lobortis. Nullam euismod lectus non pulvinar fermentum. Donec mollis commodo libero, a dapibus neque. Morbi at bibendum sapien, vitae tempus lorem. Ut ac elementum dolor. Cras commodo, tortor a aliquam aliquam, metus ligula volutpat mauris, non bibendum urna tellus id odio. Duis luctus arcu eu nibh dictum rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque dui eros, vehicula in massa id, mollis lacinia enim. Etiam at scelerisque tellus, id varius diam. Vestibulum sagittis nisl metus, at vehicula urna suscipit cursus. Vestibulum libero leo, laoreet nec dolor sit amet, pretium fermentum erat. Morbi a nunc convallis, elementum turpis quis, congue magna. Integer vitae metus a eros consectetur convallis. Duis ultrices nulla magna, congue bibendum justo gravida at. Fusce sollicitudin massa vitae placerat hendrerit.
</p>
<p>
Proin hendrerit faucibus lobortis. Phasellus sed mauris eu lectus convallis consectetur nec condimentum eros. Duis nec ex aliquam, consequat metus a, eleifend massa. Aenean varius eros quis molestie fringilla. Nulla facilisi. Vestibulum laoreet semper tortor commodo auctor. Sed aliquet est non pharetra viverra. Vestibulum nisl tortor, dictum in mattis eget, volutpat blandit massa. Vestibulum quis dui nulla. Quisque in quam facilisis, tempor dolor vel, ultrices dolor. Aliquam ac sodales lacus. Praesent tristique dignissim gravida. Integer tempor fermentum risus ac finibus.
</p>
<p>
Aenean posuere neque dapibus felis lacinia, a vehicula velit pharetra. Quisque nec malesuada ligula. Proin tempus urna eu enim faucibus porta vel quis augue. Sed accumsan porttitor nibh, bibendum lobortis libero vestibulum vel. Proin sed molestie nisl. Suspendisse potenti. Nulla eget felis dapibus, commodo sapien vel, aliquet nunc. Donec magna enim, molestie quis dui ac, finibus commodo enim. Praesent fringilla libero eu nisi facilisis vehicula. In hendrerit mauris lorem, sed ultrices ante blandit eu. Donec eu risus risus.
</p>
<p>
Cras finibus, augue eget tempor iaculis, tortor felis volutpat lorem, at convallis mi diam a leo. Quisque finibus quam vel bibendum auctor. Vestibulum congue lacinia tellus vitae dapibus. Aliquam auctor malesuada odio, in finibus odio pulvinar ut. Integer nec lectus nisl. Maecenas est est, imperdiet in fermentum at, ultricies at sem. Morbi dapibus neque quis tincidunt suscipit. Proin neque libero, rhoncus sit amet mattis vitae, tempus ac ante. Quisque ac justo in magna finibus tristique. Maecenas auctor ut purus in scelerisque. Sed blandit magna lacus, eget iaculis sem aliquam id. Nullam sed magna ut lorem mollis egestas. In posuere egestas metus a tempor. Sed non lorem nec tellus ultrices laoreet.
</p>
<p>
Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed efficitur, massa ullamcorper interdum auctor, magna tortor imperdiet ligula, feugiat semper velit lectus vel odio. Vestibulum malesuada bibendum eros ut rutrum. Nunc efficitur, erat id vestibulum egestas, felis magna aliquam ante, luctus dictum orci est in tortor. Nam porttitor, nisi facilisis pulvinar ullamcorper, nibh magna imperdiet quam, vel ultricies sem ex hendrerit erat. Maecenas eu suscipit leo. Quisque sit amet molestie justo, at ultrices lorem. Nam ullamcorper eleifend nisi. Integer vel erat dui. Fusce ullamcorper imperdiet dapibus. Integer vehicula scelerisque odio vel vestibulum.
</p></div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
