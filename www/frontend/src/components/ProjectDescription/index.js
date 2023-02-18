import React, { Component } from "react";
import { css } from "emotion";

import TextBlock from "../TextBlock";
import fonts from "../../constants/fonts";
import styles from "../../constants/styles";
import MediaQuery from "react-responsive/src/Component";

const css_style = css({
    '&__container': {
        display: "block",
        position: "relative",
        width: "calc(100% / 12 * 8)",
        maxWidth: "1200px",
        padding: "0 10px",
        margin: "0 auto"
    },
    
    '&__wrap': {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: '100px 0',
    },

    '&__aside-text': {
        width: 'calc(100% / 8)',
        ...fonts.p10,
    },

    '&__content': {
        width: 'calc(100% / 8 * 6)',
    },
    
    [styles.bpm(700)]: {
        '&__aside-text': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            lineHeight: '1'
        },
    },
    
    [styles.bp(1500)]: {
        '&__container': {
            width: "calc(100% / 12 * 10)",
        },
        
        '&__aside-text': {
            width: 'calc(100% / 10)',
        },
    
        '&__content': {
            width: 'calc(100% / 10 * 8)',
            
        },
    
        '&__wrap': {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            paddingBottom: '80px',
        },
    },
    
    [styles.bp(1300)]: {
        '&__container': {
            width: "100%",
        },
        
        '&__aside-text': {
            width: 'calc(100% / 12)',
        },
    
        '&__content': {
            width: 'calc(100% / 12 * 10)',
        },
        
        '&__wrap': {
            paddingBottom: '70px',
        },
    },
    
    [styles.bp(900)]: {

    },
    
    [styles.bp(700)]: {
        '&__wrap': {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingBottom: '50px',
        },
    
        '&__container': {
            width: "100%",
            padding: "0",
        },
    
        '&__aside-text': {
            width: '100%',
            marginBottom: '30px'
        },
    
        '&__content': {
            width: '100%',
        
        },
    }
});

class ProjectDescription extends Component {
    render() {
        const { aside_text, text_block } = this.props.data;

        return (
            <div className={`${css_style}`}>

                <div className="container">
                    <div className={`${css_style}__container`}>
                        <div className={`${css_style}__wrap`}>
                            {aside_text &&
                                <div className={`${css_style}__aside-text`}>
                                    <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                                        {(matches) =>
                                            matches
                                                ?
                                                    <span>{require('html-react-parser')(aside_text)}</span>
                                                :
                                                    <div className='rotated-text'>
                                                        <span>{require('html-react-parser')(aside_text)}</span>
                                                    </div>
                                        }
                                    </MediaQuery>
                                    
                                    
                                </div>
                            }

                            <div className={`${css_style}__content`}>
                                {text_block &&
                                <TextBlock data={text_block}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectDescription;
