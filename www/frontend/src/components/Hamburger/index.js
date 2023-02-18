import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import {setMenuState} from "../../actions/SetMenuState";
import {connect} from "react-redux";

const parameters = {
    width: 31,
    height: 2,
    spacing: 8,
    barColor: styles.colors.aqua
};

const css_style = css({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    width: parameters.width,
    height: parameters.height * 3 + parameters.spacing * 2,
    pointerEvents: 'auto',
    overflow: 'hidden',

    '&__hamburger': {
        display: 'block',
        position: 'relative',
        width: parameters.width,
        height: parameters.height,
    },

    '&__bar': {
        display: 'block',
        position: 'relative',
        width: parameters.width,
        height: parameters.height,
        background: parameters.barColor,
        transition: styles.transitions.type4,

        '&::before, &::after': {
            content: '""',
            width: 'inherit',
            height: 'inherit',
            background: parameters.barColor,
            willChange: 'transform',
            transition: styles.transitions.type4,
        },

        '&::before': {
            ...styles.absolute('auto',0,parameters.spacing + parameters.height),
        },

        '&::after': {
            ...styles.absolute(parameters.spacing + parameters.height, 0, 'auto'),
        }
    },

    '&._active &': {
        '&__bar': {
            background: styles.colors.white,
            
            '&::before, &::after': {
                background: styles.colors.white,
            },
            
            '&::before': {
                transform: 'translateX(-50%)',
            },

            '&::after': {
                transform: 'translateX(50%)',
            }
        },
    },

    [styles.bpm(1000)]: {
        display: 'none'
    },

    [styles.bp(1000)]: {
        width: '60px',
        height: '50px',
    }
});

class Hamburger extends React.Component {
    toggleHamburger = () => {
        const { show, setMenuState } = this.props;

        setMenuState({
            show: !show
        });
    };

    render() {
        const { show } = this.props;
        const mod = show ? '_active' : '';

        return (
            <div className={`${css_style} ${mod}`} onClick={this.toggleHamburger}>
                <div className={`${css_style}__hamburger`}>
                    <div className={`${css_style}__bar`}/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMenuState: show => dispatch(setMenuState(show))
    }
};

export default connect(null, mapDispatchToProps)(Hamburger);

