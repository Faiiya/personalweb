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
            <div className={"navbar "+this.state.scrolled}>

            </div>
        )
    }

    handleScroll(){
        this.setState({ scrolled: window.scrollY < 75 ? "notscrolled" : "scrolled" });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    componentDidMount() {
        console.log(document.scrollY);
        window.addEventListener("scroll", this.handleScroll);
    }
  
}

export default NavBar
