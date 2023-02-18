import React from "react";
import { css, keyframes } from "emotion";
import { Picture } from 'react-responsive-picture';
import { InView } from 'react-intersection-observer';
import MediaQuery from 'react-responsive'
import styles from "../../constants/styles";
import {isIOS, osName} from 'react-device-detect';

const filterColor5 = keyframes`
    0% {
        filter: hue-rotate(-30deg);
    }
  
    25% {
        filter: hue-rotate(30deg);
    }
    
    50% {
        filter: hue-rotate(-30deg);
    }
    
    75% {
        filter: hue-rotate(30deg);
    }
    
    100% {
        filter: hue-rotate(-30deg);
    }
`;


const bgArray = {
    bb: [
	    {
		    srcSet: require('../../images/bg/popup-bg_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/popup-bg_mob.jpg'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/popup-bg.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/popup-bg.jpg'),
        }
    ],
    
    hp1: [
	    {
		    srcSet: require('../../images/bg/homepage/homepage-bg-1_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
	    {
		    srcSet: require('../../images/bg/homepage/homepage-bg-1_mob.png'),
		    media: "(max-width: 700px)",
	    },
	    {
		    srcSet: require('../../images/bg/homepage/homepage-bg-1.webp'),
		    type: "image/webp"
	    },
	    {
		    srcSet: require('../../images/bg/homepage/homepage-bg-1.png'),
	    }
    ],

    hp3: [
	    {
		    srcSet: require('../../images/bg/homepage/homepage-bg-3_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/homepage/homepage-bg-3_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/homepage/homepage-bg-3.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/homepage/homepage-bg-3.png'),
        }
    ],
	
    hp4: [
	    {
		    srcSet: require('../../images/bg/homepage/homepage-bg-4_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/homepage/homepage-bg-4_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/homepage/homepage-bg-4.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/homepage/homepage-bg-4.png'),
        }
    ],
	
    hp5: [
	    {
		    srcSet: require('../../images/bg/homepage/homepage-bg-5_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/homepage/homepage-bg-5_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/homepage/homepage-bg-5.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/homepage/homepage-bg-5.png'),
        }
    ],


	
    c1: [
	    {
		    srcSet: require('../../images/bg/contacts/contact-bg-2_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/contacts/contact-bg-2_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/contacts/contact-bg-2.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/contacts/contact-bg-2.png'),
        }
    ],


	
    p1: [
	    {
		    srcSet: require('../../images/bg/projets/projects-bg-1_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/projets/projects-bg-1_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/projets/projects-bg-1.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/projets/projects-bg-1.png'),
        }
    ],

    p2: [
	    {
		    srcSet: require('../../images/bg/projets/projects-bg-2_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/projets/projects-bg-2_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/projets/projects-bg-2.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/projets/projects-bg-2.png'),
        }
    ],

    p3: [
	    {
		    srcSet: require('../../images/bg/projets/projects-bg-3_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/projets/projects-bg-3_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/projets/projects-bg-3.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/projets/projects-bg-3.png'),
        }
    ],

	
	
    pp1: [
	    {
		    srcSet: require('../../images/bg/project-page/project-page-1_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/project-page/project-page-1_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/project-page/project-page-1.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/project-page/project-page-1.png'),
        }
    ],

    pp2: [
	    {
		    srcSet: require('../../images/bg/project-page/project-page-bg-2_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/project-page/project-page-bg-2_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/project-page/project-page-bg-2.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/project-page/project-page-bg-2.png'),
        }
    ],

    pp3: [
	    {
		    srcSet: require('../../images/bg/project-page/project-page-bg-3_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/project-page/project-page-bg-3_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/project-page/project-page-bg-3.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/project-page/project-page-bg-3.png'),
        }
    ],

    pp4: [
	    {
		    srcSet: require('../../images/bg/project-page/project-page-bg-4_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/project-page/project-page-bg-4_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/project-page/project-page-bg-4.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/project-page/project-page-bg-4.png'),
        }
    ],

	
	
    ph1: [
	    {
		    srcSet: require('../../images/bg/philosophy/1-philosophy-bg-1_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/philosophy/1-philosophy-bg-1_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/philosophy/1-philosophy-bg-1.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/philosophy/1-philosophy-bg-1.png'),
        }
    ],

    ph2: [
	    {
		    srcSet: require('../../images/bg/philosophy/2-philosophy-bg-2_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/philosophy/2-philosophy-bg-2_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/philosophy/2-philosophy-bg-2.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/philosophy/2-philosophy-bg-2.png'),
        }
    ],

    ph3: [
	    {
		    srcSet: require('../../images/bg/philosophy/3-philosophy-bg-3_mob.webp'),
		    type: "image/webp",
		    media: "(max-width: 700px)",
	    },
        {
            srcSet: require('../../images/bg/philosophy/3-philosophy-bg-3_mob.png'),
            media: "(max-width: 700px)",
        },
	    {
		    srcSet: require('../../images/bg/philosophy/3-philosophy-bg-3.webp'),
		    type: "image/webp"
	    },
        {
            srcSet: require('../../images/bg/philosophy/3-philosophy-bg-3.png'),
        }
    ],
};

const css_style = css({
    ...styles.absolute('50%', 'auto', 'auto', '50%'),
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: 'auto',
    zIndex: '-10',
    pointerEvents: 'none',
    
    '&._up': {
        zIndex: '-5'
    },
    
    '&._down': {
        zIndex: '-15'
    },
    
    '&__img-wrap': {
        animation: `${filterColor5} 12s ease infinite`,
        animationPlayState: 'pause',

	    '&._animate': {
            animationPlayState: 'running',
	    },
    },
    
    '&__img': {
    	width: 'calc(100% + 90px)',
	    minWidth: '1920px',
	    left: '50%',
	    transform: 'translateX(-50%)',
	
	    '&._blur': {
		    filter: 'blur(30px)',
	    },
    },
    
    'picture, img': {
        display: 'block',
        position: 'relative',
        height: 'auto',
    },
	
    'picture': {
        width: '100%',
    },
    
    '&__poster': {
        ...styles.absolute('50%', '0', 'auto'),
        transform: 'translateY(-50%)',
        width: '100%',
        zIndex: '2',
        transition: 'opacity 3s linear',
        transitionDelay: '0.5s',
        
	    '&_bg': {
        	position: 'relative',
		    transform: 'none',
		    top: '0',
		    left: '0',
        	
        	img: {
        		position: 'relative'
	        }
	    },
	    
        '&._hide': {
            opacity: '0'
        }
    },
    
    '&__video-wrap': {
        display: 'block',
        position: 'relative',
        width: '100%',
        minWidth: '1920px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: '1',
        opacity: '.5',
        overflow: 'hidden',
        
        '&::before, &::after': {
            content: '""',
            display: 'block',
            width: '100%',
            height: '100px',
            zIndex: '5'
        },
        
        '&::before': {
            ...styles.absolute('-1px','0','auto'),
            background: 'linear-gradient(180deg, #303675, rgba(0,0,0,0))'
        },
        
        '&::after': {
            ...styles.absolute('auto', '0', '-1px'),
            background: 'linear-gradient(0deg, #303675, rgba(0,0,0,0))'
        },
    },
    
    '&__video': {
        display: 'block',
        position: 'relative',
        width: '100%',
        zIndex: '1'
    },
    
    '&__in-view-detector-wrap, &__in-view-detector': {
        ...styles.absolute(),
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: '-15'
    },
    
    '&.top': {
        transform: 'translate(-50%, -25%)',
    },
    
    '&.bottom ': {
        top: 'auto',
        bottom: '50%',
        transform: 'translate(-50%, 25%)',
    },

    '&.center-bottom ': {
        top: '50%',
        bottom: 'auto',
        transform: 'translateX(-50%)'
    },

    '&.center-top ': {
        top: 'auto',
        bottom: '50%',
        transform: 'translateX(-50%)'
    },
    
    '&._cover': {
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        transform: "none",
        minWidth: "0"
    },
    '&._cover &': {
        '&__img-wrap': {
            display: "block",
            position: "relative",
            width: "100%",
            height: "100%",
        
            picture: {
                display: "block",
                position: "relative",
                width: "100%",
                height: "100%"
            },
        
            img: {
                display: "block",
                position: "relative",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top"
            },
        },
    
        "&__video-wrap": {
            height: "100%"
        },
        
        "&__poster, &__video, &__poster picture, &__poster img": {
            left: '0',
            top: "0",
            transform: "none",
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center center"
        }
    },
    
    [styles.bp(700)]: {
        '&__img': {
            width: 'calc(100% + 45px)',
            minWidth: '700px',
        
            '&._blur': {
                filter: 'blur(15px)',
            },
        },
    
        '&__video-wrap': {
            minWidth: '700px',
        },
    
    }
});


class BackgroundBlock extends React.Component {
    constructor(props) {
        super(props);
        
        this.loaded = false;
        this.videoPlayer = React.createRef();
    }
    
    toggleVideo = (inView) => {
        const player = this.videoPlayer.current;
        
        if (player) {
            if (inView) {
                this.videoPlayer.current.play();
            } else {
                this.videoPlayer.current.pause();
            }
        }
    };
    
    _checkIsNotIOS = () => {
    	return !(isIOS || (osName.toUpperCase().indexOf('MAC') !== -1))
    };
    
    renderImg = (obj) => {
        const { rootMargin='50%' } = this.props;
        const { data } = obj;
        const { stop_animation=false } = data;
        const addBlur = this._checkIsNotIOS();
        
        return (
            <InView rootMargin={rootMargin} onChange={this.onChange} >
                {({ inView, ref }) => (
                    <div ref={ref}  className={`${css_style}__img-wrap ${(inView && !stop_animation) ? '_animate' : ''}`}>
                        {(inView || this.loaded) &&
                            <Picture className={`${css_style}__img ${addBlur ? '_blur' : ''}`}
                                 sources = {bgArray[data.name]}
                            />
                        }
                    </div>
                )}
            </InView>
        )
    };
    
    renderVideo = (obj) => {
        const { data, poster } = obj,
            { disable_on_ios, disable_on_windows } = data,
            isNotIOS = this._checkIsNotIOS(),
            addVideo = (!isNotIOS && !disable_on_ios) || (isNotIOS && !disable_on_windows);

        return (
            <div className={`${css_style}__video-wrap`}>
	            {addVideo
		            ?
		            <InView className={`${css_style}__in-view-detector`} onChange={this.toggleVideo}>
			            {({ inView, ref }) => (
				            <div ref={ref} className={`${css_style}__poster ${(inView) ? '_hide' : ''}`}>
					            <Picture className={`${css_style}__img`}
					                     sources = {[
						                     {
							                     srcSet: poster.mob,
							                     media: `(max-width: ${styles.breakpoints[700]}px)`,
						                     },
						                     {
							                     srcSet: poster.desk,
						                     },
					                     ]}
					            />
				            </div>
			            )}
		            </InView>
		            :
		            <div className={`${css_style}__poster ${css_style}__poster_bg`}>
			            <Picture className={`${css_style}__img`}
			                     sources = {[
				                     {
					                     srcSet: poster.mob,
					                     media: `(max-width: ${styles.breakpoints[700]}px)`,
				                     },
				                     {
					                     srcSet: poster.desk,
				                     },
			                     ]}
			            />
		            </div>
	            }
            
                {data && data.url && addVideo &&
                    <video ref={this.videoPlayer} className={`${css_style}__video`} preload={data.preload || 'auto'} controls={false} playsInline loop muted>
                        {data.url.desk &&
                            <MediaQuery minWidth={`${styles.breakpoints[700] + 1}px`}>
                                <source src={data.url.desk.mp4} type="video/mp4" />
                                <source src={data.url.desk.webm} type="video/webm" />
                            </MediaQuery>
                        }
                        {data.url.mob &&
                            <MediaQuery maxWidth={`${styles.breakpoints[700]}px`}>
                                <source src={data.url.mob.mp4} type="video/mp4" />
                                <source src={data.url.mob.webm} type="video/webm" />
                            </MediaQuery>
                        }
                    </video>
                }
            </div>
        )
    };
 
    renderBg = (obj) => {
        const { type } = obj;
        
        if (type === 'img') {
            return (
                this.renderImg(obj)
            )
        }
        
        if (type === 'video') {
            return (
                this.renderVideo(obj)
            )
        }
    };
    
    onChange = (inView) => {
        if (!this.loaded) {
            if (inView) {
                this.loaded = true;
            }
        }
    };
    
    render() {
        const { data, styleMod='' } = this.props;
        const { mod='' } = data.data;
        const levelMod = data.type === 'video' ? '_down' : '';
        
        return (
            <div className={`${css_style} ${mod} ${styleMod} ${levelMod}`}>
                {this.renderBg(data)}
            </div>
        )
    }
}

export default BackgroundBlock;
