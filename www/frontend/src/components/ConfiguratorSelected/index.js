import React from "react";
import { css, keyframes } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import {setPopupData} from "../../actions/SetPopupData";
import {connect} from "react-redux";
import ScrollWrap from '../../components/ScrollWrap';
import ConfiguratorSend from '../../components/ConfiguratorSend';
import MediaQuery from "react-responsive/src/Component";

const fadeEnter = keyframes`
    0% {
        opacity: 0;
    }
    
    100% {
        opacity: 1;
    }
    
`;

const css_styles = css({
    position: 'relative',
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: '100%',
    height: '100%',
    opacity: '0',
    transition: styles.transitions.default,
    
    '&._show': {
        opacity: '1'
    },
    
    '&__title': {
        position: 'relative',
        display: 'block',
        ...fonts.p3,
        marginBottom: '20px'
    },
    
    '&__scroll-wrap': {
        position: 'relative',
        display: 'block',
        height: '430px',
        width: "100%",
        overflow: 'hidden'
    },
    
    '&__row': {
        marginBottom: '30px',
        textAlign: 'left'
    },
    
    '&__category': {
        ...fonts.p10,
        marginBottom: '10px',
        animation: `${fadeEnter} 0.5s ease both`
    },
    
    '&__options-list': {
    
    },
    
    '&__option': {
        position: 'relative',
        display: 'block',
        ...fonts.p8,
        marginBottom: '5px',
        animation: `${fadeEnter} 0.5s ease both`,
        paddingLeft: '1em',
        
        '&::before': {
            content: '"-"',
            ...styles.absolute('0', 'auto', 'auto'),
            display: 'block',
        }
    },
	
	[styles.bp(1500)]: {
	
	},
	
	[styles.bp(1300)]: {
        '&__scroll-wrap': {
            height: '330px',
        },
	},
	
	[styles.bp(900)]: {
	
	},
	
	[styles.bp(700)]: {
        '&__scroll-wrap': {
            height: 'auto',
        },
        
        '&__row': {
            '&:last-of-type': {
                marginBottom: '0'
            }
        },
	}
});

class ConfiguratorSelected extends React.Component {
    render() {
        const { selected_title, btn_label, button, selected } = this.props;
        let rowsCounter = 0;
        let rowsArray = [];
    
        for (let prop in selected) {
            if (selected.hasOwnProperty(prop)) {
                const { title, list } = selected[prop];
                let optionsCounter = 0;
                let optionsArray = [];
            
                for (let prop in list) {
                    if (list.hasOwnProperty(prop)) {
                        const { title } = list[prop];
                    
                        optionsArray.push(
                            <li key={optionsCounter++} className={`${css_styles}__option`}>
                                {require('html-react-parser')(title)}
                            </li>
                        )
                    }
                }
            
                rowsArray.push(
                    <div key={rowsCounter++} className={`${css_styles}__row`}>
                        <div className={`${css_styles}__category`}>
                            {require('html-react-parser')(title)}
                        </div>
                        <ul className={`${css_styles}__options-list`}>
                            {optionsArray}
                        </ul>
                    </div>
                )
            }
        }
    
        return (
            <div className={`${css_styles} ${rowsArray.length ? '_show' : ''}`}>
                {selected_title &&
                    <span className={`${css_styles}__title`}>
                        {require('html-react-parser')(selected_title)}
                    </span>
                }
                {selected &&
                    <div className={`${css_styles}__scroll-wrap`}>
                        <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                            {(matches) => matches
                                ?
                                    rowsArray
                                
                                :
                                    <ScrollWrap>
                                        {rowsArray}
                                    </ScrollWrap>
                            }
                        </MediaQuery>
                    </div>
                }
                
                <ConfiguratorSend
                    button={button}
                    btn_label={btn_label}
                    selected={selected}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPopupData: obj => dispatch(setPopupData(obj)),
    }
};

export default connect(null, mapDispatchToProps)(ConfiguratorSelected);
