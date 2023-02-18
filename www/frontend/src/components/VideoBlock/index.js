import React from "react";
import { css } from "emotion";
import YouTube from 'react-youtube';

const css_style = css({
    position: 'relative',
    display: 'block',
    width: '100%',
    
    '&__video-wrap': {
        position: 'relative',
        display: 'block',
        width: '100%',
        height: '590px',
        maxHeight: '50vh',
        
        'iframe': {
    
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center center',
        },
    },
});

class VideoBlock extends React.Component {
    constructor(props) {
        super(props);
        
        this.videoPlayer = null;
    }
    
    _onReady = (e) => {
        this.videoPlayer = e.target;
    
        this.toggleVideo();
    };
    
    toggleVideo = () => {
        const { play } = this.props;
    
        if (this.videoPlayer) {
            if (play) {
                this.videoPlayer.playVideo();
            } else {
                this.videoPlayer.pauseVideo();
            }
        }
    };
    
    componentDidUpdate(prevProps) {
        const { play } = this.props;
    
        if (prevProps.play !== play) this.toggleVideo();
    }
    
    render() {
        const { id, lang='en', player_vars } = this.props.data;
        
        const defaultOpts = {
            height: '100%',
            width: '100%',
        
            playerVars: {
                rel: 0,
                hl: lang
            }
        };
    
        if (player_vars) defaultOpts.playerVars =  {
            ...defaultOpts.playerVars,
            ...player_vars
        };
    
    
        return (
            <div className={`${css_style}`}>
                <YouTube
                    containerClassName={`${css_style}__video-wrap`}
                    className={`${css_style}__video`}
                    videoId={id}
                    opts={defaultOpts}
                    onReady={this._onReady}
                />
            </div>
        )
    }
}

export default VideoBlock;
