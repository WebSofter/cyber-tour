import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import ReactCompareImage from 'react-compare-image';
import Button from "../Button";
import TitleWrap from "../TitleWrap";
import MediaQuery from "react-responsive/src/Component";

const css_style = css({
    marginBottom: '200px',

    '&__title': {
        ...fonts.p2
    },

    '&__compare': {
        position: 'relative',
        display: 'block',
        width: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
        zIndex: '3',

        '& > div': {
            zIndex: '1',
        },
    },

    '&__label': {
        ...fonts.p10,
        zIndex: '5',

        '&_before': {
            ...styles.absolute('auto','auto','30px','30px')
        },

        '&_after': {
            ...styles.absolute('auto','30px','30px','auto')
        }
    },
    
    [styles.bp(1500)]: {
        marginBottom: '150px',
        
        '&__label': {
            '&_before': {
                left: '20px',
                bottom: '20px'
            },
        
            '&_after': {
                right: '20px',
                bottom: '20px'
            }
        },
    },
    
    [styles.bp(1300)]: {
        marginBottom: '110px',
        
        '&__label': {
            '&_before': {
                left: '10px',
                bottom: '10px'
            },
        
            '&_after': {
                right: '10px',
                bottom: '10px'
            }
        },
    },
    
    [styles.bp(900)]: {
        marginBottom: '80px',
        
        '&__label': {
            '&_before': {
                left: '20px',
                bottom: '20px'
            },
        
            '&_after': {
                right: '20px',
                bottom: '20px'
            }
        },
    },
    
    [styles.bp(700)]: {
        marginBottom: '50px',
        
        '&__label': {
            '&_before': {
                left: '15px',
                bottom: '15px'
            },
        
            '&_after': {
                right: '15px',
                bottom: '15px'
            }
        },
    }
});

class CompareImages extends React.Component {
    renderCompareImages = (before, after) => {
        if (before && after) {
            return (
                <ReactCompareImage
                    leftImage={before}
                    rightImage={after}
                    handle={
                        <Button data={{
                            mod: '_icon icon-left-right',
                        }}/>
                    }
                />
            )
        } else {
            return null
        }
    };
    
    render() {
        const { title, before, after } = this.props.data;

        return (
            <section className={`${css_style} section`}>
                <div className="container">
                    <div className='narrow-container'>
                        {title &&
                            <TitleWrap title={title} mod='_space' />
                        }

                        <div className={`${css_style}__compare`}>
                            {before && after &&
                                <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                                    {(matches) =>
                                        matches
                                            ? this.renderCompareImages(before.img.mob, after.img.mob)
                                            : this.renderCompareImages(before.img.desk, after.img.desk)
                                    }
                                </MediaQuery>
                            }

                            {before && before.label &&
                                <div className={`${css_style}__label ${css_style}__label_before`}>
                                    {before.label}
                                </div>
                            }

                            {after && after.label &&
                                <div className={`${css_style}__label ${css_style}__label_after`}>
                                    {after.label}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CompareImages;
