import React from "react";
import { css } from "emotion";

import { connect } from "react-redux";
import { setPopupData } from "../../actions/SetPopupData";
import { playMainMusic, stopMainMusic } from "../../actions/SetMusicData";

import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import BackgroundBlock from "../BackgroundBlock";
import BackgroundText from "../BackgroundText";
import TextBlock from "../TextBlock";
import MusicButton from "../MusicButton";
import FormContactUs from "../FormContactUs";
import VideoBlock from "../VideoBlock";
import TourViewer from "../TourViewer";
import ScrollWrap from "../ScrollWrap";
import Button from "../Button";
import Stars from "../Stars";
import ConfiguratorTabs from '../../components/ConfiguratorTabs';
import ConfiguratorSelected from '../../components/ConfiguratorSelected';

import {RemoveScroll} from 'react-remove-scroll';

const css_style = css({
    ...styles.fixed(),
    width: '100%',
    height: '100%',
    zIndex: '999',
    background: '#303675',
    transition: 'transform 0s linear, opacity 0.7s ease',
    transitionProperty: 'transform, opacity',
    transitionDelay: '1.4s, 0.7s',
    opacity: '0',
    transform: 'translateX(-110%)',
    pointerEvents: 'none',
    padding: '100px 0 0',
    
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
    
    '&__container, &__close-btn': {
        opacity: '0',
        transition: 'opacity 0.7s ease',
        transitionDelay: '0s',
    },
    
    '&__container': {
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',

    },
    
    '&__inner-container': {
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    
    '&__wrap': {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: '100%',
        minHeight: '100%',
    },
    
    '&__content': {
        textAlign: 'center',
        display: 'block',
        position: 'relative',
        width: '100%',
        maxHeight: '100%',
        margin: 'auto',
        paddingBottom: '100px'
    },
    
    '&__close-button-wrap': {
        ...styles.absolute('auto'),
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    
    '&__close-btn': {
        ...styles.absolute('20px','20px','auto','auto'),
        display: 'block',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        overflow: 'hidden',
        transition: styles.transitions.default,
        cursor: 'pointer',
        zIndex: '5',
        
        '&::before': {
            content: '""',
            ...styles.absolute(),
            display: 'block',
            width: '100%',
            height: '100%',
            background: `url(${require('../../images/bubbles/small-bubble.png')}) center center no-repeat`,
            backgroundSize: 'contain',
            transition: styles.transitions.default,
            zIndex: '2'
        },
        
        'span': {
            display: 'block',
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            zIndex: '3',
            
            '&::before, &::after': {
                content: '""',
                display: 'block',
                ...styles.absolute(),
                height: '1px',
                width: '40%',
                transformOrigin: '50% 50%',
                background: styles.colors.white,
                transition: styles.transitions.default
            },
    
            '&::before': {
                transform: 'rotate(-45deg)'
            },
    
            '&::after': {
                transform: 'rotate(45deg)'
            },
        },
        
        '&:hover': {
            '&::before': {
                transform: 'scale(1.1)'
            }
        }
    },
    
    '&__title': {
        ...fonts.p1,
        textAlign: 'center',
        marginBottom: '50px'
    },
    
    '&__row': {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: 'relative',
        width: '100%',
        margin: '0 auto 50px',
        
        '&:last-of-type': {
            marginBottom: '0'
        },
        
        '&_narrow': {
            maxWidth: '580px'
        },
    },
    
    '&._show': {
        transitionDelay: '0.3s, 0.4s',
        transform: 'translateX(0)',
        opacity: '1',
        pointerEvents: 'auto',
    },
    
    '&._show &': {
        '&__container, &__close-btn': {
            opacity: '1',
            transitionDelay: '1.3s',
        },
    },
    
    '&._tour360 &': {
        '&__row': {
            '&_tour-wrap': {
                ...styles.absolute(),
                width: '100%',
                height: '100%'
            },
        },
        
        '&__close-btn': {
            top: 'auto',
            right: '0',
            left: '0',
            bottom: '20px'
        },
    },
    
    [styles.bp(1300)]: {
        '&__close-btn': {
            top: '15px',
            right: '15px',
            width: '65px',
            height: '65px',
        }
    },
    
    [styles.bp(700)]: {
        padding: '65px 0 0',
    
        '&__content': {
            paddingBottom: '50px'
        },
        
        '&__close-btn': {
            top: '10px',
            right: '10px',
            width: '50px',
            height: '50px',
        },
    
        '&._tour360 &': {
            '&__close-btn': {
                bottom: '10px'
            },
        },
    },
});

class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.music = null;
        this.isInit = false;
    }
    
    closePopup = () => {
        const { setPopupData } = this.props;
        
        setPopupData({
            show: false
        })
    };
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        const { stopMainMusic, playMainMusic, popup } = this.props;
        const { show, data } = popup;
        const { content={} } = data;
        const {  music } = content;
        
        if (show !== prevProps.popup.show) {
            if (music && this.music) {
                this.music.togglePlay({
                    val: show,
                    pausedBy: 'popup',
                    pauseRest: show
                });
            }
            
            if (show) {
                stopMainMusic('popup')
            } else {
                playMainMusic()
            }
        }
    }
    
    getMusicRef = (component) => {
        this.music = component;
    };
    
    renderContent = () => {
        const { data, show } = this.props.popup;
        const { title, stars, content={}, extraFormData } = data;
        const { text_block, music, video, tour, form, button, configurator_tabs, configurator_selected } = content;
        
        return (
            <React.Fragment>
                {stars &&
                    <div className={`${css_style}__row`}>
                        <Stars count={stars} mod={'_active'} />
                    </div>
                }
                
                {title &&
                    <div className={`${css_style}__title`}>
                        {require('html-react-parser')(title)}
                    </div>
                }
    
                {configurator_tabs &&
                    <ConfiguratorTabs {...configurator_tabs} />
                }
    
                {configurator_selected &&
                    <ConfiguratorSelected {...configurator_selected} />
                }
                
                {text_block &&
                    <div className={`${css_style}__row ${css_style}__row_narrow`}>
                        <TextBlock data={text_block}/>
                    </div>
                }
    
                {music &&
                    <div className={`${css_style}__row`}>
                        <MusicButton type='popup' onInit={this.getMusicRef} data={music}/>
                    </div>
                }
    
                {video &&
                    <div className={`${css_style}__row`}>
                        <VideoBlock play={show} data={video}/>
                    </div>
                }
    
                {tour &&
                    <div className={`${css_style}__row ${css_style}__row_tour-wrap`}>
                        <TourViewer data={tour}/>
                    </div>
                }
    
                {form &&
                    <div className={`${css_style}__row`}>
                        <FormContactUs {...form} extraFormData={extraFormData}/>
                    </div>
                }
    
                {button &&
                    <div className={`${css_style}__row`}>
                        <Button data={button}/>
                    </div>
                }
    
                {/*<div className={`${css_style}__row ${css_style}__row_close-button-wrap`}>*/}
                {/*    <div className={`${css_style}__close-btn`} onClick={this.closePopup} />*/}
                {/*</div>*/}
            </React.Fragment>
        )
    };
    
    renderWrap = () => {
        const { show, data } = this.props.popup;
        const { fullscreen_content=false, background_block, bg_text } = data;

        const bg = {
            type: 'img',
            data: {
                stop_animation: true,
                name: 'bb'
            },
            ...background_block
        };
    
        if (show && !this.isInit) this.isInit = true;
        
        if (fullscreen_content) {
            return (
                this.renderContent()
            )
        } else {
            return (
                <React.Fragment>
                    {bg && this.isInit && <BackgroundBlock styleMod='_cover' data={bg}/>}
    
                    <div className={`${css_style}__container container`}>
                        {bg_text && <BackgroundText data={bg_text} />}
        
                        <div className={`${css_style}__inner-container narrow-container`}>
                            <ScrollWrap>
                                <div className={`${css_style}__wrap`}>
                                    <div className={`${css_style}__content`}>
                                        {this.renderContent()}
                                    </div>
                                </div>
                            </ScrollWrap>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    };
    
    render() {
        const { show, data } = this.props.popup;
        const { styleMod=''} = data;
        const showMod = show ? '_show' : '';
        
        return (
            <RemoveScroll enabled={show} removeScrollBar={false}>
                <div className={`${css_style} ${showMod} ${styleMod}`}>
        
                    {this.renderWrap()}
    
                    <div className={`${css_style}__close-btn`} onClick={this.closePopup}><span /></div>
                    {/*<div className={`${css_style}__close-button-wrap`}>*/}
                    {/*    <div className={`${css_style}__close-btn`} onClick={this.closePopup}>*/}
                    {/*        <span>{close_btn}</span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </RemoveScroll>
        )
    }
}

const mapStateToProps = store => {
    return {
        popup: store.popup
    }
};

const mapDispatchToProps = dispatch => {
  return {
      setPopupData: obj => dispatch(setPopupData(obj)),
      playMainMusic: () => dispatch(playMainMusic()),
      stopMainMusic: pausedBy => dispatch(stopMainMusic(pausedBy))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
