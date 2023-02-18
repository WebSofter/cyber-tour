import React from "react";
import { css } from "emotion";
import Button from '../../components/Button';
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";

import BackgroundText from "../../components/BackgroundText";
import BackgroundBlock from "../../components/BackgroundBlock";
import ParallaxWrap from "../ParallaxWrap";

const css_style = css({
    padding: '50px 0',
    marginTop: '100px',
    
    '&__content': {
        textAlign: 'center',
        
        '&::after': {
            content: '""',
            display: 'block',
            position: 'relative',
            width: '2px',
            height: '25px',
            margin: '20px auto 0',
            background: styles.colors.aqua
        }
    },
    
    '&__button-wrap': {
        display: 'block',
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        marginTop: '20px'
    },
    
    '&__title': {
        ...fonts.p1,
        marginBottom: '35px'
    },
    
    '&__text': {
        ...fonts.p3,
        maxWidth: '750px',
        margin: '0 auto',
    },

    '&__parallax-wrap': {
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%'
    },

    '&__bubble-wrap': {
        ...styles.absolute('0','auto','auto','0'),
        ...styles.rh(),
        transform: 'translate(-50%, -50%)',
        display: 'block',
        width: 'calc(100% / 8 * 3)',
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
            transform: 'rotate(12deg)',
            filter: 'blur(2px)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${require('../../images/bubbles/relax-zone.png')})`
        }
    },
    
    [styles.bp(1300)]: {
        '&__title': {
            marginBottom: '25px'
        },
    },
    
    [styles.bp(900)]: {
        marginTop: '50px',
        
        '&__title': {
            marginBottom: '15px'
        },
    },
    
    [styles.bp(700)]: {
        marginTop: '0',
        
        '&__content': {
            '&::after': {
                width: '1px',
            }
        },
    
    }
});

class HelpBlock extends React.Component {
    render() {
        const { data } = this.props;
        const { title, text, bg_text, background_block, bubble, button } = data;
        
        return (
            <section className={`${css_style} section`}>
                {background_block && <BackgroundBlock data={background_block}/>}
                
                <div className="container">
                    <div className={`${css_style}__content narrow-container`}>
                        {bg_text && <BackgroundText data={bg_text} />}

                        {bubble &&
                            <div className={`${css_style}__bubble-wrap`}>
                                <ParallaxWrap className={`${css_style}__parallax-wrap`}>
                                    <div className={`${css_style}__bubble js-layer`} data-depth={1.2} />
                                </ParallaxWrap>
                            </div>
                        }

                        {title &&
                            <div className={`${css_style}__title`}>
                                {require("html-react-parser")(title)}
                            </div>
                        }
        
                        {text &&
                            <div className={`${css_style}__text`}>
                                {require("html-react-parser")(text)}
                            </div>
                        }
                    </div>
                    
                    {button &&
                        <div className={`${css_style}__button-wrap`}>
                            <Button data={button} />
                        </div>
                    }
                </div>
            </section>
        )
    }
}

export default HelpBlock;
