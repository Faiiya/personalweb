import React from "react"
import "../style/main.scss"
import NavBar from "../components/navbar"
import Layout from "../components/layout"
import Scroll from "../components/scrollbutton"
const IndexPage = () => (
  <Layout>
    <section className="hero">
      <div className="texthero">
        <h1>Manuel Moreno<p>software developer</p></h1>
        <p>Vestibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
          Maecenas eu suscipit leo. Quisque sit amet molestie justo, at ultrices lorem. Nam ullamcorper eleifend nisi. 
          Integer vel erat dui. Fusce ullamcorper imperdiet dapibus. Integer vehicula scelerisque odio vel vestibulum.</p>
      </div>
      <Scroll/>
    </section>
    <section className="test1">
      <p>Vestibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
        Maecenas eu suscipit leo. Quisque sit amet molestie justo, at ultrices lorem. Nam ullamcorper eleifend nisi. 
        Integer vel erat dui. Fusce ullamcorper imperdiet dapibus. Integer vehicula scelerisque odio vel vestibulum.</p>
      <p>Vestibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
        Maecenas eu suscipit leo. Quisque sit amet molestie justo, at ultrices lorem. Nam ullamcorper eleifend nisi. 
        Integer vel erat dui. Fusce ullamcorper imperdiet dapibus. Integer vehicula scelerisque odio vel vestibulum.</p>
      <p>Vestibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
      Maecenas eu suscipit leo. Quisque sit amet molestie justo, at ultrices lorem. Nam ullamcorper eleifend nisi. 
      Integer vel erat dui. Fusce ullamcorper imperdiet dapibus. Integer vehicula scelerisque odio vel vestibulum.</p>
    </section>
  </Layout>
)
 

export default IndexPage
