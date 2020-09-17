import React from "react"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            scrolled:""
        };

        this.handleScroll = this.handleScroll.bind(this);
    }
    render () {
        return (
            <div className={"navbar sticky z-30 top-0 h-nv "+this.state.scrolled}>                
                <div>

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

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        
    }
  
}

export default NavBar
