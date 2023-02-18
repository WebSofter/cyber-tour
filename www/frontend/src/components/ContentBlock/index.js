import React from "react";
import { css } from "emotion";
import TextBlock from "../TextBlock";
import Button from '../../components/Button';
import styles from "../../constants/styles";

import BackgroundText from "../../components/BackgroundText";
import BackgroundBlock from "../../components/BackgroundBlock";
import VideoBubble from "../../components/VideoBubble";
import Bubbles from "../../components/Bubbles";
import BigBubbleLink from "../../components/BigBubbleLink";
import TwinBubble from "../../components/TwinBubble";
import Hands from "../../components/Hands";

import { InView } from 'react-intersection-observer';

const componentsArray = {
    VideoBubble: VideoBubble,
    Bubbles: Bubbles,
    BigBubbleLink: BigBubbleLink,
    TwinBubble: TwinBubble,
    Hands: Hands,
};

const css_style = css({
    display: 'block',
    position: 'relative',
    padding: '100px 0',
    
    '&__table': {
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    '&__button-wrap': {
        display: 'block',
        position: 'relative',
        width: '100%',
        marginTop: '30px'
    },

    '&__content': {
        display: 'block',
        position: 'relative',
        width: '100%',
        transform: 'translateY(200px)',
        opacity: '0',
    
        '&._show': {
            transition: styles.transitions.type5,
            transform: 'translateY(0)',
            opacity: '1',
            transitionDelay: '0.2s'
        },
    },
    
    '&__row': {
        width: 'calc(100% / 10 * 8)',
        padding: '0 10px',
        margin: '0 auto'
    },

    '&__col': {
        width: 'calc(100% / 10 * 4 - 10px)',
        transitionDelay: `50ms`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        position: 'relative',
    
        '&_left': {
            zIndex: '2',
            
            '&.narrow': {
                width: 'calc(100% / 10 * 3 - 10px)'
            }
        },
    
        '&_right': {
            zIndex: '1'
        },
    },

    '&:nth-of-type(even) &': {
        '&__table': {
            flexDirection: 'row-reverse'
        }
    },
    
    '&._center &': {
        '&__col': {
            justifyContent: 'center'
        },
    },
    
    '&._min-height &': {
        '&__table': {
            minHeight: '150px'
        }
    },
    
    '&._video': {
        padding: '0 0 300px',
    },
    
    '&._padding-bottom': {
        // paddingBottom: '300px'
    },
    
    [styles.bp(1700)]: {
    
    },
    
    [styles.bp(1500)]: {
        '&__col': {
            width: 'calc(100% / 10 * 5 - 10px)',
        
            '&_left': {
                '&.narrow': {
                    width: 'calc(100% / 10 * 4 - 10px)'
                }
            },
        },
    },
    
    [styles.bp(1300)]: {
        padding: '75px 0',
        
        '&__col': {
            '&_left': {
                '&.narrow': {
                    width: 'calc(100% / 10 * 5 - 10px)'
                }
            },
        },
    },
    
    [styles.bpm(900)]: {
        '&__col': {
            '&_right': {
                '&._wide': {
                    width: 'calc(100% / 10 * 5 - 10px)'
                }
            }
        },
    },
    
    [styles.bp(900)]: {
        '&__table': {
            flexDirection: 'column',
        },
        
        '&__row': {
            width: '100%',
            padding: '0',
        },
        
        '&__col': {
            width: 'calc(100% / 10 * 6 - 10px)',
            maxWidth: '400px',
        
            '&_left': {
                marginRight: 'auto',
                marginLeft: '0',
                
                '&.narrow': {
                    width: 'calc(100% / 10 * 6 - 10px)'
                }
            },
        
            '&_right': {
                marginLeft: 'auto',
                marginRight: '0'
            },
        },
    
        '&:nth-of-type(even) &': {
            '&__table': {
                flexDirection: 'column-reverse'
            },
            
            '&__col': {
                '&_left': {
                    marginLeft: 'auto',
                    marginRight: '0'
                },
    
                '&_right': {
                    marginRight: 'auto',
                    marginLeft: '0'
                },
            },
        },
        
        '&._adaptive-order-reverse &': {
            '&__table': {
                flexDirection: 'column-reverse'
            },
        },
        
        '&:nth-of-type(even)._adaptive-order-reverse &': {
            '&__table': {
                flexDirection: 'column'
            },
        },
    },
    
    [styles.bp(700)]: {
        padding: '50px 0',
        
        '&__content': {
            transform: 'translateY(100px)',
        },
        
        '&._video': {
            padding: '0 0 150px',
        },
        
        '&__col': {
            width: '100%',
            
            '&.narrow': {
                width: '100%'
            }
        },
    
        '&._padding-bottom': {
            paddingBottom: '100px'
        },
    }
});

class ContentBlock extends React.Component {
    render() {
        const
            { data } = this.props,
            { content, bg_text, background_block, component, mono=false } = data,
            hasVideo = background_block && background_block.type === 'video',
            videoMod = hasVideo ? ' _video' : '',
            alignMod = (component || hasVideo) ? ' _center' : '',
            colsMod = component ? ' _wide' : '',
            heightMod = hasVideo ? ' _min-height' : '',
            paddingMod = (bg_text && bg_text.position === 'bottom') ? ' _padding-bottom' : '',
            contentMod = content.mod ? content.mod : '',
            ComponentTag = component ? (componentsArray[component.name] || false) : false,
            adaptiveOrderMod = component ? ((component.name === 'Hands' || component.name === 'TwinBubble') ? ' _adaptive-order-reverse' : '') : '';

        return (
            <div className={`${css_style}${alignMod}${heightMod}${paddingMod}${videoMod}${adaptiveOrderMod}`}>
                {background_block && <BackgroundBlock data={background_block}/>}
        
                <div className="container">
                    <div className="inner-container">
                        <div className={`${css_style}__table`}>
                            {bg_text && <BackgroundText data={bg_text} />}
    
                            <InView onChange={this.onChange} triggerOnce={true}>
                                {({ inView, ref }) => {
                                    const elClass = mono ? `${css_style}__row` : `${css_style}__col ${css_style}__col_left`;

                                    return (
                                        <div ref={ref} className={`${elClass} ${contentMod}`}>
                                            <div className={`${css_style}__content ${inView ? '_show' : ''}`}>
                                                {content.text_block &&
                                                    <TextBlock data={content.text_block}/>
                                                }
                                                {content.button &&
                                                    <div className={`${css_style}__button-wrap`}>
                                                        <Button data={content.button} />
                                                    </div>
                                                }
                                            </div>

                                        </div>
                                    )
                                }}
                            </InView>

                            {!mono &&
                                <div className={`${css_style}__col ${css_style}__col_right ${colsMod}`}>
                                    {ComponentTag &&
                                        <ComponentTag data={component.data} />
                                    }
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentBlock;
