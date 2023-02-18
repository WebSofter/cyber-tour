import React from "react";
import urls from "../../constants/urls";
import ContentBlocksWrapper from "../../components/ContentBlocksWrapper";
import HelpBlock from "../../components/HelpBlock";
import PageHeader from "../../components/PageHeader";
import AdvantagesSlider from "../../components/AdvantagesSlider";
import Requirements from "../../components/Requirements";
import fetchQuery from "../../utils/fetch";

class PartnershipPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {},
            content_block1: {},
            advantages: {},
            content_block2: {},
            requirements: {},
            help_block: {},
        };
    }

    componentDidMount() {
        return fetchQuery.bind(this)({url: urls.partnership});
    }

    render() {
        const { header, content_block1, advantages, content_block2, requirements, help_block } = this.state;
        
        return (
            <React.Fragment>
                <PageHeader data={header} />
                <ContentBlocksWrapper data={content_block1}/>
                <AdvantagesSlider data={advantages}/>
                <ContentBlocksWrapper data={content_block2}/>
                <Requirements data={requirements}/>
                <HelpBlock data={help_block}/>
            </React.Fragment>
        )
    }
}

export default PartnershipPage;
