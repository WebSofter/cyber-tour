import React from "react";
import { css } from "emotion";
import fonts from "../../constants/fonts";

import Breadcrumbs from "../Breadcrumbs";
import BackgroundBlock from "../BackgroundBlock";
import styles from "../../constants/styles";
import ParallaxWrap from "../ParallaxWrap";

const css_style = css({
    marginBottom: '100px',
    
    '&__content': {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: 'relative',
        textAlign: 'center',
        marginTop: '10px'
    },
    
    '&__title': {
        ...fonts.h1u,

        '&._rainbow': {
            background: 'linear-gradient(90.67deg, #2B84B6 15.84%, #3EECF2 42.69%, #E46AD8 64.59%, #69619C 84.58%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: styles.colors.white
        }
    },

    '&__subtitle': {
        ...fonts.p4,
        width: '50%',
        margin: '30px auto 0'
    },

    '&._small &': {
        '&__title': {
            ...fonts.h1,
            textTransform: 'none'
        },
    },
    
    '&__parallax-wrap': {
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%'
    },
    
    '&__bubble-wrap': {
        ...styles.absolute('80%','-5%','auto','auto'),
        ...styles.rh(),
        display: 'block',
        width: 'calc(100% / 8 * 2.3)',
        zIndex: '-1'
    },
    
    '&__bubble': {
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%',
        
        '&::before': {
            content: '""',
            display: 'block',
            ...styles.absolute(),
            width: '100%',
            height: '100%',
            transform: 'rotate(70deg)',
            filter: 'blur(4px)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${require('../../images/bubbles/drop-3.png')})`
        }
    },
    
    '&._clear-b': {
        marginBottom: '0',
    },
    
    [styles.bp(1500)]: {
        marginBottom: '70px',
        
        '&__bubble-wrap': {
            top: '72%',
            right: '-2%'
        },
    },
    
    [styles.bp(1300)]: {
        marginBottom: '50px',
        
        '&__bubble-wrap': {
            top: '100%',
            right: '0'
        },
        
        '&__subtitle': {
            width: '80%',
        },
        
        '&__content': {
            marginTop: '15px'
        },
        
        '&._pb': {
            paddingBottom: '40px'
        },
    },
    
    [styles.bp(900)]: {
        '&__subtitle': {
            marginTop: '20px'
        },
        
        '&._pb': {
            paddingBottom: '30px'
        },
    },
    
    [styles.bp(700)]: {
        marginBottom: '30px',
    
        '&__content': {
            textAlign: 'left',
            alignItems: "flex-start",
        },
    
        '&__subtitle': {
            width: '100%',
            marginTop: '10px'
        },
    
        '&__bubble-wrap': {
            top: '80%',
            width: '196px'
        },
        
        '&._pb': {
            paddingBottom: '110px'
        },
    }
});

class PageHeader extends React.Component {
    render() {
        const { data, mod='', titleMod, bubble } = this.props;
        const { breadcrumbs, title, subtitle, background_block } = data;
        const bubbleMod = bubble ? ' _pb' : '';

        return (
            <section className={`${css_style} section ${mod}${bubbleMod}`}>
                {background_block && <BackgroundBlock data={background_block}/>}

                <div className='container'>
                    <div className='inner-container'>
                        {bubble &&
                            <div className={`${css_style}__bubble-wrap`}>
                                <ParallaxWrap className={`${css_style}__parallax-wrap`}>
                                    <div className={`${css_style}__bubble js-layer`} data-depth={0} />
                                </ParallaxWrap>
                            </div>
                        }
                        
                        {breadcrumbs &&
                            <Breadcrumbs data={breadcrumbs} />
                        }
                        
                        <div className={`${css_style}__content`}>
                            {title && title.text &&
                                <h1 className={`${css_style}__title ${titleMod}`}>
                                    {require("html-react-parser")(title.text)}
                                </h1>
                            }
                            
                            {subtitle &&
                                <p className={`${css_style}__subtitle`}>
                                    {require("html-react-parser")(subtitle)}
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PageHeader;
