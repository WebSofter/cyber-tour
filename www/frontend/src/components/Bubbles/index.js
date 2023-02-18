import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
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
        width: '100%',
    },
    
    '&__content': {
        ...styles.rh(),
        display: 'block',
        position: 'relative',
        width: '85%',
        margin: '0 auto',
        zIndex: '2'
    },
    
    '&__bg': {
        ...styles.absolute(),
        width: '100%',
        height: '100%',
        zIndex: '1'
    },
    
    '&__text': {
        ...styles.absolute(),
        ...fonts.d3,
        color: styles.colors.white,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '2'
    },
    
    '&__bubble-main, &__bubble-bg': {
        'span': {
            display: 'block',
            position: 'relative',
            width: '100%',
            height: '100%',
            
            '&::before': {
                content: '""',
                ...styles.absolute(),
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                display: 'block',
                width: '100%',
                height: '100%',
            }
        }
    },
    
    '&__bubble-main': {
        ...styles.absolute(),
        width: '100%',
        height: '100%',
        zIndex: '1',
    
        'span': {
            '&::before': {
                filter: 'blur(5px)',
            }
        },
    },
    
    '&__bubble-bg': {
        'span': {
            '&::before': {
                filter: 'blur(15px)',
            }
        },
        
        '&:nth-of-type(1)': {
            ...styles.absolute('5%','auto','auto','5%'),
            width: '25%',
            height: '25%',
        },
        '&:nth-of-type(2)': {
            ...styles.absolute('auto','auto','-25%','0'),
            width: '35%',
            height: '35%',
        },
        '&:nth-of-type(3)': {
            ...styles.absolute('-5%','-5%','auto','auto'),
            width: '35%',
            height: '35%',
        },
        '&:nth-of-type(4)': {
            ...styles.absolute('36%','-9%','auto','auto'),
            width: '20%',
            height: '20%',
        },
        '&:nth-of-type(5)': {
            ...styles.absolute('auto','-23%','-15%','auto'),
            width: '45%',
            height: '45%',
        },
    },

   '&__parallax-wrap._show-img &': {
        '&__bubble-main': {
            'span': {
                '&::before': {
                    backgroundImage: `url(${require('../../images/bubbles/drop-2.png')})`
                }
            }
            
        },
        '&__bubble-bg': {
            'span': {
                '&::before': {
                    backgroundImage: `url(${require('../../images/bubbles/drop-3.png')})`
                }
            }
        },
       
       [styles.bp(700)]: {
           '&__bubble-main': {
               'span': {
                '&::before': {
                    backgroundImage: `url(${require('../../images/bubbles/drop-2_mob.png')})`
                }
               }
           },
           '&__bubble-bg': {
               'span': {
                '&::before': {
                    backgroundImage: `url(${require('../../images/bubbles/drop-3_mob.png')})`
                }
               }
           },
       }
   }
});

class Bubbles extends React.Component {
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
    
    renderBgBubbles = (count, startDepth=0.5, step=0.1) => {
        let bubblesArray = [];
        
        for (let i = 0; i < count; i++) {
            bubblesArray.push(
                <div key={i} className={`${css_style}__bubble-bg`}>
                    <span className={`js-layer`} data-depth={startDepth + (step * i)}/>
                </div>
            )
        }
        
        return bubblesArray;
    };
    
    render() {
        const { text } = this.props.data;
        
        return (
            <div className={`${css_style}`}>
                <div className={`${css_style}__container`}>
                    <InView rootMargin='50%' onChange={this.onChange} >
                        {({ inView, ref }) => {
                            return (
                                <div ref={ref} className={`${css_style}__in-view-container`}>
                                    <ParallaxWrap className={`${css_style}__parallax-wrap ${(inView || this.loaded) ? '_show-img' : ''}`}>
                                        <div className={`${css_style}__content`}>
                                            {text &&
                                            <span className={`${css_style}__text`}>
                                                <span className={`js-layer`} data-depth={2}>
                                                    {require('html-react-parser')(text)}
                                                </span>
                                            </span>
                                            }
                                            <div className={`${css_style}__bubble-main`}>
                                                <span className={`js-layer`} data-depth={1.3}/>
                                            </div>
                                        </div>
        
                                        <div className={`${css_style}__bg`}>
                                            {
                                                this.renderBgBubbles(5)
                                            }
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

export default Bubbles

