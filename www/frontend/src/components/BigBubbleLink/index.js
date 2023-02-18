import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import Button from '../../components/Button';
import { InView } from 'react-intersection-observer';
import ParallaxWrap from "../ParallaxWrap";
import fonts from "../../constants/fonts";


const css_style = css({
    display: 'block',
    position: 'relative',
    width: '100%',
    
    '&__parallax-wrap': {
        display: 'block',
        position: 'relative',
        width: '90%',
        margin: '0 auto',
    },
    
    '&__button-wrap': {
        display: 'block',
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        marginTop: '40px',
        pointerEvents: 'auto'
    },
    
    '&__content': {
        ...styles.rh(),
        display: 'block',
        position: 'relative',
        width: '100%',
        zIndex: '2'
    },
    
    '&__bg': {
        ...styles.absolute(),
        width: '100%',
        height: '100%',
        zIndex: '1',
    },
    
    '&__text': {
        ...fonts.d4,
        color: styles.colors.white,
        textAlign: 'center'
    },
    
    '&__link': {
        width: '65px',
        height: '65px',
    },
    
    '&__text-container': {
        ...styles.absolute(),
        width: '80%',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    '&__bubble': {
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        
        'span': {
            display: 'block',
            position: 'relative',
            width: '100%',
            height: '100%',
            filter: 'blur(5px)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            transform: 'rotate(90deg)',
            transformOrigin: '50% 50%'
        }
    },

   '&__parallax-wrap._show-img &': {
        '&__bubble': {
            'span': {
                backgroundImage: `url(${require('../../images/bubbles/video-bg.png')})`
            }
        },
   },
    
    [styles.bp(1500)]: {
        '&__button-wrap': {
            marginTop: '32px',
        },
    },
    
    [styles.bp(1300)]: {
        '&__button-wrap': {
            marginTop: '28px',
        },
    },
    
    [styles.bp(900)]: {
        '&__button-wrap': {
            marginTop: '15px',
        },
    },
    
    [styles.bp(700)]: {
        marginTop: '55px',
        
        '&__button-wrap': {
            marginTop: '12px',
        },
        
        '&__text-container': {
            maxWidth: '220px'
        }
    }
});

class BigBubbleLink extends React.Component {
    constructor(props) {
        super(props);
        
        this.loaded = false;
    }
    
    onChange = (inView) => {
        if (!this.loaded) {
            if (inView) {
                this.loaded = true;
            }
        }
    };
    
    render() {
        const { text, link } = this.props.data;
        
        return (
            <div className={`${css_style}`}>
                <div className={`${css_style}__container`}>
                    <InView rootMargin='50%' onChange={this.onChange} >
                        {({ inView, ref }) => {
                            return (
                                <div ref={ref} className={`${css_style}__in-view-container`}>
                                    <ParallaxWrap className={`${css_style}__parallax-wrap ${(inView || this.loaded) ? '_show-img' : ''}`}>
                                        <div className={`${css_style}__content js-layer`} data-depth={2}>
                                            <div className={`${css_style}__text-container`}>
                                                {text &&
                                                    <span className={`${css_style}__text`}>
                                                        {require('html-react-parser')(text)}
                                                    </span>
                                                }
                                                {link &&
                                                    <div className={`${css_style}__button-wrap`}>
                                                        <Button data={{
                                                            link: link,
                                                            mod: '_icon icon-plus',
                                                        }}/>
                                                    </div>
                                                }
                                            </div>
                                        </div>
        
                                        <div className={`${css_style}__bg`}>
                                            <div className={`${css_style}__bubble js-layer`} data-depth={1.3}>
                                                <span className={`js-layer`}  />
                                            </div>
                                        </div>
                                    </ParallaxWrap>
                                </div>
                            )
                        }}
                    </InView>
                </div>
            </div>
        )
    }
}

export default BigBubbleLink

