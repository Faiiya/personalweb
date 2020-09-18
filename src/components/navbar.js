import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            scrolled:"",
            class:"",
        };

        this.handleScroll = this.handleScroll.bind(this);
    }
    render () {
        return (
            <div className={"bg-white sticky z-30 top-0 h-nv "+this.state.scrolled+this.state.class}>     
                <div className="flex flex-row justify-between py-4 px-10">
                    <div className="">logo</div>  
                    <div className="mx-3">
                        <AniLink  className="mx-3"
                                    cover 
                                    to="contact" 
                                    direction="down"
                                    bg="#FFFFFF"
                                    duration={1}>
                            Contratame</AniLink>
                        <AniLink  className="mx-3"
                                    cover 
                                    to="curriculum" 
                                    direction="down"
                                    bg="#FFFFFF"
                                    duration={1}>
                            Curriculum</AniLink>
                    </div>         
                    <AniLink  className=""
                                    swipe 
                                    direction="up"
                                    to="curriculum" 
                                    color="#FFFFFF"
                                    duration={1}>
                            Contacta conmigo!</AniLink>
                </div>
            </div>
        )
    }

    handleScroll(){
        if (this.state.scrolled !== ""){
            this.setState({ scrolled: window.scrollY < 75 ? "notscrolled" : "scrolled" });
        } 
        else{
            this.setState({ scrolled: window.scrollY < 75 ? "" : "scrolled" });
        }    
    }

    componentDidUpdate(){
        if(this.state.class === " navbar" && window.location.pathname !== "/"){
            this.setState({ class: "" });
        }   
        else if(this.state.class === "" && window.location.pathname === "/"){
            this.setState({ class: " navbar" });
        } 
    }
    
    componentWillUnmount() {
        if(this.state.class === " navbar"){
            window.removeEventListener('scroll', this.handleScroll);
        }     
    }

    componentDidMount() {
        if(window.location.pathname === "/"){
            this.setState({ class: " navbar" });
            window.addEventListener("scroll", this.handleScroll);        
        }      
    }
  
}

export default NavBar
