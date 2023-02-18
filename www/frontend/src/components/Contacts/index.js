import React from "react";
import {css, keyframes} from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import BackgroundBlock from "../../components/BackgroundBlock";

import { ReactComponent as AddressSvg } from "../../images/svg/address_stroke.svg";
import { ReactComponent as MailSvg } from "../../images/svg/mail_stroke.svg";
import { ReactComponent as PhoneSvg } from "../../images/svg/phone_stroke.svg";


const bgImages = {
    address: <AddressSvg />,
    mail: <MailSvg />,
    phone: <PhoneSvg />
};

const showContent = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
   
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const svgDrawingAnimation = keyframes`
    0% {
        stroke-dashoffset: 2770px;
    }
    
    40% {
        stroke-dashoffset: 0px;
    }
    
    80% {
        stroke-dashoffset: 0px;
    }
    
    100% {
        stroke-dashoffset: -2770px;
    }
`;

const showPhoneText = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    
    25% {
        opacity: 0;
        transform: translateY(10px);
    }
    
    30% {
        opacity: 1;
        transform: translateY(0);
    }
    
    90% {
        opacity: 1;
        transform: translateY(0);
    }
    
    95% {
        opacity: 0;
        transform: translateY(-10px);
    }
   
    100% {
        opacity: 0;
        transform: translateY(-10px);
    }
`;


const css_style = css({
    '&__list': {
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        marginTop: '115px',
        zIndex: '5'
    },
    
    '&__item': {
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: '50px',
        
        '&:nth-of-type(even)': {
            justifyContent: 'flex-end',
        }
    },
    
    '&__item:nth-of-type(1) &': {
        '&__svg-wrap': {
            svg: {
                animationDelay: '1s',
            }
        },
        
        '&__content': {
            animationDelay: '1s'
        }
    },
    
    '&__item:nth-of-type(2) &': {
        '&__svg-wrap': {
            svg: {
                animationDelay: '2s'
            }
        },
        
        '&__content': {
            animationDelay: '2s'
        }
    },
    
    '&__item:nth-of-type(3) &': {
        '&__svg-wrap': {
            svg: {
                animationDelay: '3s'
            }
        },
        
        '&__content': {
            animationDelay: '3s'
        }
    },
    
    '&__svg-wrap': {
        content: '""',
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        ...styles.absolute('auto', 'auto'),
        width: '100%',
        height: '325px',
        backgroundSize: 'contain',
        backgroundPosition: 'bottom left',
        backgroundRepeat: 'no-repeat',
        
        svg: {
            display: 'block',
            position: 'relative',
            maxHeight: '100%',
            maxWidth: '100%',
            strokeDasharray: "2770px",
            strokeDashoffset: "2770px",
            animation: `${svgDrawingAnimation} 10s linear infinite`,
            
            '.phone-hello': {
                opacity: '0',
                animation: `${showPhoneText} 10s linear infinite`,
                animationDelay: 'inherit'
            }
        }
    },
    
    '&__wrap': {
        display: 'block',
        position: 'relative',
        width: 'calc(50% - 10px)',
    },
    
    '&__content': {
        display: 'block',
        position: 'relative',
        width: '40%',
        marginLeft: 'auto',
        paddingBottom: '125px',
        opacity: '0',
        animation: `${showContent} 1s ease both`
    },
    
    '&__row': {
        marginBottom: '10px',

        '&:last-child': {
            marginBottom: '0'
        }
    },
    
    '&__link, &__text': {
        ...fonts.p10,
        color: styles.colors.white
    },

    '&__link': {
        transition: styles.transitions.default,

        '&:hover': {
            color: styles.colors.aqua
        }
    },

    '&__text': {

    },
    
    [styles.bp(1500)]: {
        '&__list': {
            marginTop: '0',
        },
    
        '&__item': {
            marginTop: '80px',
        },
    
    
        '&__svg-wrap': {
            width: '95%',
            height: '250px',
        },
        
        '&__wrap': {
            width: 'calc(100% / 11 * 6 - 10px)',
        },
        
        '&__content': {
            width: '45%',
            paddingBottom: '95px'
        },
    },
    
    [styles.bp(1300)]: {
        '&__list': {
            margin: "0 auto",
            width: "90%",
        },
    
        '&__svg-wrap': {
            width: "90%",
            height: "230px",
        },
        
        '&__wrap': {
            width: "100%",
            maxWidth: "550px",
        },
        
        '&__content': {
            width: "45%",
            paddingBottom: "90px"
        },
        
        '&__item': {
            marginTop: '130px',
        },
    },
    
    [styles.bp(900)]: {
        '&__list': {
        
        },
    
        '&__svg-wrap': {
            width: '80%'
        },
        
        '&__wrap': {
            maxWidth: "none",
        },
        
        '&__content': {
            width: "50%",
        },
        
        '&__item': {
            marginTop: '150px',
        },
    },
    
    [styles.bp(700)]: {
        '&__list': {
            width: "100%",
        },
    
        '&__svg-wrap': {
            width: 'calc(100% + 80px)',
            maxWidth: '400px',
            left: '-40px',
            height: '170px',
            top: '0',
            bottom: 'auto'
        },
        
        '&__wrap': {
            paddingTop: '185px',
        },
        
        '&__content': {
            width: "100%",
            padding: '0'
        },
        
        '&__item': {
            marginTop: '20px',
        },
    }
});

class Contacts extends React.Component {
    renderItems = (list) => {
        return (
            list.map((item, key) => {
                return (
                    <div key={key} className={`${css_style}__item`}>
                        <div className={`${css_style}__wrap`}>
                            <div className={`${css_style}__svg-wrap`}>
                                {bgImages[item.img]}
                            </div>
                            
                            <div className={`${css_style}__content`}>
                                {item.rows && this.renderRows(item.rows)}
                            </div>
                        </div>
                    </div>
                )
            })
        )
    };
    
    renderRows = (rows) => {
        return (
            rows.map((item, key) => {
                return (
                    <div key={key} className={`${css_style}__row`}>
                        {item.link
                            ?
                            <a href={item.link} rel="noopener noreferrer" className={`${css_style}__link`}>{require('html-react-parser')(item.text)}</a>
                            :
                            <span className={`${css_style}__text`}>{require('html-react-parser')(item.text)}</span>
                        }
                    </div>
                )
            })
        )
    };
    
    render() {
        const { list, background_block } = this.props.data;
        
        return (
            <section className={`${css_style} section`}>
                {background_block && <BackgroundBlock data={background_block}/>}
                
                <div className='container'>
                    <div className='inner-container'>
                        <div className={`${css_style}__list`}>
                            {list && this.renderItems(list)}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts;
