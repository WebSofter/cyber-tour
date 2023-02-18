import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import Slider from "react-slick";
import BackgroundBlock from "../BackgroundBlock";
import fonts from "../../constants/fonts";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TitleWrap from "../TitleWrap";
import MediaQuery from "react-responsive";
import SliderCounterNav from "../SliderCounterNav";

const css_style = css({
    margin: '140px 0',

    '&__title': {
        ...fonts.p2
    },

    '&__slider': {
        ...styles.slickArrows,

        '.slick-list': {
            width: 'calc(100% / 12 * 10 + 30px)',
            margin: '0 auto'
        },
    },

    '&__item': {
        padding: '0 15px',
    },

    '&__link': {
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%',
        zIndex: '10',
        cursor: 'pointer'
    },

    '&__wrap': {
        display: 'block',
        position: 'relative',
        maxWidth: '100%',
    },

    '&__resize-container': {
        ...styles.absolute('auto'),
        width: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
        zIndex: '3',
    },

    '&__img-wrap': {
        width: '100%',

        '&::before': {
            ...styles.maskStyles,
            transition: styles.transitions.type2
        }
    },

    '&__item:hover &': {
        '&__img-wrap': {
            '&::before': {
                opacity: '0'
            }
        },
    },

    '&__img': {
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center center',
        zIndex: '1',
    },
    
    [styles.bpm(900)]: {
        '&__img-wrap': {
            ...styles.absolute('50%','0','auto'),
            ...styles.rh(0.7098),
            transform: 'translateY(-50%)',
        },
    
        '&__wrap': {
            ...styles.rh(0.7098),
        },
        
        '&__slider': {
            '& > .slick-arrow': {
                top: '57%'
            }
        },
    
        '&__resize-container': {
            height: '75%',
            transform: 'translateY(-20px)',
            transitionTimingFunction: 'ease',
            transitionProperty: 'transform, height',
            transitionDuration: '0.2s, 0.5s',
            transitionDelay: '0.2s, 0s',
        },
    
        '&__slider .slick-current &, &__item._current &': {
            '&__resize-container': {
                transitionDelay: '0s, 0.2s',
                height: '100%',
                transform: 'translateY(0px)',
            },
        
            '&__img-wrap': {
                '&::before': {
                    opacity: '0.5'
                }
            },
        },
    
    },
    
    [styles.bp(1500)]: {
        margin: '110px 0',
        
        '&__item': {
            padding: '0 10px',
        },
    
        '&__resize-container': {
            transform: 'translateY(-15px)',
            borderRadius: '15px',
        },
    },
    
    [styles.bp(1300)]: {
        margin: '90px 0',
    
        '&__slider': {
            '.slick-list': {
                width: 'calc(100% / 12 * 11 + 14px)',
            },
        },
    
    
        '&__item': {
            padding: '0 7px',
        },
    
        '&__resize-container': {
            transform: 'translateY(-10px)',
        },
    },
    
    [styles.bp(900)]: {
        margin: '70px 0',
    
        '&__resize-container': {
            transform: 'none',
            height: '100%',
        },
        
        '&__slider': {
            marginBottom: '15px',
            
            '.slick-list': {
                width: 'calc(100% / 12 * 11 + 20px)',
            },
        },
        
        '&__item._current &': {
            '&__img-wrap': {
                '&::before': {
                    opacity: '0'
                }
            },
        },
    
        '&__item': {
            padding: '0 10px',
        },
        
        '&__img-wrap': {
 
        },
    
        '&__wrap': {
            height: '315px'
        },
    },
    
    [styles.bp(700)]: {
        margin: '60px 0',
        
        '&__slider': {
            '.slick-list': {
                width: 'calc(100% + 40px)',
                left: '-20px'
            },
        },
        
        '&__item': {
            padding: '0 20px',
        },
        
        '&__wrap': {
            height: '336px'
        },
    },
});

class ValuesSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            currentSlide: 1
        };

        this.defaultSettings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            speed: 700,
            arrows: true,
            centerPadding: '0',
            centerMode: true,
            responsive: [
                {
                    breakpoint: styles.breakpoints[900] + 1,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
                }
            ]
        };
    
        this.slider = React.createRef();
        this.sliderWrap = React.createRef();
        this.readyToCall = true;
    }

    beforeChange = (oldIndex, newIndex) => {
        this.parseSlides(newIndex);
        this.preventCall();
        
        this.setState({
            currentSlide: newIndex + 1
        })
    };
    
    arrowsHandler = (direction) => {
        if (direction < 0) {
            this.slider.current.slickPrev();
        }  else {
            this.slider.current.slickNext();
        }
    };

    preventCall = () => {
        this.readyToCall = false;
    };

    afterChange = () => {
        this.readyToCall = true;
    };

    parseSlides = (index) => {
        if (this.sliderWrap && this.sliderWrap.current) {
            const currentSlide = this.sliderWrap.current.querySelectorAll(".slick-slide:not(.slick-cloned)")[index];
    
            if (currentSlide) {
                this.clearClasses();
                this.setClasses(currentSlide, '_current');
            }
        }
    };

    setClasses = (el, mod) => {
        if (el) {
            const
                inner = el.getElementsByClassName("js-item")[0],
                index = inner.getAttribute('data-id'),
                related = this.sliderWrap.current.querySelectorAll('[data-id="'+index+'"]');

            for (let i = 0; i < related.length; i++) {
                related[i].classList.add(mod);
            }
        }
    };

    clearClasses = () => {
        const elements = this.sliderWrap.current.querySelectorAll('.js-item');

        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("_current");
        }
    };

    onClick = (key) => {
        if (this.readyToCall) {
            this.setState({
                isOpen: true,
                photoIndex: key
            })
        }
    };

    render() {
        const { photoIndex, isOpen, currentSlide } = this.state;
        const { title, images, background_block } = this.props.data;
        
        return (
            <section ref={this.sliderWrap} className={`${css_style} section`}>
                {background_block && <BackgroundBlock data={background_block}/>}

                {isOpen && images && (
                    <Lightbox
                        mainSrc={images[photoIndex].full}
                        nextSrc={images[(photoIndex + 1) % images.length].full}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length].full}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}

                <div className="container">
                    {title &&
                        <TitleWrap title={title} mod='_space' />
                    }

                    {images &&
                        <React.Fragment>
                            <Slider
                                ref={this.slider}
                                className={`${css_style}__slider`}
                                beforeChange={(oldIndex, newIndex) => {this.beforeChange(oldIndex, newIndex)}}
                                onSwipe={this.preventCall}
                                afterChange={this.afterChange}
                                {...this.defaultSettings}
                            >
                                {
                                    images.map((item, key) => {
                                        const { preview, alt='' } = item;
                
                                        return (
                                            <div key={key} data-id={key} className={`${css_style}__item js-item`}>
                                                <div className={`${css_style}__wrap`}>
                                                    <div className={`${css_style}__link`} onClick={this.onClick.bind(this, key)}/>
                            
                                                    <div className={`${css_style}__resize-container`}>
                                                        <div className={`${css_style}__img-wrap`}>
                                                            <img src={preview} className={`${css_style}__img`} alt={alt}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
    
                            <MediaQuery maxWidth={`${styles.breakpoints[900]}px`}>
                                <SliderCounterNav onArrowClick={this.arrowsHandler} currentSlide={currentSlide} total={images.length} />
                            </MediaQuery>
                        </React.Fragment>
                    }
                </div>
            </section>
        )
    }
}

export default ValuesSlider;
