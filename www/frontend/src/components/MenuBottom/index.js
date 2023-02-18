import React from "react";
import { css } from "emotion";
import MusicButton from "../../components/MusicButton";
import SocialLink from "../../components/SocialLink";
import fonts from "../../constants/fonts";
import styles from "../../constants/styles";
import urls from "../../constants/urls";

const css_style = css({
    position: 'relative',
    width: '100%',
    height: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    zIndex: '99',
    pointerEvents: 'none',

    '&__sticky': {
        display: 'block',
        ...styles.absolute('auto'),
        width: '100%',
        paddingBottom: '50px',

        '&::before': {
            content: '""',
            ...styles.absolute('auto','0','0'),
            width: '100%',
            height: '315px',
            background: 'linear-gradient(0deg, rgba(18, 18, 138, 0.86) 0%, rgba(30, 30, 112, 0.28) 61%, rgba(62, 28, 166, 0) 94.44%)',
            zIndex: '0',
            opacity: '0',
            transition: styles.transitions.default,
        },
        
        '&._sticky': {
            position: 'fixed',
    
            '&::before': {
                opacity: '1'
            },
        },
    },
    
    '&__soc-link, &__music-button': {
        pointerEvents: 'auto',
    },
    
    '&__scroll-button': {
        ...styles.absolute('auto', 'auto', '0', '50%'),
        transform: 'translateX(-50%)',
        padding: '0 10px 40px',
        pointerEvents: 'auto',
        
        '.rotated-text': {
            ...fonts.p10,
            color: styles.colors.white,
            padding: '5px',
            boxSizing: 'content-box',
            maxHeight: '300px',
            transitionTimingFunction: 'linear',
            transitionProperty: 'opacity, max-height, padding',
            transitionDuration: '0.4s, 0s, 0s',
            transitionDelay: '0.5s, 0s, 0s'
        },
        
        '&::before, &::after': {
            content: '""',
            display: 'block',
            ...styles.absolute('auto'),
            height: '25px',
            width: '2px',
            background: styles.colors.aqua,
            transition: styles.transitions.default,
            transformOrigin: '50% 0'
        },
        
        '&._scroll-top': {
            width: '40px',
            cursor: 'pointer',
    
            '.rotated-text': {
                opacity: '0',
                padding: '0',
                maxHeight: '0',
                transitionTimingFunction: 'linear',
                transitionProperty: 'opacity, max-height, padding',
                transitionDuration: '0.5s, 0s, 0s',
                transitionDelay: '0s, 0.5s, 0.5s'
            },
            
            '&:hover': {
                '&::before, &::after': {
                    background: styles.colors.white
                }
            },
            
            '&::before': {
                transform: 'rotate(-45deg)'
            },
            
            '&::after': {
                transform: 'rotate(45deg)'
            }
        }
    },
    
    '&__wrap': {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
    },
    
    [styles.bp(1300)]: {
        '&__sticky': {
            paddingBottom: '30px',
        },
    },
    
    [styles.bp(700)]: {
        '&__sticky': {
            paddingBottom: '20px',
        },
        
        '&__scroll-button': {
            padding: '0 5px 28px',
        
            '.rotated-text': {
                padding: '5px',
                maxHeight: '150px',
            },
        
            '&::before, &::after': {
                height: '15px',
                width: '1px',
            },
        
            '&._scroll-top': {
                width: '30px',
            }
        },
    }
});

class MenuBottom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showArrow: false,
            isSticky: true
        };
    
        this.scrollTimer = null;
        this.scrollCheckIsReady = true;
        this.scrollStopDelay = 500;
        this.scrollWhileDelay = 500;
        
        this.wrap = React.createRef();
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this._checkSticky();
        this._checkArrowTimer();

        return fetch(urls.menu, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    ...responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    };

    handleScroll = () => {
        this._checkSticky();
        this._checkArrowTimer();
    };
    
    _checkSticky = () => {
        const { isSticky } = this.state;
        const position = this.wrap.current.getBoundingClientRect();
        
        if (position.bottom < window.innerHeight) {
            if (isSticky) {
                this.setState({
                    isSticky: false
                })
            }
        } else {
            if (!isSticky) {
                this.setState({
                    isSticky: true
                })
            }
        }
    };
    
    _checkArrowTimer = () => {
        clearTimeout(this.scrollTimer);
    
        this.scrollTimer = setTimeout(() =>  {
            this._checkOffset();
        }, this.scrollStopDelay);
    
        if (this.scrollCheckIsReady) {
            this.scrollCheckIsReady = false;
            this._checkOffset();
        
            setTimeout(() => {
                this.scrollCheckIsReady = true;
            }, this.scrollWhileDelay)
        }
    };
    
    _checkOffset = () => {
        const scrolledFirstScreen = window.scrollY > window.outerHeight / 10;
        const { showArrow } = this.state;
        
        if (scrolledFirstScreen) {
            if (!showArrow) {
                this.setState({
                    showArrow: true
                })
            }
        } else {
            if (showArrow) {
                this.setState({
                    showArrow: false
                })
            }
        }
    };
    
    scrollTop = () => {
        const { showArrow } = this.state;
        
        if (showArrow) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };
    
    render() {
        const { showArrow, isSticky, music, scroll_hint, soc_button } = this.state;
        const scrollButtonMod = showArrow ? '_scroll-top' : '';
        const stickyButton = isSticky ? '_sticky' : '';
        
        return (
            <div ref={this.wrap} className={`${css_style}`}>
                <div className={`${css_style}__sticky ${stickyButton}`}>
                    <div className={`${css_style}__container container`}>
                        <div className={`${css_style}__wrap`}>
                            {music &&
                                <div className={`${css_style}__music-button`}>
                                    <MusicButton data={music}/>
                                </div>
                            }
                            {scroll_hint &&
                                <div className={`${css_style}__scroll-button ${scrollButtonMod}`} onClick={this.scrollTop}>
                                    <div className='rotated-text'>
                                        <span>{scroll_hint}</span>
                                    </div>
                                </div>
                            }
                            {soc_button &&
                                <div className={`${css_style}__soc-link`}>
                                    <SocialLink data={soc_button} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuBottom;
