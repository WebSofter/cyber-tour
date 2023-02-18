import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts"
import ScrollWrap from "../ScrollWrap";
import MediaQuery from "react-responsive";

const css_style = css({
    position: 'relative',
    display: 'block',
    width: '100%',
    
    '&__nav-wrap': {
        position: 'relative',
        display: 'block',
        width: '100%',
    },
    
    '&__nav': {
        position: 'relative',
        display: 'block',
        width: '100%',
    },
    
    '&__list': {
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '70px 0 0',
    },

    '&__item': {
        ...fonts.b1,
        color: styles.colors.white,
        transition: styles.transitions.default,
        cursor: 'pointer',
        textAlign: 'center',
    },
    
    '&__select': {
        position: 'relative',
        width: '100%',
        height: '67px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    
    '&__select-text': {
        position: 'relative',
        display: 'block',
        width: '100%',
        ...fonts.b1,
        paddingRight: '35px',
        color: styles.colors.white,
    
        '&::after': {
            content: '"\\e905"',
            fontFamily: 'icomoon',
            fontWeight: '400',
            fontSize: '13px',
            color: styles.colors.white,
            ...styles.absolute('0', '0', '0', 'auto'),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
    },
    
    '&__close-btn': {
        ...styles.closeBtn,
        top: '5px',
        right: '5px',
    },
    
    [styles.bpm(700)]: {
        '&__item': {
            height: '60px',
            borderRadius: '30px',
            border: `2px solid ${styles.colors.white}`,
            padding: '5px 35px',
            margin: '0 20px 30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        
            '&:hover': {
                borderColor: styles.colors.aqua
            },
        
            '&._active': {
                background: styles.colors.aqua,
                borderColor: styles.colors.aqua
            }
        },
    },
    
    [styles.bp(1500)]: {
        '&__item': {
            margin: '0 15px',
            marginBottom: '25px',
        },
    },
    
    [styles.bp(1300)]: {
    
    },
    
    [styles.bp(900)]: {
        '&__item': {
            margin: '0 10px',
            marginBottom: '20px',
        },
    },
    
    [styles.bp(700)]: {
        '&__nav': {
            display: 'flex',
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            minHeight: '100%',
            opacity: '0',
            transition: 'opacity 0.7s ease',
            transitionDelay: '0s',
        },
        
        '&__item': {
            marginBottom: '30px'
        },
        
        '&__nav-wrap': {
            ...styles.fixed(),
            height: "100%",
            width: "100%",
            maxWidth: "none",
            margin: "0",
            flex: "none",
            padding: '50px 20px',
            transition: 'transform 0s linear, opacity 0.7s ease',
            transitionProperty: 'transform, opacity',
            transitionDelay: '1.4s, 0.7s',
            opacity: '0',
            transform: 'translateX(-110%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${require('../../images/bg/popup-bg.jpg')})`,
            zIndex: '600',
        
            '&::before': {
                content: '""',
                display: 'block',
                ...styles.absolute(),
                width: '100%',
                height: '100%',
                background: styles.colors.mask2,
                pointerEvents: 'none',
                zIndex: '-1'
            },
        },
        
        '&__list': {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: 'auto',
        },
    
        '&__nav-wrap._show': {
            transitionDelay: '0.3s, 0.4s',
            opacity: '1',
            transform: 'translateX(0)',
        },
        
        '&__nav-wrap._show &': {
            '&__nav': {
                opacity: '1',
                transitionDelay: '1.3s',
            }
        },
    }
});

class ProjectsNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            selected: this.props.categories[0]
        };
    }
    
    clickHandler = (item) => {
        const { onSelect } = this.props;
        
        this.setState({
            selected: item,
            show: false
        });
        
        onSelect(item.category_id);
    };
    
    toggleNav = () => {
        const { show } = this.state;
        
        this.setState({
            show: !show
        })
    };
    
    renderNav = () => {
        const { selected } = this.state;
        const { categories } = this.props;
        return (
            <div className={`${css_style}__nav`}>
                <div className={`${css_style}__list`}>
                    {
                        categories.map((item, key) => {
                            const matchCategoryMod = selected.category_id === item.category_id ? '_active' : '';
                            return (
                                <div key={key} className={`${css_style}__item ${matchCategoryMod}`} onClick={this.clickHandler.bind(this, item)}>
                                    { item.text ? require('html-react-parser')(item.text) : 'empty'} 
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    };
    
    render() {
        const { show, selected } = this.state;
        
        return (
            <div className={`${css_style}`}>
                <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                    <div className={`${css_style}__select`} onClick={this.toggleNav}>
                        <div className={`${css_style}__select-text`}>
                            { selected.select_text || selected.text }
                        </div>
                    </div>
                </MediaQuery>
                
                <div className={`${css_style}__nav-wrap ${show ? '_show' : ''}`}>
                    <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                        <div className={`${css_style}__close-btn`} onClick={this.toggleNav}/>
                    </MediaQuery>
    
                    <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                        {(matches) =>
                            matches
                                ? <ScrollWrap>{this.renderNav()}</ScrollWrap>
                                : this.renderNav()
                        }
                    </MediaQuery>
                </div>
            </div>
        )
    }
}

export default ProjectsNav;
