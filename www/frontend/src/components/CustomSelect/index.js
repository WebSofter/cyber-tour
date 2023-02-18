import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import Title from "../Title";

const css_style = css({
    display: 'block',
    position: 'relative',
    width: '100%',
    zIndex: '10',

    '&__select': {
        position: 'relative',
        width: '100%',
        height: '44px',
        border: `2px solid ${styles.colors.gray_light}`,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '5px 40px 5px 20px',
        cursor: 'pointer',

        '&::after': {
            content: '""',
            ...styles.absolute('0', '20px', '0', 'auto'),
            width: '10px',
            height: '10px',
            borderStyle: 'solid',
            borderColor: `${styles.colors.cyan} transparent transparent transparent`,
            borderWidth: '10px 5px 0 5px',
            boxSizing: 'border-box',
            transformOrigin: '50% 50%',
            transition: styles.transitions.default
        }
    },
    '&__inner': {
        ...styles.absolute('100%','auto','auto'),
        width: '100%',
        height: '136px',
        overflow: 'auto',
        border: `2px solid ${styles.colors.gray_light}`,
        pointerEvents: 'none',
        opacity: '0',
        transform: 'translateY(20px)',
        transition: styles.transitions.default,
        background: styles.colors.white
    },
    '&__option': {
        width: '100%',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 20px',
        cursor: 'pointer',
    },

    '&._active &': {
        '&__select': {
            '&::after': {
                transform: 'scaleY(-1)'
            }
        },
        '&__inner': {
            pointerEvents: 'auto',
            opacity: '1',
            transform: 'translateY(-2px)'
        },
    }
});

class CustomSelect extends React.Component {
    constructor(props) {
        super(props);

        const { list } = this.props;

        this.state = {
            showInner: false,
            selected: list[0]
        }
    }

    onSelectClick = () => {
        const { showInner } = this.state;

        this.setState({
            showInner: !showInner
        });
    };


    onOptionClick = (key) => {
        const { onSelect, list } = this.props;

        this.setState({
            showInner: false,
            selected: list[key]
        });

        onSelect(key);
    };

    render() {
        const { list, titleSettings } = this.props;

        const { showInner, selected } = this.state;
        const mod = showInner ? '_active' : '';

        return (
            <div className={`${css_style} ${mod}`}>
                <div className={`${css_style}__select`} onClick={this.onSelectClick}>
                    <Title data={{...titleSettings, text: selected}}/>
                </div>
                <div className={`${css_style}__inner`}>

                    {
                        list.map((item, key) => {
                            return <div key={key} className={`${css_style}__option`} onClick={this.onOptionClick.bind(this, key)}>
                                <Title data={{...titleSettings, text: item}}/>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default CustomSelect;
