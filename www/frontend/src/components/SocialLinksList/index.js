import React from "react";
import { css } from "emotion";
import SocialLink from "../../components/SocialLink";

const css_style = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

class SocialLinksList extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <div className={`${css_style}`}>
                {
                    data.map((item, key) => {
                        return (
                            <SocialLink key={key} data={item} />
                        )
                    })
                }
            </div>
        )
    }
}

export default SocialLinksList;
