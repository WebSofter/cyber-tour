import React, { Component } from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";

const css_style = css({
    color: styles.colors.gray_dark,
    textTransform: 'uppercase',

    '&.h1-style': {
        ...fonts.h1
    },

    '&.h2-style': {
        ...fonts.h2
    },

    '&.h3-style': {
        ...fonts.h3
    },

    '&.h4-style': {
        ...fonts.h4,
        textTransform: 'none'
    },

    '&.p2u': {
        ...fonts.p2u
    },

    '&.p6': {
        ...fonts.p6
    },

    '&.p8': {
        ...fonts.p8
    },

    '&.p0': {
        ...fonts.p0
    },

    '&.h1a': {
        ...fonts.h1a
    },

    '.highlight': {
        color: styles.colors.cyan,
    },

    '&._reverse-highlight': {
        color: styles.colors.cyan,

        '.highlight': {
            color: styles.colors.gray_dark
        },
    },

    '&._light': {
        '.highlight': {
            color: styles.colors.white
        },
    },

    '&._highlight-all': {
        color: styles.colors.cyan
    },

    [styles.bp(1700)]: {

    },

    [styles.bp(1300)]: {

    },

    [styles.bp(1000)]: {

    },

    [styles.bp(700)]: {

    }
});

class Title extends Component {
    parseTitleText = (text) => {
        return text;
    };

    render() {
        const
            { data, themeMod='' } = this.props,
            { level, highlight, text, mod='', disable_highlight } = data,
            TitleTag  = level ? `h${level}` : 'span',
            levelMod = mod ? '' : (level ? `${TitleTag}-style` : '');

        return (
            <TitleTag className={`${css_style} ${levelMod} ${mod} ${themeMod}`}>
                {text && disable_highlight ? text : this.parseTitleText(text, highlight)}
            </TitleTag>
        );
    }
}
export default Title;
