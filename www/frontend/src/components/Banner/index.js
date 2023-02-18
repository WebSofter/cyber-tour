import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import BackgroundText from "../../components/BackgroundText";
import ParallaxBubble from "../../components/ParallaxBubble";
import BackgroundBlock from "../../components/BackgroundBlock";


const css_style = css({
    minHeight: 'calc(100vh - 180px)',
    
    '&__table': {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
    '&__col': {
        display: 'flex',
        flexDirection: 'column',
        width: 'calc(50% - 10px)',
        
        '&_left': {
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
        },
        '&_right': {
            alignItems: 'flex-end',
            justifyContent: 'center'
        },
    },
    '&__title-wrap': {
        display: 'block',
        position: 'relative'
    },
    '&__text-wrap': {
        display: 'block',
        position: 'relative',
        maxWidth: '515px',
        marginRight: 'auto'
    },
    '&__bg-text-wrap': {
        ...styles.absolute('auto', 'auto', '21%', '37%'),
        display: 'block',
        width: '100%',
        height: '100%'
    },
    '&__title': {
        ...fonts.p0
    },
    '&__subtitle': {
        ...fonts.h1s
    },
    '&__label': {
        ...fonts.p5s,
        
        '&::before': {
            content: '""',
            display: 'block',
            position: 'relative',
            width: '50px',
            height: '1px',
            background: styles.colors.white,
            margin: '20px 0'
        }
    },
    
    
    [styles.bp(1300)]: {
        '&__text': {
            filter: 'blur(15px)',
        }
    },
    
    [styles.bp(900)]: {
        '&__text': {
            filter: 'blur(12px)',
        }
    },
    
    [styles.bp(700)]: {
        '&__table': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        },
        
        '&__col': {
            width: '100%',
            
            '&_right': {
                marginTop: '120px'
            }
        },
    
        '&__label': {
            ...fonts.p5s,
        
            '&::before': {
                width: '25px',
                margin: '10px 0'
            }
        },
    
    
        '&__text': {
            filter: 'blur(8px)',
        },
    },
    
});

class Banner extends React.Component {
    render() {
        const { title, subtitle, label, bubble_text, background_block } = this.props.data;
        
        return (
            <section className={`${css_style} section`}>
                {background_block && <BackgroundBlock styleMod='_up' data={background_block}/>}
                
                <div className='container'>
                    <div className='inner-container'>
                        <div className={`${css_style}__table`}>
                            <div className={`${css_style}__col ${css_style}__col_left`}>
                                {title &&
                                    <div className={`${css_style}__title-wrap`}>
                                        <span className={`${css_style}__title`}>{require("html-react-parser")(title)}</span>
                                        <div className={`${css_style}__bg-text-wrap`}>
                                            <BackgroundText data={{
                                                text: title,
                                                level: '2',
                                                depth: '1',
                                                mod: '_less-blur'
                                            }} />
                                        </div>
                                    </div>
                                }
    
                                <div className={`${css_style}__text-wrap`}>
                                    {subtitle &&
                                        <h1 className={`${css_style}__subtitle`}>{require('html-react-parser')(subtitle)}</h1>
                                    }
    
                                    {label &&
                                        <p className={`${css_style}__label`}>{require('html-react-parser')(label)}</p>
                                    }
                                </div>
                            </div>
                          
                            <div className={`${css_style}__col ${css_style}__col_right`}>
                                {bubble_text &&
                                    <ParallaxBubble text={bubble_text}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;
