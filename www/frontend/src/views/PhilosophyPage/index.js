import React from "react";
import urls from "../../constants/urls";
import ContentBlocksWrapper from "../../components/ContentBlocksWrapper";
import Philosophy from "../../components/Philosophy";
import HelpBlock from "../../components/HelpBlock";
import PageHeader from "../../components/PageHeader";
import fetchQuery from "../../utils/fetch";

class PhilosophyPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {},
            philosophy: {},
            content_block: {},
            help_block: {},
        };
    }

    componentDidMount() {
        return fetchQuery.bind(this)({url: urls.philosophy});
    }

    render() {
        const { header, philosophy, content_block, help_block } = this.state;
        
        return (
            <React.Fragment>
                <PageHeader data={header} />
                <Philosophy data={philosophy}/>
                <ContentBlocksWrapper data={content_block}/>
                <HelpBlock data={help_block}/>
            </React.Fragment>
        )
    }
}

export default PhilosophyPage;
