import React from "react";
import { css, keyframes } from "emotion";
import styles from "../../constants/styles";
import BackgroundBlock from "../BackgroundBlock";
import fonts from "../../constants/fonts";
import {setPopupData} from "../../actions/SetPopupData";
import {setConfiguratorState} from "../../actions/SetConfiguratorState";
import {connect} from "react-redux";
import ConfiguratorTabs from '../../components/ConfiguratorTabs';
import ConfiguratorSelected from '../../components/ConfiguratorSelected';
import ConfiguratorSend from '../../components/ConfiguratorSend';
import ConfiguratorSelectButton from '../../components/ConfiguratorSelectButton';
import MediaQuery from "react-responsive/src/Component";

const showOption = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0);
    }
    
`;

const bubblesTransition = styles.transitions.type7_2;

const st_main = css({
    margin: '100px 0',
    
    '&__title': {
        display: 'block',
        position: 'relative',
        ...fonts.p1,
        textAlign: 'center'
    },
    '&__subtitle': {
        display: 'block',
        position: 'relative',
        ...fonts.p3,
        marginTop: '35px',
        textAlign: 'center'
    },
    
    '&__configurator': {
        marginTop: '100px'
    },
    '&__table': {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginTop: '60px',
    },
    '&__col': {
        '&_tabs': {
            width: 'calc(100% / 10 * 2 - 40px / 3)',
            zIndex: '3'
        },
        '&_bubbles': {
            width: 'calc(100% / 10 * 6 - 40px / 3)',
            zIndex: '1'
        },
        '&_selected': {
            width: 'calc(100% / 10 * 2 - 40px / 3)',
            zIndex: '3'
        },
    },
    
    '&__tabs-container': {
        display: 'block',
        position: 'relative',
        width: '100%'
    },
    
    '&__show-components-wrap': {
        position: 'relative',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: '100%',
        maxWidth: '510px',
        margin: '40px auto 0'
    },
    
    '&__show-components-label': {
        ...fonts.p3,
        paddingRight: '20px'
    },
	
    '&__selected-wrap': {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: 'relative',
        width: '100%',
        paddingTop: '40px',
        marginTop: '20px',
        
        '&::before': {
            content: '""',
            display: 'block',
            ...styles.absolute('0','0','auto'),
            height: '20px',
            width: '1px',
            background: styles.colors.aqua
        }
    },
    
    '&__label': {
        ...fonts.p3,
        marginBottom: '20px',
        textAlign: 'center'
    },
    
    '&__call-selected': {
        ...fonts.b1,
        color: styles.colors.aqua
    },
    
	[styles.bp(1500)]: {
        margin: '75px 0',
        
        '&__subtitle': {
            marginTop: '25px',
        },
        
        '&__configurator': {
            marginTop: '60px'
        },
        
		'&__col': {
			'&_tabs': {
				width: 'calc(100% / 12 * 3 - 40px / 3)'
			},
			'&_bubbles': {
				width: 'calc(100% / 12 * 6 - 40px / 3)'
			},
			'&_selected': {
				width: 'calc(100% / 12 * 3 - 40px / 3)'
			},
		},
	},
	
	[styles.bp(1300)]: {
        margin: '60px 0',
        
        '&__col': {
            '&_bubbles': {
                width: 'calc(100% / 12 * 8 - 10px)'
            },
            '&_selected': {
                width: 'calc(100% / 12 * 4 - 10px)'
            },
        },
        
        '&__table': {
            marginTop: '50px',
        },
	},
	
	[styles.bp(900)]: {
        margin: '25px 0 50px',
        
        '&__subtitle': {
            marginTop: '15px',
        },
        
        '&__configurator': {
            marginTop: '50px'
        },
	},
	
	[styles.bp(700)]: {
        margin: '20px 0 70px',
        
        '&__table': {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            maxWidth: "400px",
            margin: "0 auto"
        },
        
        '&__configurator': {
            marginTop: '30px'
        },
	}
});

const st_nav = css({
    position: 'relative',
    height: '105px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    
    '&::before, &::after': {
        content: '""',
        display: 'block',
        width: '100vw',
        height: '1px',
        background: styles.colors.white,
        opacity: '0.1',
        ...styles.absolute('0', 'auto', '0', '50%'),
        transform: 'translateX(-50%)'
        
    },
    
    '&::before': {
        top: '0',
        bottom: 'auto'
    },
    
    '&::after': {
        top: 'auto',
        bottom: '0'
    },
    
    '&__item': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        
        '&::after': {
            content: '""',
            display: 'block',
            width: '100%',
            height: '4px',
            background: styles.colors.orange,
            ...styles.absolute('auto'),
            transition: styles.transitions.default,
            opacity: '0'
        },
        
        '&._active, &:hover': {
            borderWidth: '2px',
            
            '&::after': {
                opacity: '1'
            },
        },
        
        '&:nth-of-type(1)': {
            borderColor: styles.configuratorColorsArray[0],
            
            '&::after': {
                background: styles.configuratorColorsArray[0],
            },
        },
        
        '&:nth-of-type(2)': {
            borderColor: styles.configuratorColorsArray[1],
            
            '&::after': {
                background: styles.configuratorColorsArray[1],
            },
        },
        
        '&:nth-of-type(3)': {
            borderColor: styles.configuratorColorsArray[2],
            
            '&::after': {
                background: styles.configuratorColorsArray[2],
            },
        },
        
        '&:nth-of-type(4)': {
            borderColor: styles.configuratorColorsArray[3],
            
            '&::after': {
                background: styles.configuratorColorsArray[3],
            },
        },
    },
    '&__text': {
        ...fonts.b1
    },
	
	[styles.bp(1500)]: {
	
	},
	
	[styles.bp(1300)]: {
	
	},
	
	[styles.bp(900)]: {
	
	},
	
	[styles.bp(700)]: {
	
	}
});

const st_bubbles = css({
	display: 'block',
	position: 'relative',
	width: '100%',
	...styles.rh(),
    
    '&__btn': {
	    ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        zIndex: '15'
    },
	
	'&__bubbles-wrap': {
    	...styles.absolute(),
		width: '100%',
		height: '100%',
        transition: bubblesTransition,
        
        '&._1': {
    	    transform: 'rotate(0deg)'
        },

        '&._2': {
    	    transform: 'rotate(-180deg)'
        },

        '&._3': {
    	    transform: 'rotate(-90deg)'
        },

        '&._4': {
    	    transform: 'rotate(-270deg)'
        },
	},
    
    '&__bubbles-wrap._1 &': {
        '&__bubble': {
            transform: 'rotate(0deg)'
        }
    },
    '&__bubbles-wrap._2 &': {
        '&__bubble': {
            transform: 'rotate(180deg)'
        }
    },
    '&__bubbles-wrap._3 &': {
        '&__bubble': {
            transform: 'rotate(90deg)'
        }
    },
    '&__bubbles-wrap._4 &': {
        '&__bubble': {
            transform: 'rotate(270deg)'
        }
    },
	
    '&__bubble': {
	    ...styles.rh(),
        ...styles.absolute('0','auto','auto','0'),
        transition: bubblesTransition,
	    width: '58%',
        opacity: '0.3',
        filter: 'blur(1px)',
        pointerEvents: 'none',
        userSelect: 'none',
		
	    '&::before': {
	    	content: '""',
		    display: 'block',
		    ...styles.absolute(),
		    width: '100%',
		    height: '100%',
		    backgroundSize: 'contain',
		    backgroundPosition: 'center center',
		    backgroundRepeat: 'no-repeat',
            filter: 'blur(2px)',
            transformOrigin: '50% 50%',
            transition: bubblesTransition
	    },
     
		'&:nth-of-type(1)': {
            top: "8%", left: "32%",

			'&::before': {
	    		backgroundImage: `url(${require('../../images/bubbles/thermal-zone.png')})`,
                transform: `scale(${37 / 58})`
			}
		},
		'&:nth-of-type(2)': {
            top: "40%", left: "12%",

			'&::before': {
	    		backgroundImage: `url(${require('../../images/bubbles/aqua-zone.png')})`,
                transform: `scale(${40 / 58})`
			}
		},
		'&:nth-of-type(3)': {
            top: "39%", left: "42%",

			'&::before': {
	    		backgroundImage: `url(${require('../../images/bubbles/cooling-zone.png')})`,
                transform: `scale(${28 / 58})`
			}
		},
		'&:nth-of-type(4)': {
            top: "6%", left: "-2%",

			'&::before': {
	    		backgroundImage: `url(${require('../../images/bubbles/relax-zone.png')})`,
                transform: `scale(${33 / 58})`
			}
		},

        '&._active': {
	        zIndex: '10',
            opacity: '1',
            filter: 'blur(0)',

            '&::before': {
                transform: `scale(1)`
            }
        },
    },
    
    '&__bubble:nth-of-type(1) &': {
        '&__option': {
            '&::before': {
                background: styles.configuratorGradientsArray[0]
            },
            
            '&:hover': {
                borderColor: styles.configuratorColorsArray[0],
            }
        },
    
        '&__btn': {
            transform: `scale(${37 / 58})`
        }
    },
    
    '&__bubble:nth-of-type(2) &': {
        '&__option': {
            '&::before': {
                background: styles.configuratorGradientsArray[1]
            },
            
            '&:hover': {
                borderColor: styles.configuratorColorsArray[1]
            }
        },
    
        '&__btn': {
            transform: `scale(${40 / 58})`
        }
    },
    
    '&__bubble:nth-of-type(3) &': {
        '&__option': {
            '&::before': {
                background: styles.configuratorGradientsArray[2]
            },
            
            '&:hover': {
                borderColor: styles.configuratorColorsArray[2]
            }
        },
    
        '&__btn': {
            transform: `scale(${28 / 58})`
        }
    },
    
    '&__bubble:nth-of-type(4) &': {
        '&__option': {
            '&::before': {
                background: styles.configuratorGradientsArray[3]
            },
            
            '&:hover': {
                borderColor: styles.configuratorColorsArray[3]
            }
        },
    
        '&__btn': {
            transform: `scale(${33 / 58})`
        }
    },
    
    '&__bubble._active &': {
        '&__btn': {
            transform: `scale(1)`,
            pointerEvents: 'none'
        },
        
        '&__option': {
            pointerEvents: 'auto'
        },
    
    },
    
    '&__bubble:not(._active) &': {
	    '&__option': {
	        opacity: '0.3',
            pointerEvents: 'none'
        },
    
        '&__btn': {
            pointerEvents: 'auto'
        }
    },
    
    '&__text': {
        ...styles.absolute(),
        width: '50%',
        maxWidth: '150px',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '5',
        ...fonts.p10,
        textAlign: 'center'
    },
    
    '&__options': {
	    ...styles.absolute(),
        width: '95%',
        height: '95%',
        zIndex: '7',
        pointerEvents: 'none'
    },
    
    '&__rotate-warp': {
        ...styles.absolute('0','0','auto','auto'),
        width: '50%',
        height: '50%',
        transformOrigin: '0% 100%',
        transition: styles.transitions.default,
        pointerEvents: 'none'
    },
    
    '&__option-wrap': {
        ...styles.absolute('0','auto','auto','0'),
        ...styles.rh(),
        width: '20%',
        transformOrigin: '50% 50%',
        animation: `${showOption} 0.5s ease both`,
        pointerEvents: 'none',

    },
    
    '&__option': {
	    ...styles.absolute(),
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        transition: styles.transitions.default,
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: styles.colors.white,
        cursor: 'pointer',
        pointerEvents: 'auto',
    
        '&::before': {
            content: '""',
            display: 'block',
            ...styles.absolute(),
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            opacity: '0',
        },
        
        '&::after': {
            content: '"?"',
            display: 'block',
            ...fonts.p10,
            lineHeight: '1',
            ...styles.absolute('auto', 'auto', '100%', '100%'),
            opacity: '0',
        },
        
        '&:hover': {
	        '&::before, &::after': {
	            opacity: '1'
            }
        }
    },
    
    '&__icon': {
        ...styles.absolute(),
        width: '70%',
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    '&__img': {
        position: 'relative',
	    display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
	
	[styles.bp(1500)]: {
	    width: '120%',
        left: '-12%'
	},
	
	[styles.bp(1300)]: {
	
	},
	
	[styles.bp(900)]: {
	
	},
	
	[styles.bp(700)]: {
	
	}
});

class Configurator extends React.Component {
    constructor(props) {
        super(props);
        
        this.resizeTimer = null;
        this.readyToResize = true;
        
        this.categoriesNames = {};
        this.configuratorTabsContainer = React.createRef();
        this.configuratorTabsWrap = React.createRef();
        this.tabsHeight = 0;
    }
    
    componentWillMount() {
        window.addEventListener('resize', this.onWindowResize)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize)
    }
    
    componentDidUpdate() {
        const { configurator, setConfiguratorState, data } = this.props;
        const { nav } = data;
        const { activeCategoryId } = configurator;
        
        if (nav && !activeCategoryId) {
            setConfiguratorState({
                activeCategoryId: nav[0].id
            });
        }
    
        if (nav && !Object.getOwnPropertyNames(this.categoriesNames).length) {
            for (let i = 0; i < nav.length; i++) {
                this.categoriesNames[nav[i].id] = nav[i].title
            }
        }
        
        if (nav) this.setHeight();
    };
    
    onWindowResize = () => {
        clearTimeout(this.resizeTimer);
    
        this.resizeTimer = setTimeout(() => {
            const currentWindowWidth = window.innerWidth;
            const { configurator, setConfiguratorState } = this.props;
            const { windowWidth } = configurator;
            
            if (currentWindowWidth !== windowWidth) {
                setConfiguratorState({
                    windowWidth: currentWindowWidth
                })
            }
        }, 1000);
    };
    
    setHeight = () => {
        const configuratorTabs = this.configuratorTabsContainer.current;
        const configuratorTabsWrap = this.configuratorTabsWrap.current;
        
        if (configuratorTabs && configuratorTabsWrap) {
            setTimeout(() => {
                const height = configuratorTabs.scrollHeight;
            
                if (height !== this.tabsHeight) {
                    this.tabsHeight = height;
    
                    configuratorTabsWrap.style.minHeight = `${height}px`
                }
            }, 500);
        }
    };
	
	setActiveCategory = (id) => {
        
        const { configurator, setConfiguratorState } = this.props;
        const { activeCategoryId } = configurator;
        
        if (id !== activeCategoryId) {
            setConfiguratorState({
                activeCategoryId: id
            })
        }
    };
    
    renderNav = (nav) => {
        const { configurator } = this.props;
        const { activeCategoryId } = configurator;
        
        return (
            <div className={`${st_nav}`}>
                {
                    nav.map((item, key) => {
                        const mod = activeCategoryId === item.id ? '_active' : '';
                        
                        return (
                            <div key={key} className={`${st_nav}__item ${mod}`} onClick={this.setActiveCategory.bind(this, item.id)}>
                                <span className={`${st_nav}__text`}>{require('html-react-parser')(item.title)}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    };
    
    onOptionSelect = (categoryId, itemId, item) => {
        const { configurator, setConfiguratorState } = this.props;
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
                title: this.categoriesNames[categoryId],
                list: {
                	[itemId]: item
                }
            };
        }
    
        setConfiguratorState({
            selected: newObj
        })
    };
    
    getCurrentTabIndex = (activeCategoryId) => {
        return Object.keys(this.categoriesNames).indexOf(activeCategoryId);
    };
    
    renderBubbles = (nav) => {
        const { configurator } = this.props;
        const { activeCategoryId, selected } = configurator;
        const activeCategoryIndex = this.getCurrentTabIndex(activeCategoryId);
        const themeMod = `_${activeCategoryIndex + 1}`;
        
        return (
            <div className={`${st_bubbles}`}>
	            <div className={`${st_bubbles}__bubbles-wrap ${themeMod}`}>
		            {
			            nav.map((item, key) => {
				            const { id, title } = item;
				            const activeMod = id === activeCategoryId ? '_active' : '';
        
				            return (
					            <div key={key} className={`${st_bubbles}__bubble ${id} ${activeMod}`}>
                                    <div className={`${st_bubbles}__btn`}  onClick={this.setActiveCategory.bind(this, id)}/>
                                    
                                    <div className={`${st_bubbles}__text`}>
                                        {require('html-react-parser')(title)}
                                    </div>
                                    {
                                        this.renderRotatedOptions(id, selected)
                                    }
					            </div>
				            )
			            })
		            }
	            </div>
            </div>
        )
    };
    
    callPopup = (popup_data) => {
        const { setPopupData } = this.props;
    
        if (popup_data && popup_data) {
            setPopupData({
                show: true,
                data: {...popup_data}
            })
        }
    };
    
    renderRotatedOptions = (id, selected) => {
        const relatedItems = selected[id];
        let optionsArray = [];
        let counter = 1;
    
        if (relatedItems && relatedItems.list) {
            const itemsCount = Object.keys(relatedItems.list).length;
            const angleMlt = itemsCount < 7 ? 7 : itemsCount;
            
            for (let prop in relatedItems.list) {
                const item = relatedItems.list[prop];
                const { img, title, popup_data } = item;
                const angle = (360 / angleMlt) * counter;
                const transform = css({
                    transform: `rotate(${angle}deg)`
                }) ;
                const transform_reverse = css({
                    transform: `rotate(-${angle}deg)`
                }) ;
    
                optionsArray.push(
                    <div key={counter++} className={`${st_bubbles}__rotate-warp ${transform}`}>
                        <div className={`${st_bubbles}__option-wrap `}>
                            <div className={`${st_bubbles}__option ${transform_reverse}`} onClick={this.callPopup.bind(this, popup_data)}>
                                <div className={`${st_bubbles}__icon`}>
                                    <img src={img} className={`${st_bubbles}__img`} alt={title}/>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        
        return (
            <div className={`${st_bubbles}__options`}>
                {optionsArray}
            </div>
        )
    };
    
    callPopupTabs = (tabsObj, id) => {
        this.setActiveCategory(id);
        
        this.callPopup({
            content: {
                configurator_tabs: tabsObj
            }
        })
    };
    
    render() {
        const { configurator, data } = this.props;
        const { title, subtitle, nav, tabs, background_block, selected_title, btn_label, selected_prefix, button, tab_btn_text, show_selected_btn } = data;
        const { selected, activeCategoryId } = configurator;
        const tabsObj = {
            tabs: tabs,
            categoriesNames: this.categoriesNames,
        };
        const selectedObj = {
            selected: selected,
            selected_title: selected_title,
            btn_label: btn_label,
            button: button,
        };

        return (
            <section id='configurator' className={`${st_main} section`}>
                {background_block && <BackgroundBlock data={background_block}/>}

                <div className="container">
                    <div className="inner-container-fc">
                        {title &&
                            <h2 className={`${st_main}__title`}>
                                {require('html-react-parser')(title)}
                            </h2>
                        }
                        {subtitle &&
                            <span className={`${st_main}__subtitle`}>
                                {require('html-react-parser')(subtitle)}
                            </span>
                        }
    
                        <div className={`${st_main}__configurator`}>
                            {nav &&
                                <MediaQuery minWidth={`${styles.breakpoints[700]+1}px`}>
                                    {this.renderNav(nav)}
                                </MediaQuery>
                                
                            }
    
                            <MediaQuery minWidth={`${styles.breakpoints[700]+1}px`} maxWidth={`${styles.breakpoints[1300]}px`}>
                                <div className={`${st_main}__show-components-wrap`}>
                                    {tabs &&
                                        <span className={`${st_main}__show-components-label`}>
                                            {require('html-react-parser')(tabs.title)}
                                        </span>
                                    }
            
                                    {tab_btn_text &&
                                        <ConfiguratorSelectButton
                                            btn_text={tab_btn_text}
                                            color={this.getCurrentTabIndex(activeCategoryId)}
                                            on_click={this.callPopup.bind(this, {
                                                content: {
                                                    configurator_tabs: tabsObj
                                                }
                                            })}
                                        />
                                    }
                                </div>
                            </MediaQuery>
                            
                            <div className={`${st_main}__table`}>
                                {tabs && tabs.title &&
                                    <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                                        <span className={`${st_main}__label`}>
                                            {require('html-react-parser')(tabs.title)}
                                        </span>
                                    </MediaQuery>
                                }
                                
                                {nav &&
                                    <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                                        {
                                            nav.map((item, key) => {
                                                const { title, id } = item;
                                                const navItemIndex = this.getCurrentTabIndex(id);
                                                const selectedCount = selected[id] ? Object.getOwnPropertyNames(selected[id].list).length : false;
                
                                                return (
                                                    <ConfiguratorSelectButton
                                                        key={key}
                                                        btn_text={title}
                                                        color={navItemIndex}
                                                        selected_prefix={selected_prefix}
                                                        selected_count={selectedCount}
                                                        on_click={this.callPopupTabs.bind(this, tabsObj, id)}
                                                    />
                                                )
                                            })
                                        }
                                    </MediaQuery>
                                }
                                
                                <MediaQuery minWidth={`${styles.breakpoints[1300]+1}px`}>
                                    <div ref={this.configuratorTabsWrap} className={`${st_main}__col ${st_main}__col_tabs`}>
                                        <div ref={this.configuratorTabsContainer} className={`${st_main}__tabs-container`}>
                                            {tabs &&
                                                <ConfiguratorTabs {...tabsObj} />
                                            }
                                        </div>
                                    </div>
                                </MediaQuery>
    
                                <MediaQuery minWidth={`${styles.breakpoints[700]+1}px`}>
                                    <div className={`${st_main}__col ${st_main}__col_bubbles`}>
                                        {nav &&
                                            this.renderBubbles(nav)
                                        }
                                    </div>
                                </MediaQuery>
    
                                <MediaQuery minWidth={`${styles.breakpoints[700]+1}px`}>
                                    <div className={`${st_main}__col ${st_main}__col_selected`}>
                                        {selected &&
                                            <ConfiguratorSelected {...selectedObj} />
                                        }
                                    </div>
                                </MediaQuery>
                                
                                {!!Object.getOwnPropertyNames(selected).length &&
                                    <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                                        <div className={`${st_main}__selected-wrap`}>
                                            {selected_title &&
                                                <span className={`${st_main}__label`}>
                                                    {require('html-react-parser')(selected_title)}
                                                </span>
                                            }
                                            
                                            {show_selected_btn &&
                                                <span className={`${st_main}__call-selected`} onClick={this.callPopup.bind(this, {
                                                    content: {
                                                        configurator_selected: selectedObj
                                                    }
                                                })}>
                                                    {require('html-react-parser')(show_selected_btn)}
                                                </span>
                                            }
    
                                            <ConfiguratorSend
                                                button={button}
                                                btn_label={btn_label}
                                                selected={selected}
                                            />
                                        </div>
                                    </MediaQuery>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
        setPopupData: obj => dispatch(setPopupData(obj)),
        setConfiguratorState: obj => dispatch(setConfiguratorState(obj)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Configurator);
