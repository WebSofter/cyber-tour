import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";

const css_style = css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    
    '&__list': {
        display: 'block',
        position: 'relative',
    },
    
    '&__item': {
        display: 'inline-block',
        color: styles.colors.white,
        ...fonts.p8,
        
        '&::after': {
            content: '"»"',
            display: 'inline',
            margin: '0 0.5em',
            verticalAlign: 'middle',
            font: 'inherit'
        },
        
        '&:last-child': {
            '&::after': {
                display: 'none'
            }
        }
    },
    
    '&__link': {
        textDecoration: 'underline',
        color: styles.colors.white,
        
        '&:hover': {
            textDecoration: 'none'
        }
    },
    
    [styles.bp(700)]: {
        justifyContent: 'flex-start',
    }
});

class Breadcrumbs extends React.Component {
    
    render() {
        const { data } = this.props;
        
        return (
            <div className={`${css_style}`}>
                {data &&
                    <div className={`${css_style}__list`}>
                        {
                            data.map((item, key) => {
                                return (
                                    <div key={key} className={`${css_style}__item`}>
                                        {item.link
                                            ?
                                            <NavLink to={item.link} className={`${css_style}__link`}>
                                                {item.text}
                                            </NavLink>
                                            :
                                            <span className={`${css_style}__text`}>
                                            {item.text}
                                        </span>
                                        }
            
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Breadcrumbs;
