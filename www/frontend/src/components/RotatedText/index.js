import React from "react";
import { css } from "emotion";
import {connect} from "react-redux";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";

const css_style = css({
    position: 'absolute',
    left: 'auto',
    right: '0',
    bottom: 'auto',
    top: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: 'auto',
    height: '100%',
    pointerEvents: 'none',

    '&__inner': {
        width: '100vh',
        maxWidth: '800px',
        padding: '0 60px 30px',
        textAlign: 'right',
        transform: 'rotate(-90deg) translateY(-100%)',
        transformOrigin: '100% 0',
        textTransform: 'uppercase',
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        color: styles.colors.gray_light,
        transition: styles.transitions.default,
        pointerEvents: 'auto',
        ...fonts.p0
    },
    '&._light &__inner': {
        color: styles.colors.white
    },

    [styles.bp(1300)]: {
        '&__inner': {
            paddingBottom: '20px'
        }
    },

    [styles.bp(1050)]: {
        '&__inner': {
            lineHeight: '1',
            paddingBottom: '10px'
        }
    }
});

class RotatedText extends React.Component {
    render() {
        const { text, menu } = this.props;

        return (
            <div className={`${css_style} ${menu.theme}`}>
                <div className={`${css_style}__inner`}>
                    {require("html-react-parser")(text)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        menu: store.menu
    }
};

export default connect(
    mapStateToProps
)(RotatedText)


