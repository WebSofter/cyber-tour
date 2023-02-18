import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";

import ChangeLangButton from "../../components/ChangeLangButton";

import { css } from "emotion";
import urls from "../../constants/urls";
import fonts from "../../constants/fonts";
import styles from "../../constants/styles";
import fetchQuery from "../../utils/fetch";
import MediaQuery from "react-responsive";

import Hamburger from '../../components/Hamburger';
import ScrollWrap from '../../components/ScrollWrap';
import {InView} from "react-intersection-observer";

import {RemoveScroll} from 'react-remove-scroll';

const css_style = css({
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: '50px 0',
    zIndex: '500',
    
    '&__logo-wrap': {
        position: 'relative',
        display: 'block',
        width: '248px'
    },
    
    '&__logo': {
        position: 'relative',
        display: 'block',
        width: '100%',
        marginRight: 'auto',
        transition: styles.transitions.default
    },

    '&__wrap': {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '80px',
        
        '& > *': {
            zIndex: '2'
        },
    },
    
    '&__sticky-container': {
        position: 'relative',
        display: 'block',
        height: '80px'
    },
    
    '&__sticky-block': {
        position: 'relative',
        display: 'block',
        width: '100%',
        top: '0',
        
        '&::before': {
            content: '""',
            ...styles.absolute('0','0','auto','50%'),
            width: "110%",
            height: "235%",
            transform: "translate(-50%, -30%)",
            transition: styles.transitions.default,
            opacity: '0',
            background: `url(${require("../../images/bg/header-bg.png")}) center center no-repeat`,
            backgroundSize: '100% 100%'
        }
        //
        // '&::before': {
        //     content: '""',
        //     ...styles.absolute('-200px','0','auto','50%'),
        //     width: "110%",
        //     height: "200%",
        //     transform: "translate(-50%, -40%)",
        //     transition: styles.transitions.default,
        //     background: `linear-gradient(45deg, ${styles.colors.blue_dark}, ${styles.colors.blue})`,
        //     filter: "blur(20px)"
        // }
    },
    
    '&__menu-wrap': {
        flex: '1 0 auto',
        maxWidth: '1050px',
        zIndex: '1',
        margin: '0 75px',
    },
    
    '&__menu': {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    
    '&__link': {
        position: 'relative',
        display: 'block',
        ...fonts.nav,
        color: styles.colors.white,
        margin: '0 10px',
        transition: styles.transitions.default,
        
        '&::before': {
            content: '""',
            ...styles.absolute('calc(100% + 8px)', '0', 'auto'),
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: styles.colors.aqua,
            opacity: '0',
            transition: styles.transitions.default
        },
        
        '&:hover': {
            color: styles.colors.aqua,
        },
        
        '&.active': {
            '&::before': {
                opacity: '1',
            },
        }
    },
    
    '&__hamburger-wrap': {
        marginRight: '40px'
    },
    
    '&__scroll-container': {
        width: '100%',
        minHeight: '100%',
        display: 'flex',
    },
    
    '&._sticky &': {
        '&__sticky-block': {
            position: 'fixed',
            transition: styles.transitions.default,
            
            '&::before': {
                opacity: '1'
                // top: '0'
            }
        },
    
        '&__logo': {
            width: '60%'
        },
    },

    [styles.bp(1500)]: {
        '&__menu-wrap': {
            margin: '0 50px'
        },
    },
    
    [styles.bp(1300)]: {
        padding: '35px 0',
        
        '&__wrap': {
            justifyContent: 'flex-end'
        },
        
        '&__menu-wrap': {
            ...styles.fixed(),
            height: "100%",
            width: "100%",
            maxWidth: "none",
            margin: "0",
            flex: "none",
            padding: '150px 20px 20px',
            transition: 'transform 0s linear, opacity 0.7s ease',
            transitionProperty: 'transform, opacity',
            transitionDelay: '1.4s, 0.7s',
            opacity: '0',
            transform: 'translateX(-110%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${require('../../images/bg/popup-bg.jpg')})`,
            
            '&::before': {
                content: '""',
                display: 'block',
                ...styles.absolute(),
                width: '100%',
                height: '100%',
                background: styles.colors.mask2,
                pointerEvents: 'none',
                zIndex: '-1'
            },
            
            '& > *': {
                opacity: '0',
                transition: 'opacity 0.7s ease',
                transitionDelay: '0s',
            }
        },
        '&__menu': {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: 'auto'
        },
   
        '&__logo-wrap': {
            width: '185px',
            marginRight: 'auto'
        },
    
        '&__link': {
            margin: '0 0 60px'
        },
        
        
        '&._show-menu &': {
            '&__menu-wrap': {
                transitionDelay: '0.3s, 0.4s',
                opacity: '1',
                transform: 'translateX(0)',
    
                '& > *': {
                    opacity: '1',
                    transitionDelay: '1.3s',
                }
            },
        }
    },
    
    [styles.bp(700)]: {
        padding: '20px 0',
        
        '&__menu-wrap': {
            paddingTop: '120px',
            backgroundImage: `url(${require('../../images/bg/popup-bg_mob.jpg')})`,
        },
    
        '&__logo-wrap': {
            width: '147px',
        },
        '&__hamburger-wrap': {
            marginRight: '0'
        },
        
        '&__link': {
            margin: '0 0 30px'
        },
        
        '&__wrap': {
            height: '60px',
        },
    
        '&__sticky-container': {
            height: '60px'
        },
    
        '&__sticky-block': {
            '&::before': {
                // filter: "blur(15px)"
            }
        },
    
        '&._sticky &': {
            '&__logo': {
                width: '70%'
            },
        },
    },
});

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSticky: false
        };
    
        this.testRef = React.createRef();
    }

    componentDidMount() {
        this.testRef.current.addEventListener('wheel', this.handleWheel, { passive: false });
        return fetchQuery.bind(this)({url: urls.header});
    }
    
    renderMenuLinks = (menu) => {
        const { lang } = this.state;
        //const { logo, menu, lang, isSticky } = this.state;
        
        return (
            <div className={`${css_style}__menu`}>
                {
                    menu.map((item, key) => {
                        return (
                            <NavLink key={key} to={item.link} className={`${css_style}__link`}>
                                {item.text}
                            </NavLink>
                        )
                    })
            
                }
                <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                    <ChangeLangButton data={lang}/>
                </MediaQuery>
            </div>
        )
    };
    
    renderMenu = (menu) => {
        return (
            <div className={`${css_style}__menu-wrap`}>
                <MediaQuery maxWidth={`${styles.breakpoints[1300]}px`}>
                    <ScrollWrap>
                        <div className={`${css_style}__scroll-container`}>
                            {
                                this.renderMenuLinks(menu)
                            }
                        </div>
                    </ScrollWrap>
                </MediaQuery>
    
                <MediaQuery minWidth={`${styles.breakpoints[1300] + 1}px`}>
                    {
                        this.renderMenuLinks(menu)
                    }
                </MediaQuery>
            </div>
        )
    };
    
    onChangeWindowEntering = (inView) => {
        this.setState({
            isSticky: !inView
        })
    };

    render() {
        const { logo, menu, lang, isSticky } = this.state;
        const { menuState } = this.props;
        const showMod = menuState.show ? ' _show-menu' : '';
        const stickyMod = isSticky ? ' _sticky' : '';

        console.log('header->lang->', lang)

        return (
            <div ref={this.testRef}  className={`${css_style} ${showMod}${stickyMod}`}>
    
                <RemoveScroll enabled={menuState.show} removeScrollBar={false}>
                    <InView threshold={1} className={`${css_style}__sticky-container`} as="div" onChange={this.onChangeWindowEntering}>
                        <div className={`${css_style}__sticky-block container`}>
                            <div className={`${css_style}__wrap`}>
                                {logo &&
                                <NavLink to={logo.link} className={`${css_style}__logo-wrap`}>
                                    <img src={logo.img} className={`${css_style}__logo`} alt={logo.alt}/>
                                </NavLink>
                                }
                
                                {menu &&
                                this.renderMenu(menu)
                                }
                
                                <MediaQuery maxWidth={`${styles.breakpoints[1300]}px`}>
                                    <div className={`${css_style}__hamburger-wrap`}>
                                        <Hamburger show={menuState.show}/>
                                    </div>
                                </MediaQuery>
                
                                {lang &&
                                <MediaQuery minWidth={`${styles.breakpoints[700] + 1}px`}>
                                    <ChangeLangButton data={lang}/>
                                </MediaQuery>
                                }
                            </div>
                        </div>
                    </InView>
                </RemoveScroll>
                
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        menuState: store.menu
    }
};

export default connect(mapStateToProps)(Header);
