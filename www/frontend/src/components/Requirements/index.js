import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import BackgroundBlock from "../BackgroundBlock";
import fonts from "../../constants/fonts";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import ParallaxWrap from "../ParallaxWrap";
import TitleWrap from "../TitleWrap";

const css_style = css({
    margin: '150px 0 300px',
    
    '&__title': {
        ...fonts.p2
    },
    
    '&__list-wrap': {
        display: 'block',
        position: 'relative',
        width: '100%',
        maxWidth: '1500px',
        margin: '0 auto',
        padding: '0 10px'
    },
    
    '&__list': {
        width: '100%',
        position: 'relative',
        zIndex: '5',
    
        '&::before, &::after': {
            content: '""',
            ...styles.absolute('auto'),
            display: 'block',
            width: 'calc(100vw / 2 - 75px)',
            height: '1px',
            background: styles.colors.white,
            opacity: '0.1'
        },
        
        '&::before': {
            left: 'auto',
            right: 'calc(50% + 75px)'
        },
        
        '&::after': {
            right: 'auto',
            left: 'calc(50% + 75px)'
        },
    },
    
    '&__wrapper': {
        width: '100%',
        
        '&::after': {
            content: '"\\e904"',
            fontFamily: 'icomoon',
            fontSize: '50px',
            color: styles.colors.aqua,
            lineHeight: '1',
            display: 'block',
            ...styles.absolute('100%','auto','auto', '50%'),
            transform: 'translate(-50%, -50%)'
        }
    },
    
    '&__inner-wrapper': {
        cursor: 'grab',
    
        '&:active': {
            cursor: 'grabbing',
        }
    },
    
    '&__item': {
        paddingBottom: '45px',
        width: 'calc((100vw - 140px) / 12 * 4)',
        maxWidth: '580px'
    },
    
    '&__content': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
    },
    
    '&__count': {
        ...fonts.pn
    },
    
    '&__text': {
        ...fonts.p5,
        padding: '0 30px',
        whiteSpace: 'normal',
        flex: '1 0 0'
    },
    
    
    '&__parallax-wrap': {
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%'
    },
    
    '&__bubble-wrap': {
        ...styles.absolute('0','calc(100% / 12)','auto','auto'),
        ...styles.rh(),
        transform: 'translateY(-50%)',
        display: 'block',
        width: 'calc(100% / 12 * 1.5)',
        zIndex: '-1'
    },
    
    '&__bubble': {
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%',
        
        '&::before': {
            content: '""',
            display: 'block',
            ...styles.absolute(),
            width: '100%',
            height: '100%',
            transform: 'rotate(90deg)',
            filter: 'blur(10px)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${require('../../images/bubbles/drop-3.png')})`
        }
    },
    
    [styles.bp(1500)]: {
        margin: '140px 0 250px',
        
        '&__list-wrap': {
            padding: '0'
        },
        
        '&__item': {
            width: 'calc((100vw - 140px) / 12 * 5)',
            maxWidth: '510px'
        },
    
        '&__bubble-wrap': {
            right: '0',
            width: 'calc(100% / 12 * 2)',
        },
    },
    
    [styles.bp(1300)]: {
        margin: '90px 0 140px',
        
        '&__item': {
            width: 'calc((100vw - 60px) / 12 * 6)',
            maxWidth: '450px'
        },
    },
    
    [styles.bp(900)]: {
        margin: '100px 0 120px',
        
        '&__bubble-wrap': {
            width: 'calc(100% / 12 * 3)',
        },
        
        '&__item': {
            width: 'calc((100vw - 60px) / 12 * 7)',
            maxWidth: '415px'
        },
    },
    
    [styles.bp(700)]: {
        margin: '80px 0 120px',
        
        '&__item': {
            width: 'calc(100vw - 20px)',
            maxWidth: '300px'
        },
    
        '&__text': {
            padding: '0 20px',
        },
    },
    
    [styles.bp(500)]: {
        '&__bubble-wrap': {
            width: 'calc(100% / 12 * 4)',
        },
    },
});

class Requirements extends React.Component {
    renderList = (list) => {
        return list.map((item, key) => {
            const index = key + 1;
            const count = index < 10 ? '0' + index : index;
            
            return (
                <div key={key} className={`${css_style}__content`}>
                    <span className={`${css_style}__count`}>
                        {count}
                    </span>
                    <span className={`${css_style}__text`}>
                        {item}
                    </span>
                </div>
            )
        })
    };
    
    render() {
        const { title, list, background_block } = this.props.data;

        return (
            <section className={`${css_style} section`}>
                {background_block && <BackgroundBlock data={background_block}/>}

                <div className="container">
                    <div className={`${css_style}__bubble-wrap`}>
                        <ParallaxWrap className={`${css_style}__parallax-wrap`}>
                            <div className={`${css_style}__bubble js-layer`} data-depth={1.2} />
                        </ParallaxWrap>
                    </div>
                    
                    <div className="inner-container">
                        {title &&
                            <TitleWrap title={title} mod='_space' />
                        }
                    </div>
                    
                    <div className={`${css_style}__list-wrap`}>
                        {list &&
                            <ScrollMenu
                                menuClass={`${css_style}__list`}
                                wrapperClass={`${css_style}__wrapper`}
                                innerWrapperClass={`${css_style}__inner-wrapper`}
                                itemClass={`${css_style}__item`}
            
                                wrapperStyle={{overflow: 'visible', userSelect: 'none'}}
            
                                hideArrows={true}
                                inertiaScrolling={true}
                                alignCenter={false}
                                wheel={false}
            
                                data={this.renderList(list)}
                            />
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Requirements;
