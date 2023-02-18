import React from "react";
import { css } from "emotion";
import ParallaxWrap from "../../components/ParallaxWrap";
import fonts from "../../constants/fonts";
import styles from "../../constants/styles";

const css_style = css({
    ...styles.absolute(),

    '&.right': {
        left: 'auto',
        right: '-20%'
    },

    '&.right-0': {
        left: 'auto',
        right: '0'
    },
    
    '&.left': {
        left: '-20%',
        right: 'auto'
    },

    '&.left-0': {
        left: '0',
        right: 'auto'
    },
    
    '&.prefix': {
        bottom: '100%',
        top: 'auto',
        transform: 'translateY(50%)'
    },
    
    '&.suffix': {
        bottom: 'auto',
        top: '100%',
        transform: 'translateY(-50%)'
    },
    
    '&.top': {
        bottom: '100%',
        top: 'auto',
    },
    
    '&.bottom': {
        bottom: 'auto',
        top: '100%',
    },
    
    '&.start': {
        bottom: 'auto',
        top: '0',
    },
    
    '&.end': {
        bottom: '0',
        top: 'auto',
    },

    '&__parallax-wrap': {
        display: 'flex',
        justifyContent: 'center'
    },

    '&__text': {
        opacity: '0.2',
        filter: 'blur(8px)',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
    
        '&::selection': {
            background: 'transparent'
        },
        '&::-moz-selection': {
            background: 'transparent'
        },
    
        '&.level-0': {
            ...fonts.d0
        },
        '&.level-1': {
            ...fonts.d1
        },
        '&.level-2': {
            ...fonts.d2,
        },
        '&.level-3': {
            ...fonts.d3
        },
        '&.level-4': {
            ...fonts.d4
        },
    },
    
    '&._less-blur &': {
        '&__text': {
            filter: 'blur(5px)',
        }
    },
    
    [styles.bp(1300)]: {
        '&.right': {
            right: '-5%'
        },
    
        '&.left': {
            left: '-5%',
        },
        
        '&__text': {
            filter: 'blur(6px)',
        },
    
        '&._less-blur &': {
            '&__text': {
                filter: 'blur(4px)',
            }
        },
    },
    
    [styles.bp(900)]: {
        '&__text': {
            filter: 'blur(4px)',
        },
    
        '&._less-blur &': {
            '&__text': {
                filter: 'blur(3px)',
            }
        },
    },
    
    [styles.bp(700)]: {
        '&__text': {
            filter: 'blur(3px)',
        },
    
        '&._less-blur &': {
            '&__text': {
                filter: 'blur(2px)',
            }
        },
    },

});

class BackgroundText extends React.Component {
    render() {
        const { text='', level='0', depth='1', mod='', position='', align='' } = this.props.data;
        const levelMod = `level-${level}`;
        
        return (
            <div className={`${css_style} ${mod} ${position} ${align}`}>
                <ParallaxWrap className={`${css_style}__parallax-wrap`}>
                    <span className={`${css_style}__text ${levelMod} js-layer`} data-depth={depth}>
                        {text ? require("html-react-parser")(text) : null}
                    </span>
                </ParallaxWrap>
            </div>
        )
    }
}

export default BackgroundText;
