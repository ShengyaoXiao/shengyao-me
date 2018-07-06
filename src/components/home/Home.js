import React, {Component} from 'react';
import {connect} from 'react-redux';

import {withRouter} from 'react-router';

import scrollToElement from 'scroll-to-element';

import {fetchProjects} from "../../redux/actions/projects";

import Navbar from "./NavBar";
import Header from './header/Header';

import homeSections from "./homeSection";

import "./home.css";

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentScroll: 0, 
            currentSection: ""
        };
    }

    componentWillMount = () => {
        this.props.fetchProjects();
    }

    // addEventListener for scroll event 
    componentDidMount = () => {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll); 
    }

    // scroll event handler: update current scroll and current section 
    handleScroll = event => {
        this._updateCurrentScroll();
        this._updateCurrentSection();
    }

    // onItemClickHandler 
    scrollToSection = sectionName => {
        // get the reference to the dom element
        const element = this._getPageElementFromKey(sectionName);
    
        // temporary hack, will implement a section in the page, dont have time to do it right now
        if(sectionName === "blog") {
            const win = window.open("https://medium.com", '_blank');
            win.focus();
        }            
        // ----

        if(!element) return;

        // call scrollToElement 
        scrollToElement(element, {
            offset: (this._getNavBarHeight()-1)*-1,
            ease: 'inOutQuad',
            duration: 600
        });
    }

    _updateCurrentScroll = () => this.setState( { currentScroll: this._getCurrentScroll() } ) 
   
    _getCurrentScroll = () => (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    // method needs to be called in scroll event handler 
    // determine which section the user is on, and set the state: currectionSection 
    _updateCurrentSection = () => {
        const { refs } = this;
        
        let inSection = false;

        for(let key in refs) {
            const boundingRect = this._getPageElementFromKey(key).getBoundingClientRect();

            if( boundingRect.top - this._getNavBarHeight() <= 0 ) {
                this._onEnterSection(key);
                inSection = true;
            }
        }

        if(this._isScrollBottom()) {
            // set state 
            this._onEnterSection("contact");
            inSection = true;
        }

        if(!inSection) {
            // set state 
            this._onEnterSection("");
        }
    };

    _isScrollBottom = () => window.innerHeight + window.scrollY >= document.body.offsetHeight;
    // set state currentSectiond
    _onEnterSection = sectionName => this.setState( { currentSection: sectionName } );
    _getNavBarHeight = () => this.navbar.getBoundingClientRect().height;
   
    // ref returns the reference to the element 
    _getPageElementFromKey = key => this.refs[key];

    render() {
        const {currentSection, currentScroll} = this.state;
        return (
            <div className="root-home"> 
                {/* nav bar  */}
                <div ref={element =>this.navbar = element}>
                    <Navbar items={homeSections} onItemClick={this.scrollToSection} currenSection={currentSection} currentScroll={currentScroll} />
                </div>
                
                {/* header  */}
                <Header />
                
                {/* sections  */}
                {
                    homeSections.filter(section =>section.component)
                    .map(section =>
                        <div key={section.name} ref={section.name}> 
                            { section.name === "work" ? <section.component onShowProjectDetails={() => this.scrollToSection("work")} /> : <section.component /> }
                        </div> 
                    )
                }
            </div>
        );
    }

}

const mapStateToProps = store => ({
    projects: store.projects
});

const mapDispatchToProps = dispatch => ({
    fetchProjects:(args) => dispatch(fetchProjects(args))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

