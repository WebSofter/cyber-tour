import React from "react";
import { InView } from 'react-intersection-observer';
import Parallax from "../../plugins/parallax/parallax";
import MediaQuery from "react-responsive/src/Component";
import styles from "../../constants/styles";

class ParallaxWrap extends React.Component {
    constructor(props) {
        super(props);
        
        this.parallaxWrap = React.createRef();
        this.scene = null;

        this.isInit = false;
    }
    
    componentDidMount() {
    }
    
    onChangeWindowEntering = (inView) => {
        if (inView) {
            if (!this.isInit) {
                this.isInit = true;
                this.initParallax();
            }
        }

        if (this.scene) {
            if (inView) {
                this.scene.enable();
            } else {
                this.scene.disable();
            }
        }
    };
    
    initParallax = () => {
        const wrap = this.parallaxWrap.current;
        
        if (wrap && wrap.node && !this.scene) {
            this.scene = new Parallax(wrap.node, {
                relativeInput: false,
                invertX:false,
                invertY:false,
                scalarX: 5,
                scalarY: 5,
                selector: '.js-layer'
            });
        }
    };
    
    switchWrap = () => {
        const { children, className } = this.props;

        return (
            <MediaQuery minWidth={`${styles.breakpoints[900]+1}px`}>
                {(matches) =>
                    {
                        if (matches) {
                            return (
                                <InView as="div" ref={this.parallaxWrap} className={className} onChange={this.onChangeWindowEntering}>
                                    {children}
                                </InView>
                            )
                        } else {
                            this.isInit = false;
                            this.scene = null;
                            
                            return (
                                <div className={className}>
                                    {children}
                                </div>
                            )
                        }
                    }
                }
            </MediaQuery>
        )
    };
    
    render() {
        return (
            this.switchWrap()
        )
    }
}

export default ParallaxWrap;
