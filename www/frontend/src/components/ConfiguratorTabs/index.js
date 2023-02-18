import React from "react";
import { css, keyframes } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import {setConfiguratorState} from "../../actions/SetConfiguratorState";
import {connect} from "react-redux";

const showTab = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const css_styles = css({
    '&__title': {
        position: 'relative',
        display: 'block',
        ...fonts.p3,
        marginBottom: '20px'
    },
    '&__tabs': {
        position: 'relative',
        display: 'block',
        width: 'calc(100% + 10px)',
        left: '-5px',
    },
    '&__tab': {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
    	overflow: 'hidden',
        opacity: '0',
        paddingBottom: '50px',

        '&._active': {
            opacity: '1',
        },
    },
	'&__tab._active &': {
		'&__item': {
			animation: `${showTab} 0.5s ease both`,
            
            ...styles.setDelays({
                base: 0,
                count: 10,
                delay: 100,
                type: 'animation',
            }),
		},
	},
    
    '&__bg': {
        display: 'block',
        ...styles.absolute(),
        height: '100%',
        width: '100%',
        zIndex: '1',
        transition: styles.transitions.default,
        opacity: '0',
        
        '&::after, &::before': {
            content: '""',
            display: 'block',
            ...styles.absolute('0','0','auto','0'),
            height: '100%',
            width: '100%',
            borderRadius: '10px'
        },
        
        '&::before': {
            zIndex: '1',
        },
        
        '&::after': {
            zIndex: '2',
            top: '3px'
        },
    },
    
    '&__item': {
        position: 'relative',
        height: '121px',
        width: 'calc(50% - 10px)',
        margin: '0 5px 10px',
        cursor: 'pointer',
        borderRadius: '10px',
	    
        '&::before, &::after': {
            content: '""',
            display: 'block',
            ...styles.absolute(),
            height: '100%',
            width: '100%',
            transition: styles.transitions.default,
            boxSizing: 'border-box',
            
            borderStyle: 'solid',
            borderColor: styles.colors.white,
            opacity: '0.5',
            borderRadius: '10px',
        },
        
        '&::before': {
            borderWidth: '1px',
            zIndex: '3'
        },
        
        '&::after': {
            borderWidth: '2px',
            opacity: '0',
            zIndex: '5'
        },
        
        '&._active': {
            '&::after': {
                opacity: '1'
            }
        },
    },
    
    '&__item._active &': {
        '&__container': {
            borderWidth: '2px',
            opacity: '1',
        },
        
        '&__bg': {
            opacity: '1'
        }
    },
    
    '&__tab:nth-of-type(1) &': {
        '&__item': {
            '&::after': {
                borderColor: styles.configuratorColorsArray[0]
            }
        },
    
        '&__bg': {
            '&::before': {
                background: styles.configuratorGradientsArray[0],
            },
            
            '&::after': {
                boxShadow: '0px 0px 6px #F0AA55, 0px 0px 6px #F0AA55 inset'
            }
        }
    },
    
    '&__tab:nth-of-type(2) &': {
        '&__item': {
            '&::after': {
                borderColor: styles.configuratorColorsArray[1]
            },
        },
    
        '&__bg': {
            '&::before': {
                background: styles.configuratorGradientsArray[1]
            },
        
            '&::after': {
                boxShadow: '0px 0px 6px #01DCEA, 0px 0px 6px #01DCEA inset'
            }
        }
    },
    
    '&__tab:nth-of-type(3) &': {
        '&__item': {
            '&::after': {
                borderColor: styles.configuratorColorsArray[2]
            },
        },
    
        '&__bg': {
            '&::before': {
                background: styles.configuratorGradientsArray[2]
            },
        
            '&::after': {
                boxShadow: '0px 0px 6px #3A7DFC, 0px 0px 6px #3A7DFC inset'
            }
        }
    },
    
    '&__tab:nth-of-type(4) &': {
        '&__item': {
            '&::after': {
                borderColor: styles.configuratorColorsArray[3]
            },
        },
    
        '&__bg': {
            '&::before': {
                background: styles.configuratorGradientsArray[3]
            },
        
            '&::after': {
                boxShadow: '0px 0px 6px #BA35D9, 0px 0px 6px #BA35D9 inset'
            }
        }
    },
    
    '&__container': {
        position: 'relative',
        display: 'block',
        height: '100%',
        width: '100%',
        transition: styles.transitions.default,
        opacity: '0.5',
        borderRadius: '10px',
        zIndex: '7',
        
        '&::before': {
            content: 'attr(data-num)',
            display: 'block',
            ...styles.absolute('10px','auto','auto','10px'),
            ...fonts.p5u,
            lineHeight: '1'
        }
    },
    
    '&__img-wrap': {
        position: 'relative',
        height: '70%',
        width: '100%',
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    
    '&__img': {
        position: 'relative',
        display: 'block',
        height: '78%',
        width: 'auto',
        margin: '0 auto'
    },
    '&__label-wrap': {
        position: 'relative',
        height: '30%',
        width: '100%',
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        padding: '5px'
    },
    '&__label': {
        ...fonts.p9,
        textAlign: 'center'
    },
	
	[styles.bpm(1300)]: {
        '&__tab': {
            '&:not(._active)': {
                opacity: '0',
                ...styles.absolute('0', '0', 'auto'),
                pointerEvents: 'none',
                zIndex: '-99'
            },
        },
    },
    
	[styles.bpm(700)]: {
        '&__item': {
            '&:hover': {
                '&::before': {
                    opacity: '1'
                },
            }
        },
        
        '&__item:hover &': {
            '&__container': {
                opacity: '1',
            },
        },
	},
	
	[styles.bp(1300)]: {
        '&__tabs': {
            width: '100%',
            left: '0',
        },
        
        '&__tab': {
            '&:not(._active)': {
                display: 'none'
            },
        },
	},
	
	[styles.bp(900)]: {
	
	},
	
	[styles.bp(700)]: {
	
	}
});

class ConfiguratorTabs extends React.Component {
    onOptionSelect = (categoryId, itemId, item) => {
        const { configurator, setConfiguratorState, categoriesNames } = this.props;
        const { selected } = configurator;
        const isExist = selected && selected[categoryId];
        let newObj = {...selected};

        if (isExist) {
	        if (newObj[categoryId].list[itemId]) {
		        delete newObj[categoryId].list[itemId];
		        if (!Object.getOwnPropertyNames(newObj[categoryId].list).length) delete newObj[categoryId];
	        } else {
                newObj[categoryId].list[itemId] = item;
	        }
        } else {
            newObj[categoryId] = {
                title: categoriesNames[categoryId],
                list: {
                	[itemId]: item
                }
            };
        }
    
        setConfiguratorState({
            selected: newObj
        })
    };
    
    render() {
        const { configurator, tabs } = this.props;
        const { title, tabs_list } = tabs;
        const { activeCategoryId, selected } = configurator;
    
        return (
            <div className={`${css_styles}`}>
                {title &&
                <span className={`${css_styles}__title`}>
                        {require('html-react-parser')(title)}
                    </span>
                }
            
                {tabs_list &&
                <div className={`${css_styles}__tabs`}>
                    {
                        tabs_list.map((item, key) => {
                            const { id, list } = item;
                            const mod = id === activeCategoryId ? '_active' : '';
                        
                            return (
                                <div key={key} className={`${css_styles}__tab ${mod}`}>
                                    {
                                        list!==undefined ? 
                                        list.map((item, key) => {
                                            const { img, title } = item;
                                            const categoryId = id;
                                            const itemId = `${categoryId}-${key}`;
                                            const itemMod = selected[id] && selected[id].list[itemId] ? '_active' : '';
                                        
                                            return (
                                                <div key={key} className={`${css_styles}__item ${itemMod}`} onClick={this.onOptionSelect.bind(this, categoryId, itemId, item)}>
                                                    <div className={`${css_styles}__bg`} />
                                                
                                                    <div className={`${css_styles}__container`} data-num={key + 1}>
                                                        {img &&
                                                        <div className={`${css_styles}__img-wrap`}>
                                                            <img src={img} className={`${css_styles}__img`} alt={title}/>
                                                        </div>
                                                        }
                                                        {title &&
                                                        <div className={`${css_styles}__label-wrap`}>
                                                            <span className={`${css_styles}__label`}>
                                                                {require('html-react-parser')(title)}
                                                            </span>
                                                        </div>
                                                        }
                                                    </div>
                                            
                                                </div>
                                            )
                                        }) : ''
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                }
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        configurator: store.configurator
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setConfiguratorState: obj => dispatch(setConfiguratorState(obj)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfiguratorTabs);
