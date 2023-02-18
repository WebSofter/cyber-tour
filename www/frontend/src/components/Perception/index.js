import React from "react";
import { css, keyframes } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import CirclesBg from "../../components/CirclesBg";
import {setPopupData} from "../../actions/SetPopupData";
import {connect} from "react-redux";
import MediaQuery from "react-responsive/src/Component";
import Slider from "react-slick";
import SliderCounterNav from "../SliderCounterNav";

const bubblesAnimation = keyframes`
    0% {
        opacity: 0;
    }
    
    50% {
        opacity: 1;
    }
    
    100% {
        opacity: 0;
    }
`;

const enterLink = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20%);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const exitLink = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    
    100% {
        opacity: 0;
        transform: translateY(-20%);
    }
`;

const css_style = css({
    marginTop: '130px',

    '&__container': {
        display: 'block',
        position: 'relative',
        width: '100%',
    },

    '&__size-wrap': {
        display: 'block',
        position: 'relative',
        width: '1249px',
    },

    '&__bg-bubbles-wrap': {
        ...styles.absolute(),
        width: '100%',
        height: '100%',
        zIndex: '2'
    },

    '&__bg-bubble': {
        ...styles.absolute('0','auto','auto','0'),
        ...styles.rh(),
        background: `url(${require('../../images/bubbles/bubble-bg-1.png')}) center center no-repeat`,
        backgroundSize: 'contain',
        opacity: '0',
        animation: `${bubblesAnimation} 4s ease infinite`,
        ...styles.setDelays({
            base: 0,
            count: 7,
            delay: 500,
            type: 'animation',
        }),

        '&:nth-of-type(1)': {
            left: '24%',
            top: '0%',
            width: '5%',
        },
        '&:nth-of-type(5)': {
            left: '0%',
            top: '28%',
            width: '7%',
        },
        '&:nth-of-type(3)': {
            left: '22%',
            top: '79%',
            width: '7%',
        },
        '&:nth-of-type(6)': {
            left: '75%',
            top: '75%',
            width: '7%',
        },
        '&:nth-of-type(2)': {
            left: '95%',
            top: '58%',
            width: '3%',
        },
        '&:nth-of-type(4)': {
            left: '87%',
            top: '28%',
            width: '3%',
        },
        '&:nth-of-type(7)': {
            left: '88%',
            top: '-2%',
            width: '11%',
        },

    },

    '&__list': {
        width: '100%',
        height: '100%',
        zIndex: '3',
        
        '.slick-list': {
            overflow: 'visible'
        },
        
        '.slick-slide': {
            '&.slick-current': {
                zIndex: '9 !important'
            }
        }
    },


    '&__content': {
        ...styles.absolute(),
        width: '100%',
        height: '100%',
        zIndex: '3',
    },
    
    '&__text': {
        ...fonts.p10,
        textAlign: 'center',
        zIndex: '3',
        transition: styles.transitions.default
    },
    
    '&__more': {
        ...fonts.p6,
        color: styles.colors.aqua,
        marginTop: '3px'
    },
    
    [styles.bpm(700)]: {
        '&__list': {
            ...styles.absolute(),
        },
        
        '&__size-wrap': {
            ...styles.rh(0.5428),
	        left: '50%',
	        transform: 'translateX(-50%)'
        },
        
        '&__text': {
            ...styles.absolute(),
            width: '80%',
            height: '80%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
    
        '&__link:hover &__text': {
            transform: 'scale(1.2)'
        },
        
        '&__link': {
            ...styles.rh(),
            ...styles.absolute('0','auto','auto','0'),
            width: '20%',
            borderRadius: '50%',
            cursor: 'pointer',
        
            '&::before': {
                content: '""',
                display: 'block',
                ...styles.absolute(),
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                transition: styles.transitions.type2,
                opacity: '0',
                zIndex: '2',
            },
        
            '&:hover': {
                '&::before': {
                    opacity: '1',
                },
            },
        
            '&:nth-of-type(1)': {
                left: '37%',
                width: '22%',
            },
        
            '&:nth-of-type(2)': {
                left: '14%',
                width: '19%',
                top: '15%',
            },
        
            '&:nth-of-type(3)': {
                left: '32.5%',
                width: '16%',
                top: '48%',
            },
        
            '&:nth-of-type(4)': {
                left: '54%',
                width: '19%',
                top: '43%',
            },
        
            '&:nth-of-type(5)': {
                left: '64.5%',
                width: '18%',
                top: '3.5%',
            },
        
            '&:nth-of-type(6)': {
                left: '77%',
                width: '14%',
                top: '40%',
            },
        },
    },
    
    [styles.bp(1500)]: {
        marginTop: '100px',
    },
    
    [styles.bp(1300)]: {
        marginTop: '80px',
        
        '&__size-wrap': {
            width: '989px',
        },
    },
    
    [styles.bp(900)]: {
        marginTop: '50px',
        
        '&__size-wrap': {
            width: '819px',
        },
    },
    
    [styles.bp(700)]: {
        marginTop: '20px',
        
        '&__content': {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        
        '&__size-wrap': {
            width: '100%',
        },
        
        '&__list': {
            width: '100%',
	        
	        '.slick-list, .slick-slide': {
            	width: '100%'
	        }
        },
        
        '&__link': {
            display: 'block',
            position: 'relative',
            width: '80%',
            maxWidth: '350px',
            margin: '10% auto',
            ...styles.rh(),
            animation: `${exitLink} 1s ease both`
        },
        
        '&__list .slick-slide.slick-current &': {
            '&__link': {
                animation: `${enterLink} 1s ease both`
            },
        }
    }
});

class Perception extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentSlide: 1
        };
    
        this.slider = React.createRef();
        
        this.defaultSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            speed: 1000,
            arrows: false,
            fade: true,
            centerPadding: '0'
        };
        
        this.colors = [
            [
                '#42f0ce',
                '#42f0ce',
                '#42DBF0',
                '#42f0ce',
            ],
            [
                '#20068f',
                '#20068f',
                '#6549DD',
                '#20068f',
            ],
            [
                '#C94FE6',
                '#C94FE6',
                '#A34FE6',
                '#C94FE6',
            ],
            [
                '#461a86',
                '#461a86',
                '#945AEA',
                '#461a86',
            ],
            [
                '#5266f8',
                '#5266f8',
                '#7DD0FF',
                '#5266f8',
            ],
            [
                '#dd22b5',
                '#dd22b5',
                '#945AEA',
                '#dd22b5',
            ]
        ]
    }

    onClick = (data) => {
        const { setPopupData } = this.props;
        
        if (data) {
            setPopupData({show: true, data: {...data}});
        }
    };
    
    renderLinkContent = (item, index) => {
        const { title, link_more, popup_data } = item;
        
        return (
            <React.Fragment>
                <CirclesBg colors={this.colors[index]} />
    
                <div className={`${css_style}__content`}>
                    <span className={`${css_style}__text`}>
                        {title}
                    </span>
                    
                    <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                        <span className={`${css_style}__more`} onClick={this.onClick.bind(this, popup_data)}>
                            {link_more}
                        </span>
                    </MediaQuery>
                </div>
            </React.Fragment>
        )
    };
    
    renderLinks = (list) => {
        const itemsCount = list.length - 1;
        let counter = 0;

        return (
            list.map((item, key) => {
                if (counter > itemsCount) counter = 0;

                const
                    { popup_data } = item,
                    
                    hoverStyle = css({
                        '&::before': {
                            background: `linear-gradient(155deg, ${this.colors[counter][0]}, ${this.colors[counter][2]})`
                        }
                    }),
                    
                    index = counter++;
                
                return (
                    <MediaQuery key={key} maxWidth={`${styles.breakpoints[700]}px`}>
                        {(matches) => matches
                            ?
                                <div className={`${css_style}__link`}>
                                    {this.renderLinkContent(item, index)}
                                </div>
                            :
                                <div className={`${css_style}__link ${hoverStyle}`} onClick={this.onClick.bind(this, popup_data)}>
                                    {this.renderLinkContent(item, index)}
                                </div>
                        }
                    </MediaQuery>
                )
            })
        )
    };

    renderBgBubbles = () => {
        let array = [];

        for (let i = 0; i < 7; i++) {
            array.push(
                <div key={i} className={`${css_style}__bg-bubble`} />
            );
        }

        return array;
    };
    
    slideChangeHandler = (index) => {
        this.setState({
            currentSlide: index + 1
        })
    };
    
    arrowsHandler = (direction) => {
        if (this.slider && this.slider.current) {
            if (direction < 0) {
                this.slider.current.slickPrev();
            }  else {
                this.slider.current.slickNext();
            }
        }
    };
    
    renderList = (list) => {
        const { currentSlide } = this.state;
        
        return (
            <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                {(matches) =>
                    matches
                    ?
                        <React.Fragment>
                            <Slider
                                ref={this.slider}
                                className={`${css_style}__list`}
                                afterChange={this.slideChangeHandler}
                                {...this.defaultSettings}
                            >
                                {this.renderLinks(list)}
                            </Slider>
    
                            <MediaQuery maxWidth={`${styles.breakpoints[900]}px`}>
                                <SliderCounterNav onArrowClick={this.arrowsHandler} currentSlide={currentSlide} total={list.length} />
                            </MediaQuery>
                        </React.Fragment>
                        
                    :
                        <div className={`${css_style}__list`}>
                            {this.renderLinks(list)}
                        </div>
                }
            </MediaQuery>
        )
    };
    
    render() {
        const { list } = this.props.data;
        
        return (
            <section className={`${css_style} section`}>
                <div className='container'>
                    <div className='narrow-container'>
                        <div className={`${css_style}__container`}>
                            <div className={`${css_style}__size-wrap`}>
                                {list && this.renderList(list)}
                                
                                <MediaQuery minWidth={`${styles.breakpoints[700] + 1}px`}>
                                    <div className={`${css_style}__bg-bubbles-wrap`}>
                                        {
                                            this.renderBgBubbles()
                                        }
                                    </div>
                                </MediaQuery>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPopupData: obj => dispatch(setPopupData(obj))
    }
};

export default connect(null, mapDispatchToProps)(Perception);

