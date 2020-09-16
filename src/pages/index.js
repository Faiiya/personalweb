import React from "react"
import "../style/main.scss"
import Layout from "../components/layout"
import Scroll from "../components/scrollbutton"
import SplitSection from '../components/splitsection';

const IndexPage = () => (
  <Layout>
    <section className="hero">
      <div className="texthero bold">
        <h1>Manuel Moreno<p>software developer</p></h1>
        <p>Vestibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
          Maecenas eu suscipit leo. Quisque sit amet molestie justo, at ultrices lorem. Nam ullamcorper eleifend nisi. 
          Integer vel erat dui. Fusce ullamcorper imperdiet dapibus. Integer vehicula scelerisque odio vel vestibulum.</p>
      </div>
      <Scroll/>
    </section>
    <section className="test1">
      <h2 className="center py-10 font-bold text-2xl">Mis proyectos</h2>
      <SplitSection
        id="services"
        primarySlot={
          <div className="lg:pr-32 xl:pr-48" data-aos="fade-up" data-aos-duration="1000">
            <h3 className="text-3xl font-semibold leading-tight">ASDASD ASDASDASD</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
            estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
          Maecenas eu suscipit leo.
            </p>
          </div>
        }
        secondarySlot={<p className="mt-8 text-xl font-light leading-relaxed" data-aos="fade-left" data-aos-duration="1000">
        estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
          Maecenas eu suscipit leo.
        </p>}
      />

      <SplitSection
            reverseOrder
            primarySlot={
              <div className="lg:pl-32 xl:pl-48" data-aos="fade-up" data-aos-duration="1000">
                <h3 className="text-3xl font-semibold leading-tight">
                  Scopper popper
                </h3>
                <p className="mt-8 text-xl font-light leading-relaxed">
                estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
          Maecenas eu suscipit leo.
                </p>
              </div>
            }
            secondarySlot={<p className="mt-8 text-xl font-light leading-relaxed" data-aos="fade-right" data-aos-duration="1000">
            estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
          Maecenas eu suscipit leo.
            </p>}
        />

        <SplitSection
          id="services"
          primarySlot={
            <div className="lg:pr-32 xl:pr-48" data-aos="fade-up" data-aos-duration="1000">
              <h3 className="text-3xl font-semibold leading-tight">Cosas increibles</h3>
              <p className="mt-8 text-xl font-light leading-relaxed">
              estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
          Maecenas eu suscipit leo.
              </p>
            </div>
          }
          secondarySlot={<p className="mt-8 text-xl font-light leading-relaxed" data-aos="fade-left" data-aos-duration="1000">
         estibulum ante ipsum primis in faucibus stibulum malesuada agnacilisis pem ex hendrerit erat. 
          Maecenas eu suscipit leo.
          </p>}
        />
    </section>
  </Layout>
)
 

export default IndexPage
