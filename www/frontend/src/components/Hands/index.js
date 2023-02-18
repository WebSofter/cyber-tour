import React from "react";
import { css, keyframes } from "emotion";
import { ReactComponent as HandsSvg } from "../../images/svg/partners1.svg";
import styles from "../../constants/styles";

const svgDrawingAnimation2 = keyframes`
    0% {
        stroke-dashoffset: 6600px;
    }
    
    40% {
        stroke-dashoffset: 0px;
    }
    
    80% {
        stroke-dashoffset: 0px;
    }
    
    100% {
        stroke-dashoffset: -6600px;
    }
`;

const filterColor4 = keyframes`
    0% {
        filter: hue-rotate(20deg);
    }
  
    100% {
        filter: hue-rotate(-20deg);
    }
`;


const css_style = css({
    position: 'relative',
    width: '100%',
    height: '400px',
    display: 'block',
    animation: `${filterColor4} 3s ease infinite alternate`,

    'svg': {
        ...styles.absolute('auto','auto'),
        width: '50vw',
        maxWidth: '950px',
        height: 'auto',
        transform: 'translateY(10%)',

        strokeDasharray: '6600px',
        strokeDashoffset: '6600px',
        animation: `${svgDrawingAnimation2} 20s linear infinite`
    },
    
    [styles.bp(1500)]: {
        'svg': {
            width: '60vw',
            maxWidth: '820px',
        }
    },
    
    [styles.bp(1300)]: {
        height: '300px',
    },
    
    [styles.bp(900)]: {
        height: '200px',
    
        'svg': {
            width: '75vw',
            maxWidth: '580px',
        }
    },
    
    [styles.bp(700)]: {
        height: '250px',
        
        'svg': {
            width: '470px',
            transform: 'none',
            left: '-40px'
        }
    },
});

class Hands extends React.Component {
    render() {
        return (
            <div className={`${css_style}`}>
                <HandsSvg />
            </div>
        )
    }
}

export default Hands;
