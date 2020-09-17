import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink";
const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from curriculum</h1>
    <p>Welcome to page curriculum</p>
    <AniLink cover to="/" hex="#F6AD55"
    className="custombutton mr-3 z-3 py-2 px-4 text-orange-400 font-semibold border-2 border-orange-400 rounded bg-opacity-25 bg-black hover:bg-orange-400 hover:text-white hover:bg-opacity-75"
    >
        BACK
    </AniLink>
    <p className="mt-8 text-xl font-light leading-relaxed">
              estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
            Maecenas eu suscipit leo.
              </p>
              <p className="mt-8 text-xl font-light leading-relaxed">
              estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
            Maecenas eu suscipit leo.
              </p>
              <p className="mt-8 text-xl font-light leading-relaxed">
              estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
            Maecenas eu suscipit leo.
              </p>
              <p className="mt-8 text-xl font-light leading-relaxed">
              estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
            Maecenas eu suscipit leo.
              </p>
              <p className="mt-8 text-xl font-light leading-relaxed">
              estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
            Maecenas eu suscipit leo.
              </p>
              <p className="mt-8 text-xl font-light leading-relaxed">
              estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
            Maecenas eu suscipit leo.
              </p>
  </Layout>
)

export default SecondPage
