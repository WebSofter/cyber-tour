import React from "react";
import urls from "../../constants/urls";
import Banner from "../../components/Banner";
import ContentBlocksWrapper from "../../components/ContentBlocksWrapper";
import HelpBlock from "../../components/HelpBlock";
import fetchQuery from "../../utils/fetch";

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            banner: {},
            content_block: {},
            help_block: {},
        };
    }

    componentDidMount() {
        return fetchQuery.bind(this)({url: urls.homepage});
    }

    render() {
        const { banner, content_block, help_block } = this.state;
        
        return (
            <React.Fragment>
                <Banner data={banner}/>
                <ContentBlocksWrapper data={content_block}/>
                <HelpBlock data={help_block}/>
            </React.Fragment>
        )
    }
}

export default HomePage;


