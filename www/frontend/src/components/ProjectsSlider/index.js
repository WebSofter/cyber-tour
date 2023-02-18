import React from "react";
import { css, keyframes } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts"
import Slider from "react-slick";

import {NavLink} from "react-router-dom";
import BackgroundBlock from "../BackgroundBlock";
import SliderCounterNav from "../../components/SliderCounterNav";
import ProjectsNav from "../../components/ProjectsNav";
import MediaQuery from "react-responsive";

const showEl = keyframes`
    from {
       opacity: 0;
    }
    
    to {
        opacity: 1;
    }
`;

const css_style = css({
    animation: `${showEl} .5s ease both`,
    animationDelay: '1s',
    margin: '100px auto 60px',
    
    '.slick-list': {
        overflow: 'visible',
        margin: '0 auto'
    },
    
    '.slick-slide': {
        position: 'relative',
        
        '&.slick-current': {
            zIndex: '5'
        }
    },

    '&._small': {
        '.slick-list': {
            width: '20%',
        },
    },

    '&__item': {
        transform: 'scale(0.6)',
        transition: styles.transitions.default,
        perspective: '1000px',
        willChange: 'transform',
        filter: 'blur(5px)',

        '&._current': {
            transform: 'scale(1)',
            filter: 'blur(0)',
        },
        '&._prev, &._next': {
            transform: 'scale(0.8)',
            filter: 'blur(2px)',
        },

        'img': {
            display: 'block',
            position: 'relative',
            width: '100%'
        }
    },

    '&__link': {
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '0',
        pointerEvents: 'none',
        transition: 'height 0s linear',
        transitionDelay: '0s',
        zIndex: '10',
        userSelect: 'none',
        userDrag: 'none'
    },

    '&__content': {
        ...styles.absolute(),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        width: 'calc(100% - 60px)',
        height: 'calc(100% - 60px)',
        opacity: '0',
        transition: styles.transitions.default,
        zIndex: '7',
    },

    '&__item._current &': {
        '&__content': {
            opacity: '1',
        },

        '&__link': {
            height: '100%',
            pointerEvents: 'auto',
            transitionDelay: '0.2s'
        },
    },

    '&__item._current &__wrap:hover &': {
        '&__img': {
            transform: 'scale(1.2)'
        },
    },

    '&__wrap': {
        transition: styles.transitions.default,
        willChange: 'transform',
        transformOrigin: '50% 50%',
        cursor: 'pointer',

        '&::before': {
            content: '""',
            ...styles.absolute('0','auto','0','-9%'),
            width: '117%',
            height: '117%',
            backgroundImage: `url(${require('../../images/bubbles/light.png')})`,
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            zIndex: '5',
            pointerEvents: 'none',
            transition: styles.transitions.default,
            filter: 'blur(2px)',
            opacity: '0'
        }
    },

    '&__item._current &__wrap': {
        transform: 'rotateY(0deg)',

        '&::before': {
            opacity: '1'
        }
    },

    '&__item._prev &__wrap': {
        transform: 'rotateY(45deg)',
    },

    '&__item._next &__wrap': {
        transform: 'rotateY(-45deg)',
    },

    '&__item._first &__wrap': {
        transform: 'rotateY(50deg) translateZ(10vw)',
    },

    '&__item._last &__wrap': {
        transform: 'rotateY(-50deg) translateZ(10vw)',
    },

    '&__bg': {
        display: 'block',
        position: 'relative',
        zIndex: '1',
        borderRadius: '20px',
        overflow: 'hidden',

        '&::before': {
            content: '""',
            ...styles.absolute(),
            width: '100%',
            height: '100%',
            background: 'linear-gradient(76.85deg, rgba(62, 28, 166, 0.4) 15.65%, rgba(18, 18, 138, 0.4) 86.65%)',
            zIndex: '2'
        }
    },

    '&__img': {
        display: 'block',
        position: 'relative',
        zIndex: '1',
        transition: styles.transitions.type2
    },

    '&__category-text': {
        ...styles.absolute('0','auto','auto','0'),
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '1',
        textTransform: 'uppercase',
        opacity: '0.3'
    },

    '&__title': {
        ...fonts.p5u
    },

    '&__text': {
        ...fonts.p6,
        marginTop: '20px'
    },
    
    [styles.bp(1500)]: {
        maxWidth: '960px',
        margin: '80px auto 30px',
        
        '&._small': {
            '.slick-list': {
                width: 'calc(100% / 3)',
            },
        },
    
        '&__item._first &__wrap': {
            transform: 'rotateY(50deg) translateZ(15vw)',
        },
    
        '&__item._last &__wrap': {
            transform: 'rotateY(-50deg) translateZ(15vw)',
        },
    },
    
    [styles.bp(1200)]: {
        margin: '50px auto',
        
        '&__item._prev &__wrap': {
            transform: 'rotateY(45deg) translateZ(100px)',
        },

        '&__item._next &__wrap': {
            transform: 'rotateY(-45deg) translateZ(100px)',
        },
    
        '&__item._first &__wrap': {
            transform: 'rotateY(50deg) translateZ(370px)',
        },
    
        '&__item._last &__wrap': {
            transform: 'rotateY(-50deg) translateZ(370px)',
        },
    },
    
    [styles.bp(900)]: {
        maxWidth: "none",
        minWidth: "900px",
        left: "50%",
        transform: "translateX(-50%)",
    
        '&__item._prev &__wrap': {
            transform: 'rotateY(45deg) translateZ(140px) scale(0.9)',
        },
    
        '&__item._next &__wrap': {
            transform: 'rotateY(-45deg) translateZ(140px) scale(0.9)',
        },
    
        '&__item._first &__wrap': {
            transform: 'rotateY(50deg) translateZ(430px) scale(0.8)',
        },
    
        '&__item._last &__wrap': {
            transform: 'rotateY(-50deg) translateZ(430px) scale(0.8)',
        },
    },
    
    [styles.bp(700)]: {
        maxWidth: "280px",
        minWidth: "0",
        left: "0",
        transform: "none",
        margin: '40px auto 25px',
    
        '&._small': {
            '.slick-list': {
                width: '100%',
            },
        },
    
        '&__item &__wrap': {
            transform: 'none !important',
        },
    }
});

const css_style_wrap = css({
    [styles.bp(700)]: {
        marginBottom: '15px',
    }
});

class ProjectsSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeCategory: 'all',
            currentSlide: null
        };

        this.defaultSettings = {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            speed: 500,
            dots: false,
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '0',
        };
        
        this.responsiveSettings = {
            responsive: [
                {
                    breakpoint: styles.breakpoints[1500] + 1,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: styles.breakpoints[700] + 1,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        };

        this.slider = React.createRef();
        this.sliderWrap = React.createRef();
        this.navLinksDisabled = false;
        this.clickPos = 0;
    }

    beforeChange = (oldIndex, newIndex) => {
        this.disableNavLinks();
        this.parseSlides(newIndex);
        
        this.setState({
            currentSlide: newIndex + 1
        })
    };
    
    disableNavLinks = () => {
        this.navLinksDisabled = true;
    };
    
    afterChange = (index) => {
        this.navLinksDisabled = false;
    };
    
    handleOnMouseDown = (e) => {
        this.clickPos = e.pageX;
    };
    
    handleClick = (e) => {
        const diff = Math.abs(this.clickPos - e.pageX) > 50;
        
        if(this.navLinksDisabled || diff) e.preventDefault()
    };
    
    parseSlides = (index) => {
        if (this.sliderWrap && this.sliderWrap.current) {
            const currentSlide = this.sliderWrap.current.querySelectorAll(".slick-slide:not(.slick-cloned)")[index];
    
            if (currentSlide) {
                const prevSlide = currentSlide.previousSibling;
        
                const firstSlide = prevSlide ? prevSlide.previousSibling : false;
                const nextSlide = currentSlide.nextSibling;
                const lastSlide = nextSlide ? nextSlide.nextSibling : false;
        
                this.clearClasses();
                this.setClasses(firstSlide, '_first');
                this.setClasses(prevSlide, '_prev');
                this.setClasses(currentSlide, '_current');
                this.setClasses(nextSlide, '_next');
                this.setClasses(lastSlide, '_last');
            }
        }
    };

    setClasses = (el, mod) => {
        if (el) {
            const inner = el.getElementsByClassName("js-item")[0];
            const index = inner.getAttribute('data-id');
            const related = this.sliderWrap.current.querySelectorAll('[data-id="'+index+'"]');

            for (let i = 0; i < related.length; i++) {
                related[i].classList.add(mod);
            }
        }
    };

    clearClasses = () => {
        const elements = this.sliderWrap.current.querySelectorAll('.js-item');

        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("_first","_prev","_current","_next","_last");
        }
    };


    onInit = (itemsLength, slidesToShow) => {
        setTimeout(() => {
            this.parseSlides(this.getMiddleSlideIndex(itemsLength, slidesToShow));
        }, 1000)
    };

    getMiddleSlideIndex = (itemsLength, slidesToShow) => {
        const match = itemsLength === slidesToShow;
        const isMob = window.innerWidth <= 700;
        return ((slidesToShow > 1 && !match) || isMob) ? 0 : Math.floor((itemsLength - 1) / 2);
    };
    
    renderItem = (item, key) => {
        return (
            <div key={key} data-id={key} className={`${css_style}__item js-item`} >
                <div className={`${css_style}__wrap`}>
                    <NavLink to={item.link} className={`${css_style}__link`} onMouseDown={e => this.handleOnMouseDown(e)} onClick={e => this.handleClick(e)} />

                    <div className={`${css_style}__bg`}>
                        {item.img &&
                            <img src={item.img} className={`${css_style}__img`} alt={item.title}/>
                        }
                    </div>
                    <div className={`${css_style}__content`}>
                        {item.category_text &&
                            <div className={`${css_style}__category-text`}>
                                <div className='rotated-text'>
                                    <span>{item.category_text}</span>
                                </div>
                            </div>
                        }
                        {item.title &&
                            <div className={`${css_style}__title`}>
                                {item.title}
                            </div>
                        }
                        {item.text &&
                            <div className={`${css_style}__text`}>
                                {item.text}
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    };

    renderItems = (list) => {
        const { activeCategory } = this.state;
        let itemsArray = [];

        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            const categoryMatch = (activeCategory === item.category_id || activeCategory === 'all');

            if (categoryMatch) itemsArray.push(this.renderItem(item, i));
        }

        return itemsArray;
    };

    filterProjects = (id) => {
        const { activeCategory } = this.state;

        if (activeCategory !== id) {
            this.setState({
                activeCategory: id,
                currentSlide: null
            })
        }
    };

    arrowsHandler = (direction) => {
        if (direction < 0) {
            this.slider.current.slickPrev();
        }  else {
            this.slider.current.slickNext();
        }
    };
    
    renderSlider = (list) => {
        const { currentSlide } = this.state;
        const items = this.renderItems(list);
        const lessThanShow = items.length <= this.defaultSettings.slidesToShow;
        const settings = lessThanShow ? {...this.defaultSettings, infinite: false, slidesToShow: 1} : {...this.defaultSettings, ...this.responsiveSettings};
        const sliderMod =  lessThanShow ? '_small' : '';
        const { activeCategory } = this.state;
        const initialSlide = this.getMiddleSlideIndex(items.length, settings.slidesToShow);
        
        settings.initialSlide = initialSlide;

        return (
            <React.Fragment>
                <Slider
                    ref={this.slider}
                    key={activeCategory}
                    className={`${css_style} ${sliderMod}`} {...settings}
                    beforeChange={(oldIndex, newIndex) => {this.beforeChange(oldIndex, newIndex)}}
                    onInit={this.onInit.bind(this, items.length, settings.slidesToShow)}
                    onSwipe={this.disableNavLinks}
                    afterChange={this.afterChange}
                >
                    {
                        this.renderItems(list)
                    }
    
                </Slider>
    
                <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                    <SliderCounterNav onArrowClick={this.arrowsHandler} currentSlide={currentSlide || initialSlide + 1} total={items.length} />
                </MediaQuery>
            </React.Fragment>
        )
    };
    
    render() {
        const { categories, list=[], background_block } = this.props.data;

        return (
            <section ref={this.sliderWrap} className={`${css_style_wrap} section`}>
                {background_block && <BackgroundBlock data={background_block}/>}

                {categories &&
                    <ProjectsNav onSelect={this.filterProjects} categories={categories} />
                }

                {list.length &&
                    this.renderSlider(list)
                }
            </section>
        )
    }
}

export default ProjectsSlider;
