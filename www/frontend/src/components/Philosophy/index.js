import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import BackgroundBlock from "../../components/BackgroundBlock";
import CirclesBg from "../../components/CirclesBg";
import MediaQuery from "react-responsive/src/Component";


const css_style = css({
    marginTop: '130px',

    '&__container': {
        display: 'block',
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
    },

    '&__title-wrap': {
        ...styles.rh(),
        display: 'block',
        position: 'relative',
        width: 'calc(100% / 8 * 3)',
        margin: '0 auto',
        zIndex: '2'
    },

    '&__title': {
        ...fonts.p4,
        ...styles.absolute(),
        width: '80%',
        maxWidth: '350px',
        height: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },

    '&__list': {
        ...styles.absolute(),
        width: '100%',
        height: '100%',
    },

    '&__label': {
        display: 'block',
        width: 'calc(100% / 8 * 2)',
        maxWidth: '240px',
        ...fonts.p7,

        '&::after': {
            content: '""',
            display: 'block',
            width: '30px',
            height: '2px',
            background: styles.colors.aqua

        },

        '&:nth-of-type(1),&:nth-of-type(2)': {
            '&::after': {
                ...styles.absolute('0.3em','auto','auto','calc(100% + 20px)'),
            },
        },

        '&:nth-of-type(3),&:nth-of-type(4),&:nth-of-type(5)': {
            '&::after': {
                ...styles.absolute('0.3em','calc(100% + 20px)','auto','auto'),
            },
        },

        '&:nth-of-type(1)': {
            ...styles.absolute('-5%','auto','auto','calc(100% / 8 / 2)'),
        },

        '&:nth-of-type(2)': {
            ...styles.absolute('35%','auto','auto','0'),
        },

        '&:nth-of-type(3)': {
            ...styles.absolute('10%','calc(100% / 8 / 4)','auto','auto'),
        },

        '&:nth-of-type(4)': {
            ...styles.absolute('50%','calc(-100% / 8 / 2)','auto','auto'),
        },

        '&:nth-of-type(5)': {
            ...styles.absolute('85%','calc(100% / 8 / 3)','auto','auto'),
        }
    },
    
    [styles.bp(1500)]: {
    
    },
    
    [styles.bp(1300)]: {
        marginTop: '100px',
        
        '&__title-wrap': {
            width: 'calc(100% / 12 * 4.5)',
        },
    
        '&__label': {
            '&::after': {
                width: '25px',
        
            },
    
            '&:nth-of-type(1),&:nth-of-type(2)': {
                '&::after': {
                    left: 'calc(100% + 15px)',
                },
            },
    
            '&:nth-of-type(3),&:nth-of-type(4),&:nth-of-type(5)': {
                '&::after': {
                    right: 'calc(100% + 15px)'
                },
            },
            
            '&:nth-of-type(4)': {
                right: 'calc(-100% / 8 / 6)',
            },
        },
    },
    
    [styles.bp(900)]: {
        marginTop: '80px',
        
        '&__title-wrap': {
            width: 'calc(100% / 12 * 5)',
        },
    },
    
    [styles.bp(700)]: {
        marginTop: '50px',
        
        '&__title-wrap': {
            width: '90%',
            maxWidth: '350px'
        },
    }
});

class Philosophy extends React.Component {
    render() {
        const { title, list, background_block } = this.props.data;
        
        return (
            <section className={`${css_style} section`}>
                {background_block && <BackgroundBlock styleMod='_up' data={background_block}/>}
                
                <div className='container'>
                    <div className={`${css_style}__container`}>
                        <div className={`${css_style}__title-wrap`}>
                            <CirclesBg />
            
                            {title &&
                                <h2 className={`${css_style}__title`}>
                                    {require('html-react-parser')(title)}
                                </h2>
                            }
                        </div>
        
                        <MediaQuery minWidth={`${styles.breakpoints[700] + 1}px`}>
                            <div className={`${css_style}__list`}>
                                {list &&
                                list.map((item, key) => {
                                    return (
                                        <span key={key} className={`${css_style}__label`}>
                                            {item}
                                        </span>
                                    )
                                })
                                }
                            </div>
                        </MediaQuery>
                    </div>
                </div>
            </section>
        )
    }
}

export default Philosophy;
