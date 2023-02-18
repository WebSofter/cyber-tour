import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import { Picture } from 'react-responsive-picture';
import { InView } from 'react-intersection-observer';
import ParallaxWrap from "../ParallaxWrap";
import fonts from "../../constants/fonts";
import BackgroundBlock from "../BackgroundBlock";
import BackgroundText from "../BackgroundText";

import {setPopupData} from "../../actions/SetPopupData";
import {connect} from "react-redux";
import MediaQuery from "react-responsive/src/Component";


const css_style = css({
    display: 'block',
    position: 'relative',
    width: '100%',
    margin: '80px 0',

    '&__container': {
        width: 'calc(100% / 12 * 4.5)',
        maxWidth: '620px',
        margin: '0 auto'
    },
    
    '&__parallax-wrap': {
        display: 'block',
        position: 'relative',
        width: '100%',
        pointerEvents: 'auto !important'
    },
    
    '&__bubble': {
        display: 'block',
        position: 'relative',
        borderRadius: '50%',
        overflow: 'hidden',
        width: '100%',
        cursor: 'pointer',
        zIndex: '3'
    },
    
    '&__bg': {
        display: 'block',
        position: 'relative',
        ...styles.rh(),
        zIndex: '1',

        '&::before': {
            content: '""',
            display: 'block',
            ...styles.absolute(),
            width: '100%',
            height: '100%',
            background: styles.colors.overlay,
            zIndex: '2'
        },

        'picture': {
            ...styles.absolute('50%', 'auto', 'auto', '50%'),
            transform: 'translate(-50%, -50%)',
            display: 'block',
            width: '120%',
            height: '120%',
            zIndex: '1',
        }
    },

    '&__text-parallax-container': {
        ...styles.absolute(),
        width: '80%',
        height: '80%',
        pointerEvents: 'none',
        zIndex: '5'
    },

    '&__text-wrap': {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    
    '&__img': {
        ...styles.absolute(),
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: styles.transitions.type2,
        zIndex: '1',
    },
    
    '&__bubble-bg': {
        ...styles.absolute('0','auto','0','50%'),
        transform: 'translateX(-50%)',
        width: '118%',
        height: '118%',
        background: `url(${require('../../images/bubbles/video-bg.png')}) center center no-repeat`,
        backgroundSize: 'contain',
        filter: 'blur(2px)',
        zIndex: '5',
        pointerEvents: 'none'
    },

    '&__title': {
        ...fonts.p0
    },

    '&__subtitle': {
        ...fonts.p2
    },
    
    [styles.bpnt()]: {
        '&__container:hover &': {
            '&__img': {
                transform: 'scale(1.05)'
            },
        },
    },
    
    [styles.bp(1500)]: {
        margin: '20px 0',
        
        '&__container': {
            maxWidth: '430px',
        },
    },
    
    [styles.bp(1300)]: {
        margin: '40px 0',
        
        '&__container': {
            width: '40%',
        },
    },
    
    [styles.bp(900)]: {
        '&__container': {
            width: '50%',
            maxWidth: '360px',
        },
    },
    
    [styles.bp(700)]: {
        margin: '20px 0',
        
        '&__container': {
            width: '80%',
        },
    },
});


const css_bg_bubble = css({
    ...styles.absolute('auto','auto','0','calc(100% / 12)'),
    ...styles.rh(),
    display: 'block',
    width: 'calc(100% / 12 * 2)',
    zIndex: '-1',

    '&__parallax-wrap': {
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%'
    },

    '&__bubble': {
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%',

        '&::before': {
            content: '""',
            display: 'block',
            ...styles.absolute(),
            width: '100%',
            height: '100%',
            transform: 'rotate(90deg)',
            filter: 'blur(2px)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${require('../../images/bubbles/drop-3.png')})`
        }
    },
});

class TourBubble extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            showTour: false
        };
        
        this.loaded = false;
    }
    
    onChange = (inView) => {
        if (!this.loaded) {
            if (inView) {
                this.loaded = true;
            }
        }
    };

    callPopup = () => {
        const { setPopupData, data } = this.props;
        const { popup_data } = data;

        if (popup_data && popup_data) {
            setPopupData({
                show: true,
                data: {...popup_data}
            })
        }
    };
    
    render() {
        const { subtitle, link, poster, background_block, bg_text } = this.props.data;
        
        return (
            <section className={`${css_style} section`}>
                {background_block && <BackgroundBlock data={background_block}/>}
                
                <div className="container">
                    {bg_text && <BackgroundText data={bg_text} />}

                    <MediaQuery minWidth={`${styles.breakpoints[700] + 1}px`}>
                        <div className={`${css_bg_bubble}`}>
                            <ParallaxWrap className={`${css_bg_bubble}__parallax-wrap`}>
                                <div className={`${css_bg_bubble}__bubble js-layer`} data-depth={0.8} />
                            </ParallaxWrap>
                        </div>
                    </MediaQuery>
                    
                    <div className={`${css_style}__container`}>
                        <ParallaxWrap className={`${css_style}__parallax-wrap`} >
                            <InView rootMargin='50%' onChange={this.onChange} >
                                {({ inView, ref }) => {
                                    return (
                                        <React.Fragment>
                                            {(inView || this.loaded) &&
                                                <div className={`${css_style}__bubble-bg`} />
                                            }

                                            <div ref={ref} className={`${css_style}__bubble`} onClick={this.callPopup.bind(this, link)}>
                                                <div className={`${css_style}__bg js-layer`} data-depth={0.8}>
                                                    {(inView || this.loaded) && poster &&
                                                        <Picture className={`${css_style}__img`}
                                                                 sources={[
                                                                     {
                                                                         srcSet: poster.mob,
                                                                         media: `(max-width: ${styles.breakpoints[700]}px)`,
                                                                     },
                                                                     {
                                                                         srcSet: poster.desk,
                                                                     },
                                                                 ]}
                                                        />
                                                    }
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    )
                                }}
                            </InView>

                            <div className={`${css_style}__text-parallax-container js-layer`} data-depth={-1}>
                                <div className={`${css_style}__text-wrap`}>
                                    <h3 className={`${css_style}__title`}>
                                        360°
                                    </h3>
                                    {subtitle &&
                                        <span className={`${css_style}__subtitle`}>
                                            {subtitle}
                                        </span>
                                    }
                                </div>
                            </div>

                        </ParallaxWrap>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPopupData: obj => dispatch(setPopupData(obj))
    }
};

export default connect(null, mapDispatchToProps)(TourBubble);

