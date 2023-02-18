import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";

import BackgroundBlock from "../BackgroundBlock";
import Stars from "../Stars";
import TitleWrap from "../TitleWrap";
import fonts from "../../constants/fonts";
import {setPopupData} from "../../actions/SetPopupData";
import {connect} from "react-redux";

const css_style = css({
    '&__list': {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        width: 'calc(100% + 30px)',
        left: '-15px',
        margin: '-15px 0 0'
    },
    '&__item': {
        position: 'relative',
        width: 'calc(100% / 3 - 30px)',
        margin: '15px 15px 0',
        padding: '70px 40px 40px',
        cursor: 'pointer',
    
        '&::before': {
            content: '""',
            ...styles.absolute('0','auto','0','-7%'),
            width: '114%',
            height: '118%',
            backgroundImage: `url(${require('../../images/bubbles/light2.png')})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            zIndex: '2',
            pointerEvents: 'none',
            transition: styles.transitions.default,
            filter: 'blur(2px)',
            opacity: '0',
        },
        
        '&::after': {
            content: '""',
            ...styles.absolute(),
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            border: `1px solid ${styles.colors.white}`,
            zIndex: '1'
        },
        
        '&:hover': {
            '&::before': {
                opacity: '1'
            },
        }
    },
    
    '&__item:hover': {
        '.star-icon': {
            ...styles.setDelays({base: 0, count: 5, delay: 50}),
            
            '&::before': {
                color: styles.colors.gold
            },
            '&::after': {
                opacity: 1
            },
        }
    },
    
    '&__content': {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: 'relative',
        textAlign: 'center',
        zIndex: '3'
    },
    '&__stars': {
        marginBottom: '20px'
    },
   
    '&__title': {
        ...fonts.p3
    },
    '&__text': {
        marginTop: '20px',
        ...fonts.p5s
    },
    '&__label': {
        marginTop: '34px',
        ...fonts.p5u,
        color: styles.colors.aqua,
        transition: styles.transitions.default,
        cursor: 'pointer',
        
        '&:hover': {
            color: styles.colors.white,
        }
    },
    
    [styles.bp(1500)]: {
        '&__list': {
            width: 'calc(100% + 20px)',
            left: '-10px',
            margin: '-10px 0 0'
        },
        
        '&__text': {
            marginTop: '10px',
        },
        
        '&__item': {
            width: 'calc(100% / 3 - 20px)',
            margin: '10px 10px 0',
            padding: '65px 30px 30px',
        },
    
        '&__label': {
            marginTop: '55px',
        },
    },
    
    [styles.bp(1300)]: {
        '&__list': {
            width: '100%',
            maxWidth: '880px',
            left: '0',
            margin: '0 auto'
        },
        
        '&__item': {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            width: '100%',
            minHeight: '288px',
            margin: '0 0 30px',
            padding: '50px 30px 30px',
        },
        
        '&__label': {
            marginTop: '28px',
        },
        
        '&__content': {
            maxWidth: '440px',
            margin: 'auto',
        }
    },
    
    [styles.bp(900)]: {
        '&__list': {
            maxWidth: '585px',
        },
        
        '&__item': {
            minHeight: '250px',
            padding: '30px',
        },
        
        '&__content': {
            maxWidth: '340px',
        }
    },
    
    [styles.bp(700)]: {
        '&__list': {
            maxWidth: '280px',
        },
    
        '&__item': {
            minHeight: '207px',
            marginBottom: '20px',
        },
    }
});

class Offers extends React.Component {
    renderStars = (count) => {
        let stars = [];
        
        for (let i = 0; i < count; i++) {
            stars.push(
                <span key={i} className={`${css_style}__star icon-star`} />
            )
        }
        
        return stars;
    };
    
    onClick = (popup_data) => {
        const { setPopupData } = this.props;
        
        if (popup_data && popup_data) {
            setPopupData({
                show: true,
                data: {...popup_data}
            })
        }
    };
    
    render() {
        const { title, subtitle, list, background_block } = this.props.data;

        return (
            <section className={`${css_style} section`}>
                {background_block && <BackgroundBlock data={background_block}/>}

                <div className="container">
                    <div className="inner-container-fc">
                        {(title || subtitle) &&
                            <TitleWrap title={title} subtitle={subtitle} mod='_line' />
                        }
                        
                        {list &&
                            <div className={`${css_style}__list`}>
                                {
                                    list.map((item, key) => {
                                        const { stars, title, text_preview, label, popup_data } = item;
                                        const popupData = {...popup_data, stars: stars};
                                        
                                        return (
                                            <div key={key} className={`${css_style}__item`} onClick={this.onClick.bind(this, popupData)}>
                                                <div className={`${css_style}__content`}>
                                                    {stars &&
                                                        <div className={`${css_style}__stars`}>
                                                            <Stars count={stars} />
                                                        </div>
                                                    }
                                                    {title &&
                                                        <h5 className={`${css_style}__title`}>
                                                            {require('html-react-parser')(title)}
                                                        </h5>
                                                    }
                                                    {text_preview &&
                                                        <h5 className={`${css_style}__text`}>
                                                            {require('html-react-parser')(text_preview)}
                                                        </h5>
                                                    }
                                                    {label &&
                                                        <span className={`${css_style}__label`}>
                                                            {require('html-react-parser')(label.text)}
                                                        </span>
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
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

export default connect(null, mapDispatchToProps)(Offers);
