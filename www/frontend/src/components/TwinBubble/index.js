import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import { InView } from 'react-intersection-observer';
import ParallaxWrap from "../ParallaxWrap";

const css_style = css({
    ...styles.rh(),
    display: 'block',
    position: 'relative',
    width: 'calc(100% / 5 * 4)',
    marginRight: 'auto',

    '&__in-view-container': {

        ...styles.absolute(),
        width: '100%',
        height: '100%',
        zIndex: '1',
    },

    '&__parallax-wrap': {
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    
    '&__bubble': {
        width: '100%',
        height: '100%',
        zIndex: '1',

        'span': {
            display: 'block',
            position: 'relative',
            width: '100%',
            height: '100%',

            '&::before': {
                content: '""',
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                display: 'block',
                position: 'relative',
                width: '100%',
                height: '100%',
            },

        },


        '&_main': {
            ...styles.absolute(),

            'span': {
                '&::before': {
                    filter: 'blur(4px)'
                }
            }
        },

        '&_small': {
            ...styles.absolute('0','0','0','0'),
            width: '45%',
            height: '45%',
            top: 'auto',
            left: 'auto',
            right: '-5%',
            bottom: '-5%',

            'span': {
                '&::before': {
                    transform: 'rotate(90deg)',
                    filter: 'blur(8px)'
                }
            }
        }
    },

   '&__parallax-wrap._show-img &': {
       '&__bubble': {
           '&_main': {
               'span': {
                   '&::before': {
                       backgroundImage: `url(${require('../../images/bubbles/video-bg.png')})`,

                       [styles.bp(700)]: {
                           backgroundImage: `url(${require('../../images/bubbles/video-bg_mob.png')})`
                       }
                   }
               }
           },

           '&_small': {
               'span': {
                   '&::before': {
                       backgroundImage: `url(${require('../../images/bubbles/drop-3.png')})`,

                       [styles.bp(700)]: {
                           backgroundImage: `url(${require('../../images/bubbles/drop-3.png')})`
                       }
                   }
               }
           }
       },
   },

    '&._type2 &__parallax-wrap &__bubble': {
        '&_main': {
            'span': {
                '&::before': {
                    transform: 'rotate(-90deg)',
                }
            }
        },
    },

    '&._type2 &__parallax-wrap._show-img &__bubble': {
        '&_main': {
            'span': {
                '&::before': {
                    backgroundImage: `url(${require('../../images/bubbles/drop-3.png')})`,

                    [styles.bp(700)]: {
                        backgroundImage: `url(${require('../../images/bubbles/drop-3_mob.png')})`
                    }
                }
            }
        },
    },
});

class TwinBubble extends React.Component {
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
        const { data } = this.props;
        const mod = (data && data.mod) || '';

        return (
            <div className={`${css_style} ${mod}`}>
                <InView rootMargin='50%' onChange={this.onChange} >
                    {({ inView, ref }) => {
                        return (
                            <div ref={ref} className={`${css_style}__in-view-container`}>
                                <ParallaxWrap className={`${css_style}__parallax-wrap ${(inView || this.loaded) ? '_show-img' : ''}`}>
                                    <div className={`${css_style}__bubble ${css_style}__bubble_main`}>
                                        <span className={`js-layer`} data-depth={0.8}/>
                                    </div>
                                    <div className={`${css_style}__bubble ${css_style}__bubble_small`}>
                                        <span className={`js-layer`} data-depth={1.3}/>
                                    </div>
                                </ParallaxWrap>
                            </div>
                        )
                    }}
                </InView>
            </div>
        )
    }
}

export default TwinBubble

