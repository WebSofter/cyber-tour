import React from "react";
import { css, keyframes } from "emotion";
import fonts from "../../constants/fonts";
import styles from "../../constants/styles";
import {setMusicData} from "../../actions/SetMusicData";
import {connect} from "react-redux";

const colour_bar = keyframes`
        0% {
          transform: translateY(-10%);
        }
        10% {
            transform: translateY(-30%);
        }
        20% {
            transform: translateY(-50%);
        }
        30% {
            transform: translateY(-20%);
        }
        40% {
            transform: translateY(-70%);
        }
        50% {
            transform: translateY(-90%);
        }
        60% {
            transform: translateY(-30%);
        }
        70% {
            transform: translateY(-80%);
        }
        80% {
            transform: translateY(-50%);
        }
        90% {
            transform: translateY(-30%);
        }
        100% {
            transform: translateY(-10%);
        }
`;


const css_style = css({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    cursor: 'pointer',
    
    '&__equalizer': {
        height: '33px',
        display: 'flex',
        marginRight: '14px',
        
        '.equaliser-bar': {
            ...styles.absolute('100%', '0', 'auto'),
            height: '100%',
            background: styles.colors.aqua,
        },
        
        '.equaliser-column': {
            position: 'relative',
            width: '2px',
            marginRight: '5px',
            height: '100%',
            overflow: 'hidden',
            
            '&:nth-of-type(1)': {
                '.equaliser-bar': {
                    animation: `${colour_bar} 2s 1s ease-out alternate infinite`
                }
            },
            '&:nth-of-type(2)': {
                '.equaliser-bar': {
                    animation: `${colour_bar} 2s 0.5s ease-out alternate infinite`
                }
            },
            '&:nth-of-type(3)': {
                '.equaliser-bar': {
                    animation: `${colour_bar} 2s 1.5s ease-out alternate infinite`
                }
            },
            '&:nth-of-type(4)': {
                '.equaliser-bar': {
                    animation: `${colour_bar} 2s 0.25s ease-out alternate infinite`
                }
            },
            '&:nth-of-type(5)': {
                '.equaliser-bar': {
                    animation: `${colour_bar} 2s 2s ease-out alternate infinite`
                }
            },
        }
    },
    
    '&__text': {
        ...fonts.p10,
        color: styles.colors.white,
        display: 'flex',
        transition: styles.transitions.default
    },
    
    '&__prefix': {
        marginRight: '0.8em'
    },
    
    [styles.bpnt()]: {
        '&:hover &': {
            '&__text': {
                color: styles.colors.aqua
            }
        },
    },
    
    [styles.bp(700)]: {
        '&__prefix': {
            display: 'none'
        },
    }
});

class MusicButton extends React.Component {
    constructor(props) {
        super(props);
        
        this.audio = new Audio();
        this.audio.preload = 'none';
        this.audio.volume = 0.2;
        this.audio.loop = true;
        this.audio.src = this.props.data.url;
        
        this.audioTimer = null;
    }
   
    renderEqualizerCols = (count) => {
        let colsArray = [];
        
        for (let i = 0; i < count; i++) {
            colsArray.push(
                <div key={i} className='equaliser-column'>
                    <div className='equaliser-bar' />
                </div>
            )
        }
        
        return colsArray;
    };
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.checkIsPlaying()) {
            this.smoothVolume(1);
        } else {
            this.smoothVolume(-1);
        }
    };
    
    smoothVolume = (direction) => {
        clearInterval(this.audioTimer);

        const play = direction > 0;

        if (play) {
            this.audio.play();
        } else {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    };
    
    componentDidMount() {
        const { autoplay } = this.props.data;
        const { onInit } = this.props;
        
        if (onInit) {
            onInit(this)
        }
        
        if (autoplay) {
            this.togglePlay({
                val: false
            });
        }
    }
    
    componentWillUnmount() {
        this.unmountAudio();
    };
    
    unmountAudio = () => {
        if (this.audio) {
            this.audio.pause();
            this.audio = null;
        }

        this.togglePlay({
            val: false,
            pauseRest: false
        });
    };
    
    togglePlay = (obj) => {
        const { val, pausedBy='', pauseRest=true } = obj;
        const playingState = typeof val !== 'undefined';
        const { music, setMusicData, type='default', data } = this.props;
        const { url } = this.props.data;
        let newMusicObj = {...music};
        const currentObjPlaying = playingState ? val : (newMusicObj[url] && newMusicObj[url].playing ? !newMusicObj[url].playing : true);
        
        const currentPlayerObj = {
            [url]: {
                type: type,
                playing: currentObjPlaying,
                pausedBy: pausedBy
            }
        };
    
        if (data.main) currentPlayerObj[url].main = true;
        
        if (pauseRest) {
            for (let prop in newMusicObj) {
                if (newMusicObj.hasOwnProperty(prop)) {
                    if (newMusicObj[prop].playing) {
    
                        newMusicObj[prop].playing = false;
                        newMusicObj[prop].pausedBy = pausedBy;
                    }
                }
            }
        }
    
        newMusicObj = {
            ...newMusicObj,
            ...currentPlayerObj,
        };
        
        setMusicData(newMusicObj);
    };
    
    checkIsPlaying = () => {
        const { music } = this.props;
        const { url } = this.props.data;
        
        return music[url] && music[url].playing;
    };
    
    render() {
        const { button_text } = this.props.data;
        
        return (
            <div className={`${css_style}`} onClick={() => {
                this.togglePlay({
                    toggledBy: 'click'
                })
            }}>
                <div className={`${css_style}__equalizer`}>
                    {this.renderEqualizerCols(5)}
                </div>
                <div className={`${css_style}__text`}>
                    <div className={`${css_style}__prefix`}>
                        {button_text.prefix}
                    </div>
                    <div className={`${css_style}__suffix`}>
                        {this.checkIsPlaying() ? button_text.suffix_on : button_text.suffix_off}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = store => {
    return {
        music: store.music
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setMusicData: obj => dispatch(setMusicData(obj))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicButton);
