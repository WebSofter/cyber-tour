import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";

const css_style = css({
    position: 'relative',
    height: '60px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '30px',
    padding: '5px 30px',
    color: styles.colors.white,
    transition: styles.transitions.default,
    whiteSpace: "nowrap",
    
    '&__selected': {
        ...fonts.p5s,
        textTransform: 'lowercase'
    },
    
    '&__count': {
        marginLeft: '.5em'
    },
    
    [styles.bpm(700)]: {
        flex: "1 1 0",
        
        '&__text': {
            ...fonts.b1
        }
    },
    
    [styles.bp(700)]: {
        marginBottom: '15px',
    
        '&:last-of-type': {
            marginBottom: '0'
        },
        
        '&__text': {
            ...fonts.p10
        }
    }
});

class ConfiguratorSelectButton extends React.Component {
    render() {
        const { selected_prefix, selected_count, color, btn_text, on_click } = this.props;
        
        const theme = css({
            borderColor: styles.configuratorColorsArray[color]
        });

        return (
            <div className={`${css_style} ${theme}`} onClick={on_click}>
                <span className={`${css_style}__text`}>{require('html-react-parser')(btn_text)}</span>
                
                {selected_prefix && selected_count &&
                    <span className={`${css_style}__selected`}>
                        <span className={`${css_style}__prefix`}>
                            {require('html-react-parser')(selected_prefix)}
                        </span>
                        <span className={`${css_style}__count`}>
                            {selected_count}
                        </span>
                    </span>
                }
            </div>
        )
    }
}

export default ConfiguratorSelectButton;
