import React from "react";
import { css } from "emotion";
import fonts from "../../constants/fonts";
import Button from "../Button";
import styles from "../../constants/styles";

const css_styles = css({
    position: 'relative',
    display: 'block',
    width: '100%',
    marginTop: '50px',
    
    '&__button-wrap': {
        position: 'relative',
        display: 'block',
        textAlign: 'center'
    },
    
    '&__label': {
        position: 'relative',
        display: 'block',
        ...fonts.p9,
        marginTop: '30px'
    },
    
    [styles.bp(900)]: {
        marginTop: '30px',
    },
    
    [styles.bp(700)]: {
        '&__label': {
            textAlign: 'center'
        },
    }
});

class ConfiguratorSend extends React.Component {
    render() {
        const { btn_label, button, selected } = this.props;
    
        return (
            <div className={`${css_styles}`}>
                {button &&
                    <div className={`${css_styles}__button-wrap`}>
                        <Button styleMod='_full' data={button} extraFormData={{configurator: selected}}/>
                    </div>
                }
                {btn_label &&
                    <span className={`${css_styles}__label`}>
                        {require('html-react-parser')(btn_label)}
                    </span>
                }
            </div>
        )
    }
}

export default ConfiguratorSend;