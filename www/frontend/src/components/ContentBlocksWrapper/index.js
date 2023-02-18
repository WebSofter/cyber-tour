import React from "react";
import { css } from "emotion";
import ContentBlock from '../../components/ContentBlock';

const css_style = css({

});

class ContentBlocksWrapper extends React.Component {
    render() {
        const { data } = this.props;

        return (
            <section className={`${css_style} section`}>
                {Object.getOwnPropertyNames(data).length &&
                    data.map((item, key) => {
                        return (
                            <ContentBlock key={key} data={item} />
                        )
                    })
                }
            </section>
        )
    }
}

export default ContentBlocksWrapper;
