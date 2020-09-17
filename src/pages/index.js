import React, { useState } from "react"
import "../style/main.scss"
import Scroll from "../components/scrollbutton"
import SplitSection from '../components/splitsection';
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import AniLink from "gatsby-plugin-transition-link/AniLink";

function IndexPage() {
  const [load, setLoad] = useState(0);
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

 return (
    <>
      <section className="hero">
        <BackgroundImage
            className="bgimg"
            style={{maxWidth:'100%'}}
            objectFit="cover"
            fluid={data.file.childImageSharp.fluid}
            onLoad={() => setLoad("loaded")}
        >
          <div className={"texthero bold "+load}>
          <h1>Manuel Moreno<p>software developer</p></h1>
          <p className="sm:w-full md:w-1/2">Interesado en la tecnologia desde pequeño, afrontar nuevos proyectos cada vez mas ambiciones es una de mis mayores pasiones.</p>
          <div>
            <h3 className="text-lg">¿Preparado para ser el siguiente?</h3>
            <div className="mt-4">
              <AniLink  className="custombutton mr-3 z-3 py-2 px-4 text-orange-400 font-semibold border-2 border-orange-400 rounded bg-opacity-25 bg-black hover:bg-orange-400 hover:text-white hover:bg-opacity-75"
                        paintDrip 
                        to="contact" 
                        hex="#F6AD55"
                        duration={1}>
                Contratame</AniLink>
              <AniLink  className="custombutton     z-3 py-2 px-4 text-orange-400 font-semibold border-2 border-orange-400 rounded bg-opacity-25 bg-black hover:bg-orange-400 hover:text-white hover:bg-opacity-75"
                        paintDrip 
                        to="curriculum" 
                        hex="#F6AD55"
                        duration={1}>
                Curriculum</AniLink>
            </div>
          </div>
          </div>
          <Scroll/>
        </BackgroundImage>   
      </section>
      <section className="test1 bg-white mb-0 pb-0">
        <h2 className="center py-10 font-bold text-6xl">Mis proyectos</h2>
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
    </>
    )
}

export default IndexPage

/**
 *           
 */