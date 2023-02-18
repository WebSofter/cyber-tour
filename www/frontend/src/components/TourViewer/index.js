import React from "react";
import { css } from "emotion";
import styles from "../../constants/styles";

const css_style = css({
    display: 'block',
    ...styles.absolute(),
    width: '100%',
    height: '100%',
    
    '&__iframe': {
        ...styles.absolute(),
        width: '100%',
        height: '100%'
    }
});

class TourViewer extends React.Component {
    render() {
        const { link } = this.props.data;
        
        return (
            <div className={`${css_style}`}>
                <iframe title='360_tour' src={link} className={`${css_style}__iframe`} />
            </div>
        )
    }
}

export default TourViewer

