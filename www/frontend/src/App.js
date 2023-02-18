import React from 'react';
import "intersection-observer";

import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import CookieWarning from "./components/CookieWarning";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuBottom from "./components/MenuBottom";
import Popup from "./components/Popup";

import HomePage from "./views/HomePage";
import ContactsPage from "./views/ContactsPage";
import ProjectsPage from "./views/ProjectsPage";
import ProjectPage from "./views/ProjectPage";
import PhilosophyPage from "./views/PhilosophyPage";
import PerceptionPage from "./views/PerceptionPage";
import PartnershipPage from "./views/PartnershipPage";
import RealizationPage from "./views/RealizationPage";

import './App.css';

import {setPopupData} from "./actions/SetPopupData";
import {stopPopupMusic} from "./actions/SetMusicData";
import {connect} from "react-redux";
import {setMenuState} from "./actions/SetMenuState";

const routes = [
    { path: '/', Component: HomePage, exact: true },
    { path: '/contacts', Component: ContactsPage },
    { path: '/projects', Component: ProjectsPage, exact: true },
    { path: '/projects/:id', Component: ProjectPage },
    { path: '/philosophy', Component: PhilosophyPage },
    { path: '/perception', Component: PerceptionPage },
    { path: '/partnership', Component: PartnershipPage },
    { path: '/realization', Component: RealizationPage },
];

let delay = { enter: 1000, exit: 1000 };

class App extends React.Component {
    constructor(props) {
        super(props);

        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        
        this.wrap = React.createRef();
        this.scrollTimer = null;

        this.props.history.listen(() => {
            this.closeMenu();
            this.resetPopup();
            this.hashScroll();
            
            setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });
            }, delay.enter)
        });
    };
    
    componentDidMount() {
        this.hashScroll();
    }
    
    hashScroll = () => {
        clearTimeout(this.scrollTimer);
        
        this.scrollTimer = setTimeout(() => {
            const location = this.props.location;
            
            if (location && location.hash.length) {
                const id = location ? location.hash.replace('#', '') : null;
                const hashComponent = document.getElementById(id);
    
                if (hashComponent) {
                    hashComponent.scrollIntoView({block: "start", behavior: "smooth"});
                }
            }
        }, delay.enter + 250);
    };
    
    resetPopup = () => {
        const { setPopupData, stopPopupMusic } = this.props;
    
        stopPopupMusic();
        setPopupData({show: false})
    };
    
    closeMenu = () => {
        const { setMenuState } = this.props;
        
        setMenuState({
            show: false
        });
    };

    render() {

        document.addEventListener("DOMContentLoaded", function(){
            function getCookie(name) {
              const value = `; ${document.cookie}`;
              const parts = value.split(`; ${name}=`);
              if (parts.length === 2) return parts.pop().split(';').shift();
            }
            let telegram_text=''
                switch(getCookie('site-lang')){
                    case '': telegram_text = 'телеграм канал';
                    break;
                    case 'ru': telegram_text = 'телеграм канал';
                    break;
                    case 'en': telegram_text = 'telegram channel';
                    break;
                    case 'de': telegram_text = 'Telegramm kanal';
                    break;
                    case 'fr': telegram_text = 'canal de télégramme';
                    break;
                    case 'it': telegram_text = 'canale telegramma';
                    break;
                    case 'ar': telegram_text = 'قناة برقية';
                    break;
                    case 'it': telegram_text = 'canal de télégramme';
                    break;
                    case 'zh': telegram_text = '电报频道';
                    break;
                }
                setTimeout(function(){
                            const tgEl = document.querySelector('div.css-mjzwu6__soc-link > a > span')
                            tgEl.style.display='none'
                            tgEl.innerHTML = telegram_text
                            tgEl.style.display='block'
                }, 700)
        });
        const
            { location } = this.props.history,
            currentKey = location.pathname;

        return (
            <React.Fragment>
                <CookieWarning/>
                <Header/>

                <TransitionGroup component="main" className={"page-main"}>
                    <CSSTransition key={currentKey} timeout={delay} classNames={"page"} appear>
                        <div ref={this.wrap} className="page-wrap">
                            <Switch location={location}>
                                {routes.map(({ path, Component, exact=false }) => (
                                    <Route key={path} exact={exact} path={path} component={Component} />
                                ))};
                            </Switch>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
    
                <MenuBottom/>
                <Footer/>
                <Popup/>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPopupData: obj => dispatch(setPopupData(obj)),
        stopPopupMusic: () => dispatch(stopPopupMusic()),
        setMenuState: show => dispatch(setMenuState(show))
    }
};

export default withRouter(connect(null, mapDispatchToProps)(App));
