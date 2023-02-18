import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";
import BackgroundText from "../BackgroundText";
import BackgroundBlock from "../BackgroundBlock";
import FormContactUs from "../FormContactUs";

const css_style = css({
    display: 'block',
    position: 'relative',
    marginTop: '200px',
    zIndex: '2',

    '&__title': {
        ...fonts.p4,
        margin: '0 auto 40px',
        maxWidth: '580px',
        textAlign: 'center'
    },
    
    [styles.bp(1500)]: {
        marginTop: '170px',
    },
    
    [styles.bp(1300)]: {
        marginTop: '115px',
    },
    
    [styles.bp(900)]: {
        marginTop: '160px',
    },
    
    [styles.bp(700)]: {
        marginTop: '115px',
    
        '&__title': {
            textAlign: 'left'
        },
    },
});

class ContactUs extends React.Component {
    render() {
        const { title, form, bg_text, background_block } = this.props.data;

        return (
            <section className={`${css_style} section`}>
                {background_block && <BackgroundBlock data={background_block}/>}
                {bg_text && <BackgroundText data={bg_text} />}

                <div className='container'>
                    <div className='narrow-container'>
                        {title &&
                            <div className={`${css_style}__title`}>
                                {require('html-react-parser')(title)}
                            </div>
                        }

                        {form && <FormContactUs {...form}/>}
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactUs;
