import React from "react";
import { css } from "emotion";
import { NavLink } from "react-router-dom";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import {setPopupData} from "../../actions/SetPopupData";
import {connect} from "react-redux";

const css_style = css({
    position: 'relative',
    display: 'inline-block',
    background: 'transparent',
    cursor: 'pointer',
    maxWidth: '100%',
    
    '&::after': {
        content: '""',
        display: 'block',
        ...styles.absolute(),
        width: '90%',
        height: '100%',
        borderRadius: '30px',
        boxShadow: '0px 7px 18px rgba(1, 220, 234, 0.5)',
    },

    '&__wrap': {
        position: 'relative',
        padding: '5px 50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30px',
        height: '60px',
        background: 'linear-gradient(278.37deg, #5069F8 16.83%, #01DCEA 82.51%)',
        overflow: 'hidden',
        zIndex: '3',
        
        '&::before, &::after': {
            content: '""',
            display: 'block',
            ...styles.absolute(),
            width: '100%',
            height: '100%',
            transition: 'opacity 1s ease'
        },
        
        
        '&::before': {
            background: 'linear-gradient(278.37deg, #5069F8 16.83%, #01DCEA 82.51%)',
            opacity: '1'
        },
        
        
        '&::after': {
            background: 'linear-gradient(78.37deg, #5069F8 16.83%, #01DCEA 82.51%)',
            opacity: '0'
        },
    },
    
    '&__text': {
        ...fonts.b1,
        color: styles.colors.white,
        width: '100%',
        textAlign: 'center',
        zIndex: '2'
    },
    
    '&:hover &': {
        '&__wrap': {
            '&::before': {
                opacity: '0'
            },
            '&::after': {
                opacity: '1'
            },
        }
    },
 
    
    '&._border': {
        '&::after': {
            display: 'none'
        },
    },
    
    '&._border &': {
        '&__wrap': {
            background: 'transparent',
            border: `2px solid ${styles.colors.aqua}`,
            transition: 'border 1s ease',
            
            '&::before, &::after': {
                display: 'none'
            },
        },
    },
    
    '&._border:hover &': {
        '&__wrap': {
            borderColor: styles.colors.white
        }
    },
    
    '&._icon': {
        width: '65px',
        height: '65px',
        minWidth: '0',
        padding: '0',
        
        '&::before': {
            ...styles.absolute(),
            color: styles.colors.white,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '5'
        },
        
        '&::after': {
            borderRadius: '50%'
        },

        '&.icon-plus': {
            '&::before': {
                fontSize: '16px',
            },
        },

        '&.icon-left-right': {
            '&::before': {
                fontSize: '33px',
            },
        }
    },
    
    '&._icon &': {
        '&__wrap': {
            height: '100%',
            padding: '0',
            borderRadius: '50%'
        }
        
    },
    '&._full': {
        width: '100%'
    },
    '&._full &': {
        '&__wrap': {
            padding: '5px 20px'
        }
        
    },
    
    [styles.bp(1500)]: {
        '&._icon': {
            width: '50px',
            height: '50px',
    
            '&.icon-plus': {
                '&::before': {
                    fontSize: '13px',
                },
            },
    
            '&.icon-left-right': {
                '&::before': {
                    fontSize: '25px',
                },
            }
        },
    },
    
    [styles.bp(1300)]: {
        '&._icon': {
            width: '50px',
            height: '50px',
    
            '&.icon-plus': {
                '&::before': {
                    fontSize: '11px',
                },
            },
    
            '&.icon-left-right': {
                '&::before': {
                    fontSize: '22px',
                },
            }
        },
    },
    
    [styles.bp(900)]: {
        '&._icon': {
            width: '44px',
            height: '44px',
        },
    },
    
    [styles.bp(700)]: {
        width: '100%',
        maxWidth: '280px',
        
        '&__wrap': {
            height: '50px',
            padding: '5px 25px',
        }
    },
});

class Button extends React.Component {
    renderButtonText = (text) => {
        return (
            <div className={`${css_style}__wrap`}>
                {text &&
                    <div className={`${css_style}__text`}>
                        {text}
                    </div>
                }
            </div>
        )
    };
    
    renderButton = () => {
        const { data, styleMod='' } = this.props;
        const { link, text, mod='' } = data;
        
        if (link) {
            return (
                <NavLink to={link} className={`${css_style} ${mod} ${styleMod}`}>
                    {this.renderButtonText(text)}
                </NavLink>
            )
        } else {
            return (
                <button className={`${css_style} ${mod} ${styleMod}`} onClick={this.onClick}>
                    {this.renderButtonText(text)}
                </button>
            )
        }
    };

    onClick = () => {
        const { setPopupData, data, extraFormData } = this.props;

        if (setPopupData && data && data.popup_data) {
            const popupData = {
                show: true,
                data: {
                    ...data.popup_data
                }
            };
            
            if (extraFormData) popupData.data.extraFormData = extraFormData;
            setPopupData(popupData);
        }
    };

    render() {
        return (
            this.renderButton()
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPopupData: obj => dispatch(setPopupData(obj))
    }
};

export default connect(null, mapDispatchToProps)(Button);

