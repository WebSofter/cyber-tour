import React from "react";
import urls from "../../constants/urls";
import ContentBlocksWrapper from "../../components/ContentBlocksWrapper";
import HelpBlock from "../../components/HelpBlock";
import PageHeader from "../../components/PageHeader";
import Configurator from "../../components/Configurator";
import Offers from "../../components/Offers";
import fetchQuery from "../../utils/fetch";

class RealizationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {},
            content_block: {},
            configurator: {},
            offers: {},
            help_block: {},
        };
    }

    componentDidMount() {
        return fetchQuery.bind(this)({url: urls.realization});
    }

    render() {
        const { header, content_block, configurator, offers, help_block } = this.state;
        console.log('+++++++++++++++++++++++++++', help_block)
        return (
            <React.Fragment>
                <PageHeader bubble={true} data={header} />
                <ContentBlocksWrapper data={content_block}/>
                <Configurator data={configurator}/>
                <Offers data={offers}/>
                <HelpBlock data={help_block}/>
            </React.Fragment>
        )
    }
}

export default RealizationPage;
