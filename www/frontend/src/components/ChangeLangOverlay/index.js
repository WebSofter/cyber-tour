import React from "react";
import { css } from "emotion";
import Title from "../Title";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import { CookiesProvider, withCookies } from 'react-cookie';


const css_style = css({
    ...styles.fixed('0', '0', 'auto', 'auto'),
    background: styles.colors.white,
    paddingRight: styles.width.menu1920,
    width: '100%',
    height: '100%',
    zIndex: '2',
    opacity: '0',
    transform: 'translateX(110%)',
    pointerEvents: 'none',
    transition: 'transform 0s linear, opacity 1s ease',
    transitionProperty: 'transform, opacity',
    transitionDelay: '1s, 0s',

    '&__close-overlay': {
        ...styles.closeBtn
    },

    '&__container.inner-container': {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '100px 0'
    },

    '&__content': {
        display: 'block',
        position: 'relative',
        margin: 'auto 0',
        maxWidth: '500px'
    },

    '&__list': {
        display: 'block',
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        marginTop: '40px'
    },

    '&__link': {
        display: 'block',
        position: 'relative',
        marginBottom: '20px',
        color: styles.colors.gray_dark,
        transition: styles.transitions.default,
        paddingLeft: '30px',
        transform: 'translateX(-30px)',
        cursor: 'pointer',
        ...fonts.p2u,

        '&::before': {
            content: '""',
            position: 'absolute',
            right: 'auto',
            bottom: 'auto',
            left: '0',
            top: '0.5em',
            display: 'block',
            width: '20px',
            height: '1px',
            transition: styles.transitions.default,
            background: styles.colors.gray_dark
        },

        '&:last-child': {
            marginBottom: '0'
        },

        '&:hover, &._active': {
            color: styles.colors.cyan,
            transform: 'translateX(0)',

            '&::before': {
                background: styles.colors.cyan
            }
        }
    },

    '&._light': {
        background: styles.colors.cyan,
    },

    '&._light &': {
        '&__link': {
            '&:hover, &._active': {
                color: styles.colors.white,

                '&::before': {
                    background: styles.colors.white
                }
            }
        },
    },

    '&._show': {
        opacity: '1',
        pointerEvents: 'auto',
        transform: 'translateX(0)',
        transitionDelay: '0s, 0s',
    },

    [styles.bp(1700)]: {
        paddingRight: styles.width.menu1700,

        '&__btn': {
            width: '40px',
            height: '40px',
        },
    },

    [styles.bp(1300)]: {
        paddingRight: styles.width.menu1300,
    },

    [styles.bp(700)]: {
        paddingRight: '0',
        zIndex: '20',

        '&__btn': {
            width: '35px',
            height: '35px',
            marginTop: '20px'
        },
    },
});

class ChangeLangOverlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showOverlay: false
        };
    }

    componentDidUpdate(prev) {
        if (prev.id !== this.props.id) {
            this.setState({
                showOverlay: false
            });
        }
    }

    renderChangeLangList = (list) => {
        let navArr = [];

        for (let i = 0; i < list.length; i++) {
            const { text, val } = list[i];

            navArr.push(
                <span key={i} className={`${css_style}__link`} onClick={this.onChangeLang.bind(this, val)}>
                    {require("html-react-parser")(text)}
                </span>
            )
        }

        return navArr;
    };

    onChangeLang = (val) => {
        const
            langCookieName = this.props.data.cookie_name,
            { cookies } = this.props;

        if (langCookieName) {
            cookies.set(langCookieName, val, { path: '/' });
            window.location.reload();
        }
    };

    showOverlay = () => {
        this.setState({
            showOverlay: true
        });
    };

    closeOverlay = () => {
        this.setState({
            showOverlay: false
        });
    };

    render() {
        const
            { data, theme } = this.props,
            showMod = this.state.showOverlay ? '_show' : '';

        return (
            <CookiesProvider>
                <div className={`${css_style} ${theme} ${showMod}`}>
                    <div className={`${css_style}__container inner-container`}>
                        <div className={`${css_style}__content`}>
                            {data.title && <Title data={data.title} themeMod={theme}/>}

                            <div className={`${css_style}__list`}>
                                {data.list && this.renderChangeLangList(data.list)}
                            </div>
                        </div>

                        <div className={`${css_style}__close-overlay ${theme}`} onClick={this.closeOverlay}></div>
                    </div>
                </div>
            </CookiesProvider>
        )
    }
}

export default withCookies(ChangeLangOverlay);