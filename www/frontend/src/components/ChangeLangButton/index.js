import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";
import langs from "../../constants/langs";
import { CookiesProvider, withCookies } from 'react-cookie';

const css_style = css({
    position: 'relative',
    width: '49px',
    height: '49px',
    border: `2px solid ${styles.colors.aqua}`,
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: styles.transitions.default,
    color: styles.colors.white,
    fontSize: '12px',
    lineHeight: '15px',
    textTransform: 'uppercase',
    fontWeight: '700',

    '&:hover': {
        borderColor: styles.colors.white
    }
});
const css_lang = css({
        width: '100%',
        height: '49px',
        backgroundColor: 'rgba(255,255,255, 0.5)',
        borderRadius: '50px',
        textAlign: 'center',
        top: '0px',
        position: 'absolute',
        //zIndex: '-1',
        paddingTop: '50px',
        //minHeight:'150px',
        transition: 'all 0.5s',
        overflow: 'hidden',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.8)',
            height: 'auto',
        }
    })
    const css_lang_item = css({
            width: '49px',
            height: '49px',
            borderRadius: '50px',
            textAlign:'center',
            padding: '15px',
            cursor: 'pointer',
            color: 'royalblue',
            '&:hover': {
                backgroundColor: 'rgba(255,255,255, 0.5)'
            }
        })

class ChangeLangButton extends React.Component {
    onChangeLang = (val) => {
        console.log(val)
        const { cookies } = this.props;
        const langCookieName = this.props.data.cookie_name;
        console.log('langCookieName=', langCookieName)
        if (langCookieName) {
            cookies.set(langCookieName, val, { path: '/', expires: new Date(2145906000000) });
            window.location.reload();
        }
    };

    render() {
        const { cookies } = this.props;
        const { cookie_name } = this.props.data;
        const site_lang = cookies.get(cookie_name) ? cookies.get(cookie_name) : 'en';
        const langMenuItems = langs.map((lang, key) => {
            return site_lang !==lang.val ? <li key={key} className={css_lang_item} onClick={this.onChangeLang.bind(this, lang.val)}>{lang.btn_text}</li> : null
        })
        return (
            <CookiesProvider>
                <div style={{position:'relative', width:'50px'}}>
                    <div className={`${css_style}`}>
                        {site_lang}
                    </div>
                    <ul className={css_lang}>
                        {langMenuItems}
                    </ul>
                </div>
            </CookiesProvider>
        )
    }
}

export default withCookies(ChangeLangButton);