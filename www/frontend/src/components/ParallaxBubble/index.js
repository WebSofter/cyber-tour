import React from "react";
import { css } from "emotion";
import ParallaxWrap from "../../components/ParallaxWrap";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";

const css_style = css({
    position: 'relative',
    display: 'block',
    width: '80%',
    marginLeft: 'auto',
    ...styles.rh(),
    
    '&__bg': {
        ...styles.absolutely(),
        width: '100%',
        height: '100%',
        
        '&::before': {
            content: '""',
            display: 'block',
            position: 'relative',
            width: '100%',
            height: '100%',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundImage: `url(${require('../../images/bubbles/drop-1.png')})`,
            filter: 'blur(5px)',
    
            [styles.bp(700)]: {
                backgroundImage: `url(${require('../../images/bubbles/drop-1_mob.png')})`,
            }
        }
    },
    
    '&__text-parallax-container': {
        position: 'relative',
        ...styles.absolute(),
        width: '100%',
        height: '100%',
    },
    
    '&__text-wrap': {
        ...styles.absolute(),
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '&__text': {
        position: 'relative',
        display: 'block',
        maxWidth: '281px',
        ...fonts.p5,
        paddingBottom: '60px'
    },
    
    [styles.bp(1300)]: {
        width: '100%'
    },
    
    [styles.bp(900)]: {
        '&__text': {
            paddingBottom: '30px'
        }
    },
    
    [styles.bp(700)]: {
        maxWidth: '320px',
        
        '&__bg': {
            width: '120%',
            height: '120%',
            left: '5%'
        }
    },
});

class ParallaxBubble extends React.Component {
    render() {
        const { text } = this.props;
        
        return (
            <ParallaxWrap className={`${css_style}`}>
                <div className={`${css_style}__bg js-layer`} data-depth={1.3} />
                <div className={`${css_style}__text-parallax-container js-layer`} data-depth={2}>
                    <div className={`${css_style}__text-wrap`} >
                        <div className={`${css_style}__text`} >
                            {require('html-react-parser')(text)}
                        </div>
                    </div>
                </div>
            </ParallaxWrap>
        )
    }
}

export default ParallaxBubble;
