import React from "react";
import { css, keyframes } from "emotion";
import styles from "../../constants/styles";
import urls from "../../constants/urls";
import fonts from "../../constants/fonts";
import { withCookies } from 'react-cookie';
import fetchQuery from "../../utils/fetch";

const showEl = keyframes`
    from {
       transform: translate3d(0, 100px, 0);
       opacity: 0;
    }
    
    to {
        transform: translate3d(0, 0px, 0);
        opacity: 1;
    }
`;

const css_style = css({
    display: 'block',
    ...styles.fixed('auto'),
    width: '100%',
    zIndex: '999',
    transform: 'translate3d(0, 100px, 0)',
    opacity: '0',
    animation: `${showEl} 1s ease both`,
    animationDelay: `2500ms`,
    
    
    '&::before': {
        content: '""',
        ...styles.absolute('auto','0','0'),
        width: '100%',
        height: '150%',
        background: 'linear-gradient(0deg, rgb(59, 67, 214) 61%,rgba(0,0,0,0))',
        zIndex: '0',
        transition: styles.transitions.default,
        pointerEvents: 'none'
    },
    
    '&__container': {
        position: 'relative',
        width: '100%',
        padding: '10px 60px',
        zIndex: '5',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    '&__text': {
        ...fonts.p5,
        color: styles.colors.white,
        textAlign: 'center',
        maxWidth: '1200px',
        margin: 'auto'
    },
    
    '&__btn-wrap': {
        marginLeft: '50px',
        display: 'flex',
        alignItems: 'center'
    },
    
    '&__btn': {
        display: 'block',
        position: 'relative',
        padding: '10px 20px',
        ...fonts.p6,
        color: styles.colors.white,
        background: 'transparent',
        transition: styles.transitions.default,
        border: `2px solid ${styles.colors.white}`,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        marginRight: '20px',
        borderRadius: '100px',
        
        '&:last-child': {
            marginRight: '0'
        },
        
        '&:hover': {
            color: styles.colors.aqua,
            borderColor: styles.colors.aqua
        }
    },
    
    [styles.bp(1300)]: {
        '&__container': {
            padding: '10px 30px',
        },
    },
    
    [styles.bp(900)]: {
        '&__container': {
            padding: '10px 20px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        
        
        '&__btn-wrap': {
            marginTop: '10px',
            marginLeft: '0'
        }
    },
    
    [styles.bp(700)]: {
        '&__container': {
            padding: '8px 20px',
        },
    },
});

class CookieWarning extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: '',
            hidden: false
        };
    }
    
    componentDidMount() {
        const useCookies = this.props.cookies.get('use_cookie');
        
        if (!useCookies) {
            return fetchQuery.bind(this)({url: urls.cookie});
        }
    }
    
    onClick = () => {
        this.props.cookies.set('use_cookie', true, { path: '/', expires: new Date(2145906000000) });
    };
    
    closeWindow = () => {
        this.setState({
            hidden: true
        })
    };
    
    render() {
        const { text, button_agree, button_disagree, hidden } = this.state;
        const useCookies = this.props.cookies.get('use_cookie');
        
        return (
            <React.Fragment>
                {!hidden && !useCookies &&
                <div className={`${css_style}`}>
                    
                    <div className={`${css_style}__container`}>
                        {text &&
                        <div className={`${css_style}__text`}>{require("html-react-parser")(text)}</div>
                        }
                        <div className={`${css_style}__btn-wrap`}>
                            {button_agree &&
                            <div className={`${css_style}__btn`} onClick={this.onClick}>{require("html-react-parser")(button_agree)}</div>
                            }
                            {button_disagree &&
                            <div className={`${css_style}__btn`} onClick={this.closeWindow}>{require("html-react-parser")(button_disagree)}</div>
                            }
                        </div>
                    
                    </div>
                </div>
                }
            </React.Fragment>
        )
    }
}

export default withCookies(CookieWarning);
