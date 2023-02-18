import React, { Component } from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";

const css_style = css({
    display: 'block',
    position: 'relative',
    width: '100%',
    
    '&._line': {
        '&::after': {
            content: '""',
            display: 'block',
            ...styles.absolute('calc(100% + 30px)','0','auto','0'),
            width: '2px',
            height: '50px',
            background: styles.colors.aqua
        }
    },

    'h1, h2, h3, h4, h5': {
        marginTop: '60px',

        '&:first-of-type': {
            marginTop: '0'
        }
    },

    'h1': {
        ...fonts.p0,
        marginBottom: '35px'
    },
    'h2': {
        ...fonts.p1,
        marginBottom: '30px'
    },
    'h3': {
        ...fonts.p2,
        marginBottom: '25px'
    },
    'h4': {
        ...fonts.p3,
        marginBottom: '20px'
    },
    'h5': {
        ...fonts.p4,
        marginBottom: '15px'
    },

    'p': {
        ...fonts.p5,
        marginBottom: '20px',

        '&:last-child': {
            marginBottom: '0'
        }
    },

    'a': {
        color: styles.colors.cyan,

        '&:hover': {
            textDecoration: 'underline'
        }
    },

    'strong': {
        fontWeight: '700'
    },

    'ul, ol': {
        ...fonts.list
    },

    'ul': {
        ...fonts.ul
    },

    'ol': {
        ...fonts.ol
    },
    
    [styles.bpm(700)]: {
        '&._ta-center': {
            textAlign: 'center'
        },
    },
    
    [styles.bp(1300)]: {
        '&._line': {
            '&::after': {
                height: '40px',
            }
        },
    },

    [styles.bp(700)]: {
        '&._line': {
            '&::after': {
                top: 'calc(100% + 20px)',
                width: '1px',
                height: '20px',
            }
        },
        
        'h1, h2, h3, h4, h5': {
            marginTop: '40px',
        },
    
        'h1': {
            marginBottom: '30px'
        },
        'h2': {
            marginBottom: '25px'
        },
        'h3': {
            marginBottom: '20px'
        },
        'h4': {
            marginBottom: '15px'
        },
        'h5': {
            marginBottom: '10px'
        },
    
        'p': {
            marginBottom: '10px',
        },
    },
});

class TextBlock extends Component {
    render() {
        const { content, mod='' } = this.props.data;

        return (
            <div className={`${css_style} ${mod}`}>
                {content ? require("html-react-parser")(content): null}
            </div>
        );
    }
}
export default TextBlock;
