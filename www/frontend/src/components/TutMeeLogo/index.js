import React, { Component } from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import { ReactComponent as TutMeeSvg } from "../../images/svg/tutmee.svg";

const css_style = css({
    display: 'block',
    position: 'relative',
    transition: styles.transitions.default,
    zIndex: '3',

    '&__logo-wrap': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    '&__svg-wrap': {
        width: '27px',
        height: '42px',

        'svg': {
            display: 'block',
            position: 'relative',
            maxWidth: '100%',
            maxHeight: '100%',
        }
    },
    '&__text': {
        color: styles.colors.white,
        display: 'block',
        position: 'relative',
        paddingRight: '15px',
        textAlign: 'right',
        ...fonts.p9,
    },

    '.tutmee_log_svg0, .tutmee_log_svg1': {
        transition: styles.transitions.default
    },

    '.tutmee_log_svg0': {
        fill: styles.colors.aqua,
    },
    '.tutmee_log_svg1': {
        fill: styles.colors.white,
    },

    '&__logo-wrap:hover': {
        '.tutmee_log_svg0': {
            fill: styles.colors.white,
        },
        '.tutmee_log_svg1': {
            fill: styles.colors.aqua,
        },
    },
    
    [styles.bp(700)]: {
        '&__logo-wrap': {
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end'
        },
        
        '&__text': {
            paddingRight: '0',
            paddingLeft: '15px',
            textAlign: 'left',
            
            'br': {
                display: 'none'
            }
        },
    
        '&__svg-wrap': {
            width: '17px',
            height: '27px',
        },
    }
});

class TutMeeLogo extends Component {
    render() {
        const { show='' } = this.props;

        return (
            <div className={`${css_style} ${show}`}>
                <a rel="noopener noreferrer" href="https://tutmee.ru/" target="_blank" className={`${css_style}__logo-wrap`}>
                    <span className={`${css_style}__text`}>LTD Tutmee<br/>Web development Agency</span>
                    
                    <div className={`${css_style}__svg-wrap`}>
                        <TutMeeSvg/>
                    </div>
                </a>
            </div>
        )
    }
}

export default TutMeeLogo;
