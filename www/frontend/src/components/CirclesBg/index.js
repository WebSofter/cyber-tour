import React from "react";
import { css, keyframes } from "emotion";
import styles from "../../constants/styles";

const spin1 = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const spin2 = keyframes`
    0% {
        transform: rotate(72deg);
    }
    100% {
        transform: rotate(-288deg);
    }
`;

const spin3 = keyframes`
    0% {
        transform: rotate(-144deg);
    }
    100% {
        transform: rotate(216deg);
    }
`;

const spin4 = keyframes`
    0% {
        transform: rotate(216deg);
    }
    100% {
        transform: rotate(-144deg);
    }
`;

const css_style = css({
    ...styles.absolute(),
    width: '100%',
    height: '100%',
    zIndex: '10',
    pointerEvents: 'none',

    '.circle': {
        ...styles.absolute(),
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        borderRadius: '115% 140% 145% 110%/125% 140% 110% 125%',
        transformOrigin: '50% 50%',
        animationDuration: '5.5s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',

        '&:nth-of-type(1)': {
            animationName: `${spin1}`
        },
        '&:nth-of-type(2)': {
            animationName: `${spin2}`
        },
        '&:nth-of-type(3)': {
            animationName: `${spin3}`
        },
        '&:nth-of-type(4)': {
            animationName: `${spin4}`
        },
    }
});

class CirclesBg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: null
        };
        
        this.defaultColors = [
            '#5266f8',
            '#461a86',
            '#dd22b5',
            '#42f0ce',
        ];
    
        this.circlesWrap = React.createRef();
        this.resizeTimer = null;
        this.windowWidth = null;
        this.widthMlt = null;
        this.mounted = false;
    }
    
    componentDidMount() {
        this.mounted = true;
        
        window.addEventListener('resize', this.onWindowResize);
        this.setWidthParams();
        this.setState({
            theme: this.getTheme()
        })
    }
    
    setWidthParams = () => {
        this.windowWidth = window.innerWidth;
        
        if (this.circlesWrap && this.circlesWrap.current) {
            this.widthMlt = ((this.windowWidth / 5)  * (this.circlesWrap.current.clientWidth / this.windowWidth)) + (19.2 - this.windowWidth / 100);
        }
    };
    
    getTheme = () => {
        const { colors } = this.props;
        const colorsArray =  colors || this.defaultColors;
        
        return css({
            '.circle': {
                '&:nth-of-type(1)': {
                    boxShadow: `${colorsArray[0]} 0 -${this.parsePx(1)} ${this.parsePx(4)}, ${colorsArray[0]} 0 -${this.parsePx(2)} ${this.parsePx(10)}, ${colorsArray[0]} 0 -${this.parsePx(2)} ${this.parsePx(10)} inset, ${colorsArray[0]} 0 -${this.parsePx(10)} ${this.parsePx(20)}, ${colorsArray[0]} 0 -${this.parsePx(18)} ${this.parsePx(40)}, ${this.parsePx(5)} ${this.parsePx(5)} ${this.parsePx(15)} ${this.parsePx(5)} rgba(0,0,0,0)`
                },
                '&:nth-of-type(2)': {
                    boxShadow: `${colorsArray[1]} 0 -${this.parsePx(1)} ${this.parsePx(4)}, ${colorsArray[1]} 0 -${this.parsePx(2)} ${this.parsePx(10)}, ${colorsArray[1]} 0 -${this.parsePx(10)} ${this.parsePx(20)}, ${colorsArray[1]} 0 -${this.parsePx(18)} ${this.parsePx(40)}, ${this.parsePx(5)} ${this.parsePx(5)} ${this.parsePx(15)} ${this.parsePx(5)} rgba(0,0,0,0)`
                },
                '&:nth-of-type(3)': {
                    boxShadow: `${colorsArray[2]} 0 -${this.parsePx(1)} ${this.parsePx(4)}, ${colorsArray[2]} 0 -${this.parsePx(2)} ${this.parsePx(10)}, ${colorsArray[2]} 0 -${this.parsePx(2)} ${this.parsePx(10)} inset, ${colorsArray[2]} 0 -${this.parsePx(10)} ${this.parsePx(20)}, ${colorsArray[2]} 0 -${this.parsePx(18)} ${this.parsePx(40)}, ${this.parsePx(5)} ${this.parsePx(5)} ${this.parsePx(15)} ${this.parsePx(5)} rgba(0,0,0,0)`
                },
                '&:nth-of-type(4)': {
                    boxShadow: `${colorsArray[3]} 0 -${this.parsePx(1)} ${this.parsePx(4)}, ${colorsArray[3]} 0 -${this.parsePx(2)} ${this.parsePx(10)}, ${colorsArray[3]} 0 -${this.parsePx(10)} ${this.parsePx(20)}, ${colorsArray[3]} 0 -${this.parsePx(2)} ${this.parsePx(20)} inset, ${colorsArray[3]} 0 -${this.parsePx(18)} ${this.parsePx(40)},${this.parsePx(5)} ${this.parsePx(5)} ${this.parsePx(15)} ${this.parsePx(5)} rgba(0,0,0,0)`
                }
            },
        });
    };
    
    componentWillUnmount() {
        this.mounted = false;
        window.removeEventListener('resize', this.onWindowResize);
    }
    
    onWindowResize = () => {
        clearTimeout(this.resizeTimer);
        
        this.resizeTimer = setTimeout(() => {
            if (this.mounted) {
                this.setWidthParams();
                this.setState({
                    theme: this.getTheme()
                })
            }
        }, 1000);
    };
    
    renderCircles = () => {
        let array = [];

        for (let i = 0; i < 4; i++) {
            array.push(
                <div key={i} className='circle' />
            )
        }

        return array
    };

    parsePx = (px) => {
        return `${px / (this.windowWidth / (this.widthMlt))}vw`;
    };

    render() {
        const { theme } = this.state;
        
        return (
            <div ref={this.circlesWrap} className={`${css_style} ${theme ? theme : ''}`}>
                {this.renderCircles()}
            </div>
        )
    }
}

export default CirclesBg;
