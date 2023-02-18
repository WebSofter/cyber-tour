const styles = {
    breakpoints: {
        '1920': 1920,
        '1700': 1700,
        '1500': 1500,
        '1300': 1300,
        '1200': 1200,
        '900': 900,
        '700': 700,
        '500': 500,
    },

    bp: (val) => `@media (max-width: ${styles.breakpoints[val]}px)`,
    bpm: (val) => `@media (min-width: ${styles.breakpoints[val]+1}px)`,
    bpb: (from, to) => `@media (min-width: ${styles.breakpoints[from]+1}px) and (max-width: ${styles.breakpoints[to]}px)`,
    bpt: () => `@media (hover: none) and (pointer: coarse)`,
    bpnt: () => `@media not all and (hover: none)`,
    
    colors: {
        black: '#000',
        white: '#fff',
        aqua: '#01DCEA',
        orange: '#FFB24A',
        gold: '#efbd3b',
        blue: '#2864E6',
        blue2: '#282561',
        blue_dark: '#13122d',
        blue2_90: 'rgba(40,37,97,0.9)',
        violet: '#BA35D9',
        blue_light: '#3B7FFF',
        aqua09: 'rgba(1,220,234, 0.09)',
        mask: 'rgba(30,0,67, 0.22)',
        mask2: 'rgba(44,9,123, 0.47)',
        overlay: 'rgba(80,32,153,0.45)',
    },

    gradients: {
        aqua_blue: 'linear-gradient(275.04deg, #5069F8 16.83%, #01DCEA 82.51%);',
        rainbow: 'linear-gradient(90.67deg, #2B84B6 15.84%, #3EECF2 42.69%, #E46AD8 64.59%, #69619C 84.58%);'
    },

    fontFamily: {
        ms: 'montserrat'
    },

    transitions: {
        default: 'all 0.3s ease',
        ease1: 'all 1s ease',
        ease2: 'all 0.5s ease',
        ease3: 'all 0.7s ease',
        type2: 'all 500ms cubic-bezier(0.4,0,0.2,1)',
        type3: 'all 300ms cubic-bezier(0.4,0,0.2,1)',
        type4: 'all 700ms cubic-bezier(0.4,0,0.2,1)',
        type5: 'transform 3.5s cubic-bezier(0.18, 1, 0.21, 1) 0.3s,opacity 3.5s cubic-bezier(0.18, 1, 0.21, 1)',
        type6: 'transform 2s cubic-bezier(0.18, 1, 0.21, 1) 0.3s,opacity 2s cubic-bezier(0.18, 1, 0.21, 1)',
        type7: 'transform 1.5s cubic-bezier(0.18, 1, 0.21, 1) 0.3s,opacity 1.5s cubic-bezier(0.18, 1, 0.21, 1)',
        type7_2: 'transform 2.5s cubic-bezier(0.18, 1, 0.21, 1) 0.3s,opacity 2.5s cubic-bezier(0.18, 1, 0.21, 1)',
        type8: 'all 200ms cubic-bezier(0.4,0,0.2,1)',
        type9: 'all 700ms cubic-bezier(0.4,0,0.2,1)',
        type10: 'transform 1.5s cubic-bezier(0.18, 1, 0.21, 1), opacity 1.5s cubic-bezier(0.18, 1, 0.21, 1)',
    },

    setDelays: (data) => {
        const { base, count, delay, type='transition', selectorMod='' } = data;
        let stylesObj = {};

        for (let i = 1; i <= count; i++) {
            stylesObj[`&:nth-of-type(${i}n)${selectorMod}`] = {
                [`${type}Delay`]: `${base + (delay * i)}ms`
            }
        }

        return stylesObj;
    },

    absolute: (top='0',right='0',bottom='0',left='0') => {
        return {
            position: 'absolute',
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            margin: 'auto'
        }
    },

    absolutely: (top='0',right='0',bottom='0',left='0') => {
        return {
            position: 'absolute !important',
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            margin: 'auto'
        }
    },

    fixed: (top='0',right='0',bottom='0',left='0') => {
        return {
            position: 'fixed',
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            margin: 'auto'
        }
    },

    rh: (mlt=1) => {
       return {
           '&::after': {
               content: '""',
               display: 'block',
               paddingTop: `${100 * mlt}%`
           }
       }
    }
};

styles.configuratorColorsArray = [
    styles.colors.orange,
    styles.colors.aqua,
    styles.colors.blue_light,
    styles.colors.violet
];

styles.configuratorGradientsArray = [
    'linear-gradient(131.74deg, rgba(255, 223, 179, 0.2) 11.36%, rgba(153, 113, 153, 0.2) 83.44%)',
    'linear-gradient(131.74deg, rgba(1, 220, 234, 0.076) 11.36%, rgba(70, 121, 219, 0.2) 83.44%)',
    'linear-gradient(131.74deg, rgba(63, 97, 217, 0.128) 11.36%, rgba(106, 118, 219, 0.176) 83.44%)',
    'linear-gradient(131.74deg, rgba(167, 153, 255, 0.2) 11.36%, rgba(182, 51, 212, 0.2) 83.44%)'
];

styles.slickArrows = {
    '.slick-arrow': {
        height: 'auto',
        width: 'auto',

        '&::before': {
            fontFamily: 'icomoon',
            fontSize: '38px',
            opacity: '1',
            color: styles.colors.white,
            transition: styles.transitions.default
        },

        '&:hover': {
            '&::before': {
                color: styles.colors.aqua
            }
        },


        '&.slick-prev': {
            left: '60px',

            '&::before': {
                content: '"\\e900"',
            },
        },

        '&.slick-next': {
            right: '60px',

            '&::before': {
                content: '"\\e901"',
            },
        },
    
    
        [styles.bp(1500)]: {
            '&.slick-prev': {
                left: '40px',
            },
    
            '&.slick-next': {
                right: '40px',
            },
        },
    
        [styles.bp(1300)]: {
            '&::before': {
                fontSize: '27px',
            },
            
            '&.slick-prev': {
                left: '0',
            },
    
            '&.slick-next': {
                right: '0',
            },
        },
    
        [styles.bp(900)]: {
            '&.slick-prev': {
                // left: '10px',
            },
    
            '&.slick-next': {
                // right: '10px',
            },
        },
    
        [styles.bp(700)]: {
            '&::before': {
                fontSize: '20px',
            },
            
            '&.slick-prev': {
                left: '0',
            },
    
            '&.slick-next': {
                right: '0',
            },
        },
    }
};

styles.maskStyles = {
    content: '""',
    display: 'block',
    ...styles.absolute(),
    width: '100%',
    height: '100%',
    background: styles.colors.overlay,
    zIndex: '2'
};

styles.maskBefore = {
    '&::before': {
        ...styles.maskStyles
    }
};

styles.maskAfter = {
    '&::after': {
        ...styles.maskStyles
    }
};


styles.closeBtn = {
    display: 'block',
    ...styles.absolute('0','0','auto','auto'),
    width: '34px',
    height: '34px',
    cursor: 'pointer',
    background: styles.colors.cyan,
    zIndex: '10',
    
    '&::before, &::after': {
        content: '""',
        display: 'block',
        ...styles.absolute(),
        height: '2px',
        width: '50%',
        transformOrigin: '50% 50%',
        background: styles.colors.aqua,
        transition: styles.transitions.default
    },
    
    '&::before': {
        transform: 'rotate(-45deg)'
    },
    
    '&::after': {
        transform: 'rotate(45deg)'
    },
    
    '&:hover': {
        '&::before, &::after': {
            background: styles.colors.white
        }
    },
};

export default styles;
