import React from "react";
import { css } from "emotion";
import urls from "../../constants/urls";
import fonts from "../../constants/fonts";
import SocialLinksList from "../SocialLinksList";
import TutMeeLogo from "../TutMeeLogo";
import fetchQuery from "../../utils/fetch";
import styles from "../../constants/styles";

const css_style = css({
    position: 'relative',
    display: 'block',
    width: '100%',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    
    '&__copyright': {
        ...fonts.p6f,
        maxWidth: '200px'
    },
    
    '&__wrap': {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: '50px 0'
    },
    
    [styles.bp(1300)]: {
        '&__wrap': {
            padding: '33px 0'
        },
    },
    
    [styles.bp(900)]: {
        '&__wrap': {
            padding: '30px 0'
        },
    },
    
    [styles.bp(700)]: {
        '&__wrap': {
            flexWrap: 'wrap',
            padding: '26px 0 14px'
        },
        
        '&__copyright': {
            maxWidth: '130px'
        },
        
        '&__tm-wrap': {
            position: 'relative',
            display: 'block',
            width: '100%',
            paddingTop: '14px',
            marginTop: '25px',
            
            '&::before': {
                content: '""',
                display: 'block',
                ...styles.absolute('0','0','auto', '50%'),
                transform: 'translateX(-50%)',
                width: '100vw',
                height: '1px',
                background: styles.colors.white,
                opacity: '0.1'
            }
        }
    }
});

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        
        };
    }

    componentDidMount() {
        return fetchQuery.bind(this)({url: urls.footer});
    }

    render() {
        const { social, copyright } = this.state;

        return (
            <div className={`${css_style} container`}>
                <div className={`${css_style}__wrap`}>
                    {copyright &&
                        <div className={`${css_style}__copyright `}>{copyright}</div>
                    }
                    
                    {social &&
                        <SocialLinksList data={social}/>
                    }
                    
                    <div className={`${css_style}__tm-wrap`}>
                        <TutMeeLogo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
