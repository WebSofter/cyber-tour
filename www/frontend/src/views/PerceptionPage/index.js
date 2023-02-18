import React from "react";
import urls from "../../constants/urls";
import ContentBlocksWrapper from "../../components/ContentBlocksWrapper";
import HelpBlock from "../../components/HelpBlock";
import PageHeader from "../../components/PageHeader";
import Perception from "../../components/Perception";
import fetchQuery from "../../utils/fetch";

class PerceptionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {},
            perception: {},
            content_block: {},
            help_block: {},
        };
    }

    componentDidMount() {
        return fetchQuery.bind(this)({url: urls.perception});
    }

    render() {
        const { header, perception, content_block, help_block } = this.state;
        
        return (
            <React.Fragment>
                <PageHeader titleMod='_rainbow' data={header} />
                <Perception data={perception}/>
                <ContentBlocksWrapper data={content_block}/>
                <HelpBlock data={help_block}/>
            </React.Fragment>
        )
    }
}

export default PerceptionPage;
