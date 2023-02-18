import React from "react";
import { css } from "emotion";
import fonts from "../../constants/fonts";
import styles from "../../constants/styles";

const css_style = css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
    
    '&__arrow': {
        '&::before': {
            fontsize: '16px'
        }
    },
    
    '&__counter': {
        margin: '0 28px',
        ...fonts.p5,
        color: styles.colors.white,
        display: 'flex',
        
        '&::before': {
            content: '"|"',
            display: 'inline-block',
            order: '2',
            margin: '0 0.5em'
        }
    },
    
    '&__current, &__total': {
        minWidth: '1.5em',
        textAlign: 'center'
    },
    
    '&__current': {
        order: '1'
    },
    
    '&__total': {
        order: '3'
    },
});

class SliderCounterNav extends React.Component {
    formatCount = (num) => {
        return num.toString().length < 2 ? '0' + num : num
    };
    
    render() {
        const { currentSlide, total, onArrowClick } = this.props;
        const currentFormatted = this.formatCount(currentSlide);
        const totalFormatted = this.formatCount(total);
        
        return (
            <div className={`${css_style}`}>
                <div className={`${css_style}__arrow icon-arrow-left`} onClick={onArrowClick.bind(this, -1)} />
    
                <div className={`${css_style}__counter`}>
                    <span className={`${css_style}__current`}>{currentFormatted}</span>
                    <span className={`${css_style}__total`}>{totalFormatted}</span>
                </div>
    
                <div className={`${css_style}__arrow icon-arrow-right`}  onClick={onArrowClick.bind(this, 1)} />

            </div>
        )
    }
}


export default SliderCounterNav;

