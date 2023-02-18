import React, { Component } from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";

const css_style = css({
    display: "block",
    position: "relative",
    width: "100%",
    maxWidth: "780px",
    margin: "0 auto 50px",
    textAlign: "center",
    
    '&__title': {
        display: "block",
        position: "relative",
        ...fonts.p2
    },
    
    '&__subtitle': {
        display: "block",
        position: "relative",
        ...fonts.p6,
        marginTop: '25px'
    },
    
    '&._space': {
        marginBottom: '70px'
    },
    
    '&._line': {
        paddingBottom: '80px',
        marginBottom: '40px',
        
        '&::before': {
            content: '""',
            display: 'block',
            ...styles.absolute('auto'),
            width: '2px',
            height: '50px',
            background: styles.colors.aqua
        }
    },
    
    [styles.bp(1500)]: {
    
        '&._space': {
            marginBottom: '60px'
        },
    },
    
    [styles.bp(1300)]: {
        marginBottom: '40px',
    
        '&._line': {
            paddingBottom: '70px',
            
            '&::before': {
                height: '40px',
            }
        },
        
        '&._space': {
            marginBottom: '50px'
        },
    },
    
    [styles.bp(900)]: {
        marginBottom: '30px',
        
        '&._line': {
            marginBottom: '30px'
        },
        
        '&._space': {
            marginBottom: '40px'
        },
    },
    
    [styles.bp(700)]: {
        textAlign: 'left',
        marginBottom: '20px',
        
        '&._line': {
            paddingBottom: '0',
            
            '&::before': {
                display: 'none'
            }
        },
        
        '&._space': {
            marginBottom: '30px'
        },
    },
});

class TitleWrap extends Component {
    render() {
        const { title, subtitle, mod='',  } = this.props;

        return (
            <div className={`${css_style} ${mod}`}>
                {title &&
                    <h2 className={`${css_style}__title`}>
                        {require('html-react-parser')(title)}
                    </h2>
                }
                {subtitle &&
                    <span className={`${css_style}__subtitle`}>
                        {require('html-react-parser')(subtitle)}
                    </span>
                }
            </div>
        );
    }
}
export default TitleWrap;
