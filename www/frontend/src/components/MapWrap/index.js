import React, { Component } from "react";
import { css } from "emotion";
import Map from "../../components/Map";
import styles from "../../constants/styles";

const css_style = css({
    display: 'block',
    position: 'relative',
    height: '1090px',
    width: '100%',
    margin: '-200px 0',
    zIndex: '0',

    '&__container': {
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%',
    },
    
    '&::before': {
        content: '""',
        ...styles.absolute(),
        display: 'block',
        width: '100%',
        height: '100%',
        background: '#1e0043',
        opacity: '0.15',
        zIndex: '2',
        pointerEvents: 'none'
    },
    
    [styles.bpm(1920)]: {
        height: 'auto',
        ...styles.rh(0.5676),
    },
    
    [styles.bp(1500)]: {
        height: '950px',
        marginBottom: '-150px'
    },
    
    [styles.bp(1300)]: {
        height: '750px',
        marginBottom: '-100px',
    },
    
    [styles.bp(900)]: {
    
    },
    
    [styles.bp(700)]: {
        marginBottom: '-50px'
    },
});

export class MapWrap extends Component {
    render() {
        const { data } = this.props;

        return (
            <section className={`${css_style} section`}>
                {data && data.api_key && data.coords &&
                    <div className={`${css_style}__container`} >
                        <Map data={data}/>
                    </div>
                }
            </section>
        );
    }
}

export default MapWrap;