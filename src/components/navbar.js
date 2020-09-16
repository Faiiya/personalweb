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
            <header className={"navbar "+this.state.scrolled}>
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            </header>
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
