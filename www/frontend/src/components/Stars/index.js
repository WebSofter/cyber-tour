import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";

const css_style = css({
    display: 'flex',
    
    '&__star': {
        display: 'block',
        position: 'relative',
        marginRight: '14px',
        
        '&::before, &::after': {
            fontFamily: 'icomoon',
            fontSize: '32px',
            transition: styles.transitions.default,
            transitionDelay: 'inherit'
        },
        
        '&::before': {
            content: '"\\e90a"',
            color: styles.colors.white,
            zIndex: 1
        },
        
        '&::after': {
            content: '"\\e909"',
            color: styles.colors.gold,
            ...styles.absolute(),
            zIndex: 2,
            opacity: 0
        },
        
        '&:last-of-type': {
            marginRight: '0'
        }
    },
    
    '&._active &': {
        '&__star': {
            '&::before': {
                opacity: 0
            },
    
            '&::after': {
                opacity: 1
            },
        }
    },
   
    [styles.bp(700)]: {
        '&__star': {
            marginRight: '12px',
        
            '&::before': {
                fontSize: '26px',
            },
        },
    }
});

class Stars extends React.Component {
    renderStars = (count) => {
        let stars = [];
        
        for (let i = 0; i < count; i++) {
            stars.push(
                <span key={i} className={`${css_style}__star star-icon`} />
            )
        }
        
        return stars;
    };
    
    render() {
        const { count, mod='' } = this.props;

        return (
            <div className={`${css_style} ${mod}`}>
                {
                    this.renderStars(count)
                }
            </div>
        )
    }
}

export default Stars;
