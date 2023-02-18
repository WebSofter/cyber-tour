import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import Slider from "react-slick";

import {Picture} from "react-responsive-picture";
import BackgroundBlock from "../BackgroundBlock";

const css_style = css({
    '&__slider': {
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '300px',
        marginBottom: '300px',
        ...styles.slickArrows,

        '& > .slick-arrow': {
            top: '30px',
            transform: 'none'
        },

        '.slick-list': {
            zIndex: '-15',
            ...styles.fixed('0','0','auto','50%'),
            width: '100vw',
            height: '100vh',
            transform: 'translateX(-50%) !important'
        },
        
        '.slick-track': {
            width: '100%',
            height: '100%',
        },
        
        '.slick-slide': {
            '& > *': {
                height: '100%'
            }
        },
    },

    '&__item': {
        display: 'block',
        position: 'relative',
        width: '100%',
        height: '100%',
        ...styles.maskAfter,
        
        'picture': {
            display: 'block',
            position: 'relative',
            width: '100%',
            height: '100%',
        }
    },

    '&__img': {
        display: 'block',
        position: 'relative',
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: 'center center'
    },
    
    [styles.bp(1500)]: {
        '&__slider': {
            height: '80px',
            marginBottom: '360px',
        },
    },
    
    [styles.bp(1300)]: {
 
    },
    
    [styles.bp(900)]: {
    
    },
    
    [styles.bp(700)]: {
        '&__slider': {
            height: '300px',
            marginBottom: '40px',
        },
    },
    
    [styles.bp(500)]: {
        '&__slider': {
            height: '100px',
            marginBottom: '120px',
        },
    },
});

class ProjectBgSlider extends React.Component {
    constructor(props) {
        super(props);

        this.defaultSettings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            speed: 2500,
            dots: false,
            arrows: true,
            fade: true,
            centerPadding: '0',
            autoplay: true,
            autoplaySpeed: 10000,

            pauseOnHover: false
        };
    }

    render() {
        const { data } = this.props;

        return (
            <section ref={this.slider} className={`${css_style} section`}>
                {data.background_block && <BackgroundBlock rootMargin='150%' data={data.background_block}/>}

                <div className="container">
                    {data.list &&
                        <Slider className={`${css_style}__slider`} {...this.defaultSettings}>
                            {
                                data.list.map((item, key) => {
                                    return (
                                        <div key={key} className={`${css_style}__item`}>
                                            <Picture className={`${css_style}__img`}
                                                     sources = {[
                                                         {
                                                             srcSet: item.mob,
                                                             media: `(max-width: ${styles.breakpoints[700]}px)`,
                                                         },
                                                         {
                                                             srcSet: item.desk,
                                                         },
                                                     ]}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    }
                </div>
            </section>
        )
    }
}

export default ProjectBgSlider;
