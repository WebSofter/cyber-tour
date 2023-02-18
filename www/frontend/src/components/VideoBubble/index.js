import React from "react";
import { css, keyframes } from "emotion";
import styles from "../../constants/styles";
import { Picture } from 'react-responsive-picture';
import { InView } from 'react-intersection-observer';
import ParallaxWrap from "../ParallaxWrap";

import {setPopupData} from "../../actions/SetPopupData";
import {connect} from "react-redux";

const filterColor = keyframes`
    0% {
        filter: hue-rotate(-30deg);
    }
  
    100% {
        filter: hue-rotate(30deg);
    }
`;

const css_style = css({
    display: 'block',
    position: 'relative',
    width: '100%',
    
    '&__parallax-wrap': {
        display: 'block',
        position: 'relative',
        width: '100%',
    },
    
    '&__bubble': {
        display: 'block',
        position: 'relative',
        borderRadius: '50%',
        overflow: 'hidden',
        width: '100%',
        zIndex: '3'
    },
    
    '&__bg': {
        display: 'block',
        position: 'relative',
        ...styles.rh(),
        zIndex: '1',
        
        'picture': {
            ...styles.absolute('50%', 'auto', 'auto', '50%'),
            transform: 'translate(-50%, -50%)',
            display: 'block',
            width: '120%',
            height: '120%',
            zIndex: '1',
        }
    },
    
    '&__btn-wrap': {
        ...styles.absolute(),
        width: '137px',
        height: '137px',
        zIndex: '5'
    },
    
    '&__btn': {
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: styles.colors.aqua,
        pointerEvents: 'auto',
        cursor: 'pointer',
        transition: 'border-color .3s ease',
        
        '&::before': {
            content: '""',
            ...styles.absolute('0','0','0', '10%'),
            width: '28px',
            height: '32px',
            borderStyle: 'solid',
            borderColor: `transparent transparent transparent ${styles.colors.white}`,
            borderWidth: '16px 0 16px 28px',
            boxSizing: 'border-box',
            transition: styles.transitions.default
        },
        
        '&:hover': {
            borderColor: styles.colors.white
        }
    },
    
    '&__img': {
        ...styles.absolute(),
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',
        zIndex: '1',
    },
    
    '&__bubble-bg': {
        ...styles.absolute('0','auto','0','50%'),
        transform: 'translateX(-50%)',
        width: '118%',
        height: '118%',
        zIndex: '4',
        animation: `${filterColor} 2s linear infinite alternate`,
        
        '&::before': {
            content: '""',
            display: 'block',
            width: '100%',
            height: '100%',
            background: `url(${require('../../images/bubbles/video-bg.png')}) center center no-repeat`,
            backgroundSize: 'contain',
            filter: 'blur(2px)',
        }
    },
    
    [styles.bp(1500)]: {
        '&__btn-wrap': {
            width: '94px',
            height: '94px',
        },
    
        '&__btn': {
            '&::before': {
                width: '18px',
                height: '22px',
                borderWidth: '11px 0 11px 18px',
            },
        },
    },
    
    [styles.bp(1300)]: {
        '&__btn-wrap': {
            width: '82px',
            height: '82px',
        },
    
        '&__btn': {
            '&::before': {
                width: '16px',
                height: '20px',
                borderWidth: '10px 0 10px 16px',
            },
        },
    },
    
    [styles.bp(900)]: {
        '&__btn-wrap': {
            width: '64px',
            height: '64px',
        },
    
        '&__btn': {
            '&::before': {
                width: '16px',
                height: '18px',
                borderWidth: '9px 0 9px 16px',
            },
        },
    },
    
    [styles.bp(700)]: {
        maxWidth: '320px',
        margin: '80px auto 0',
        
        '&__btn-wrap': {
            width: '48px',
            height: '48px',
        },
    
        '&__btn': {
            '&::before': {
                width: '12px',
                height: '16px',
                borderWidth: '8px 0 8px 12px',
            },
        },
    },
});


class VideoBubble extends React.Component {
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
    
    onClick = () => {
        const { setPopupData } = this.props;
        const { popup_data } = this.props.data;
        
        if (popup_data && setPopupData) {
            setPopupData({show: true, data: {...popup_data}});
        }
    };
    
    render() {
        const { preview } = this.props.data;
        
        return (
            <div className={`${css_style}`}>
                <div className={`${css_style}__container`}>
    
                    <ParallaxWrap className={`${css_style}__parallax-wrap`}>
                        {preview &&
                            <InView rootMargin='50%' onChange={this.onChange} >
                                {({ inView, ref }) => {
                                    return (
                                        <React.Fragment>
                                            {(inView || this.loaded) &&
                                                <div className={`${css_style}__bubble-bg`} />
                                            }
                                            
                                            <div ref={ref} className={`${css_style}__bubble`}>
                                                <div className={`${css_style}__bg js-layer`} data-depth={0.8}>
                                                    {(inView || this.loaded) &&
                                                    <Picture className={`${css_style}__img`}
                                                             sources={[
                                                                 {
                                                                     srcSet: preview.mob,
                                                                     media: `(max-width: ${styles.breakpoints[700]}px)`,
                                                                 },
                                                                 {
                                                                     srcSet: preview.desk,
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
                        }
    
                        <div className={`${css_style}__btn-wrap`}>
                            <div className={`${css_style}__btn js-layer`} data-depth={-1} onClick={this.onClick}/>
                        </div>
                    </ParallaxWrap>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setPopupData: obj => dispatch(setPopupData(obj))
    }
};

export default connect(null, mapDispatchToProps)(VideoBubble);


