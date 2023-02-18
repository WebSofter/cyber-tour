import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import Slider from "react-slick";
import BackgroundBlock from "../BackgroundBlock";
import fonts from "../../constants/fonts";
import MediaQuery from "react-responsive/src/Component";
import SliderCounterNav from "../SliderCounterNav";

const css_style = css({
    margin: '100px 0 0',

    '&__title': {
        ...fonts.p2,
        textAlign: 'center',
        marginBottom: '80px'
    },

    '&__padding-container': {
        width: '100%',
        display: 'block',
        position: 'relative',
        padding: '25% 0 15%'
    },


    '&__slider-wrap': {
        width: '100%',
        display: 'block',
        position: 'relative',
    },

    '&__bg-bubble': {
        ...styles.absolute('50%', '0', 'auto'),
        ...styles.rh(),
        transform: 'translateY(-50%)',
        width: 'calc(100% / 8 / 2)',

        '&::before': {
            content: '""',
            display: 'block',
            ...styles.absolute(),
            width: '100%',
            height: '100%',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${require('../../images/bubbles/video-bg.png')})`,
            zIndex: '1'
        },

        '&_left': {
            left: '0',
            right: 'auto'
        },

        '&_right': {
            left: 'auto',
            right: '0'
        },

        '&_center': {
            width: 'calc(100% / 8 * 4)',
            transform: 'translateY(-60%)',

            '&::before': {
                filter: 'blur(3px)',
            },

            '&::after': {
                backgroundSize: '90%',
                backgroundPosition: '50% 30%',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${require('../../images/svg/advantages.svg')})`,
                zIndex: '2'
            }
        },
    },
    
    '&__slider-container': {
        display: 'block',
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 10px'
    },

    '&__slider': {
        ...styles.slickArrows,
        width: '100%',
        display: 'block',
        position: 'relative',

        '&::before, &::after': {
            ...styles.absolute(),
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },

        '& .slick-arrow': {
            ...styles.rh(),
            width: 'calc(100% / 8)',

            '&.slick-prev': {
                left: 'calc(100% / 8)',
            },
            '&.slick-next': {
                right: 'calc(100% / 8)',
            },

            '&::before': {
                ...styles.absolute(),
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url(${require('../../images/bubbles/video-bg.png')})`,
            }
        },

        '.slick-list': {
            width: 'calc(50% - 20px)',
            margin: '0 auto'
        }
    },

    '&__content': {
        display: 'block',
        position: 'relative',
        width: '70%',
        margin: '0 auto',
    },

    '&__text': {
        ...fonts.p6,
        textAlign: 'center'
    },
    
    [styles.bp(1500)]: {
        '&__slider-container': {
            padding: '0'
        },
    },
    
    [styles.bp(1300)]: {
        '&__slider-container': {
            maxWidth: '880px'
        },
    
        '&__padding-container': {
            padding: '31% 0 18%'
        },
    
        '&__bg-bubble': {
            '&_center': {
                width: 'calc(100% / 12 * 7.5)',
    
                '&::after': {
                    backgroundSize: '80%',
                }
            },
        },
        
        '&__slider': {
            '& .slick-arrow': {
                width: 'calc(100% / 12 * 2 - 20px)',
            
                '&.slick-prev': {
                    left: 0,
                },
                '&.slick-next': {
                    right: 0,
                },
            },
        
            '.slick-list': {
                width: 'calc(100% / 12 * 7.5)',
            }
        },
    },
    
    [styles.bp(900)]: {
        marginTop: '50px',
        
        '&__title': {
            marginBottom: '40px'
        },
        
        '&__slider-container': {
            maxWidth: '710px'
        },
    
        '&__padding-container': {
            padding: '34% 0 20%'
        },
    
        '&__bg-bubble': {
            '&_center': {
                width: 'calc(100% / 12 * 8)',
            },
        },
        
        '&__slider': {
            '& .slick-arrow': {
                width: 'calc(100% / 12 * 2)',
            },
        
            '.slick-list': {
                width: 'calc(100% / 12 * 8)',
            }
        },
    },
    
    [styles.bp(700)]: {
        '&__title': {
            marginBottom: '30px'
        },
        
        '&__slider-container': {
            maxWidth: '280px'
        },
    
        '&__padding-container': {
            padding: '75% 0 30%',
            marginBottom: '15px'
        },
    
        '&__bg-bubble': {
            '&_center': {
                width: 'calc(100% + 120px)',
                left: '-60px',
                transform: 'translateY(-65%)',
    
                '&::after': {
                    backgroundSize: '100%',
                    backgroundPosition: '50% 28%',
                }
            },
        },
        
        '&__content': {
            width: '100%'
        },
        
        '&__slider': {
            '.slick-list': {
                width: '100%',
            }
        },
    },
});

class AdvantagesSlider extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currentSlide: 1
        };
        
        this.defaultSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            dots: false,
            speed: 700,
            arrows: true,
            centerPadding: '0',
            responsive: [
                {
                    breakpoint: styles.breakpoints[700] + 1,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        };
        
        this.slider = React.createRef();
    }
    
    sliderChangeHandler = (index) => {
        this.setState({
            currentSlide: index + 1
        })
    };
    
    arrowsHandler = (direction) => {
        if (direction < 0) {
            this.slider.current.slickPrev();
        }  else {
            this.slider.current.slickNext();
        }
    };
    
    render() {
        const { currentSlide } = this.state;
        const { title, list, background_block } = this.props.data;

        return (
            <section className={`${css_style} section`}>
                {background_block && <BackgroundBlock data={background_block}/>}

                <div className="container">
                    <div className="narrow-container">
                        {title &&
                            <h2 className={`${css_style}__title`}>
                                {require('html-react-parser')(title)}
                            </h2>
                        }
                    </div>
                    
                    <div className={`${css_style}__slider-container`}>
                        {list &&
                            <div className={`${css_style}__padding-container`}>
                                <div className={`${css_style}__slider-wrap`}>
                                    <MediaQuery minWidth={`${styles.breakpoints[1300] + 1}px`}>
                                        <div className={`${css_style}__bg-bubble ${css_style}__bg-bubble_left`} />
                                        <div className={`${css_style}__bg-bubble ${css_style}__bg-bubble_right`} />
                                    </MediaQuery>
                                    
                                    <div className={`${css_style}__bg-bubble ${css_style}__bg-bubble_center`} />
                
                                    <Slider
                                        ref={this.slider}
                                        className={`${css_style}__slider`}
                                        afterChange={this.sliderChangeHandler}
                                        {...this.defaultSettings}
                                    >
                                        {
                                            list.map((item, key) => {
                                                return (
                                                    <div key={key} data-id={key} className={`${css_style}__item`}>
                                                        <div className={`${css_style}__content`}>
                                                            <div className={`${css_style}__text`}>
                                                                {require('html-react-parser')(item)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Slider>
                                </div>
                            </div>
                        }
                        
                        {list &&
                            <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                                <SliderCounterNav onArrowClick={this.arrowsHandler} currentSlide={currentSlide} total={list.length} />
                            </MediaQuery>
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default AdvantagesSlider;
