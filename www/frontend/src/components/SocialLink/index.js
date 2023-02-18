import React from "react";
import { css } from "emotion";
import fonts from "../../constants/fonts";
import styles from "../../constants/styles";

const css_style = css({
    display: 'flex',
    alignItems: 'center',
    marginRight: '90px',
    
    '&:last-child': {
        marginRight: '0'
    },
    
    '&__icon': {
        '&::before': {
            fontSize: '23px',
            color: styles.colors.aqua,
            display: 'block',
        }
    },
    
    '&__text': {
        ...fonts.p10,
        color: styles.colors.white,
        transition: styles.transitions.default,
        paddingLeft: '14px'
    },
    
    '&:hover &': {
        '&__text': {
            color: styles.colors.aqua,
        },
    },
    
    '&._gradient &': {
        '&__icon': {
            '&::before': {
                background: 'linear-gradient(133.78deg, #01DCEA 0%, #5069F8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
            }
        },
    },
    
    [styles.bp(1500)]: {
        marginRight: '60px',
    },
    
    [styles.bp(1300)]: {
        '&__text': {
            display: 'none'
        }
    },
    
    [styles.bp(700)]: {
        marginRight: '29px',
    }
});

class SocialLink extends React.Component {
    render() {
        const { link, icon, text, gradient_fill } = this.props.data;
        const gradientMod = gradient_fill ? '_gradient' : '';

        return (
            <a href={link} target='_blank' rel="noopener noreferrer" className={`${css_style} ${gradientMod}`}>
                <div className={`${css_style}__icon icon-${icon}`}/>
                <span className={`${css_style}__text`}>{text}</span>
            </a>
        )
    }
}

export default SocialLink;
