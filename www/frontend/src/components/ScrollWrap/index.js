import React from "react";
import styles from "../../constants/styles";
import { Scrollbar } from 'react-scrollbars-custom';

class ScrollWrap extends React.Component {
    render() {
        return (
            <Scrollbar
                wrapperProps={{
                    renderer: props => {
                        const { elementRef, style, ...restProps } = props;
                        const stylesObj = {
                            ...style,
                            right: '10px'
                        };
                        
                        return <div style={stylesObj} {...restProps} ref={elementRef} />;
                    }
                }}

                contentProps={{
                    renderer: props => {
                        const { elementRef, style, ...restProps } = props;
                        const stylesObj = {
                            ...style,
                            height: '100%'
                        };
                        
                        return <div style={stylesObj} {...restProps} ref={elementRef} className="Content" />;
                    }
                }}
                
                scrollerProps={{
                    renderer: props => {
                        const { elementRef, style, ...restProps } = props;
                        const padding = style.paddingRight;
                        const margin = style.marginRight;

                        let stylesObj = {
                            ...style
                        };

                        if ((padding && margin) && (padding < Math.abs(margin)))  stylesObj.marginRight = margin + 1;
                        
                        return <div  style={stylesObj} {...restProps} ref={elementRef} className="MyAwesomeScrollbarsScroller" />;
                    }
                }}

                trackYProps={{
                    renderer: props => {
                        const { elementRef, style, ...restProps } = props;
                        
                        
                        const stylesObj = {
                            ...style,
                            width: '2px',
                            height: '100%',
                            top: '0'
                        };
                        
                        return <div style={stylesObj} {...restProps} ref={elementRef} />;
                    }
                }}

                thumbYProps={{
                    renderer: props => {
                        const { elementRef, style, ...restProps } = props;
                        const stylesObj = {
                            ...style,
                            background: styles.colors.aqua
                        };
                        
                        return <div  style={stylesObj} {...restProps} ref={elementRef} />;
                    }
                }}
            >
                {this.props.children}
            </Scrollbar>
        )
    }
}

export default ScrollWrap;