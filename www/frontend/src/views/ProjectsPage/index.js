import React from "react";
import urls from "../../constants/urls";

import PageHeader from "../../components/PageHeader";
import HelpBlock from "../../components/HelpBlock";
import ContentBlocksWrapper from "../../components/ContentBlocksWrapper";
import ProjectsSlider from "../../components/ProjectsSlider";
import fetchQuery from "../../utils/fetch";

class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {},
            projects: {},
            content_block: {},
            help_block: {},
        };
    }

    componentDidMount() {
        return fetchQuery.bind(this)({url: urls.projects});
    }

    render() {
        const { header, content_block, help_block, projects } = this.state;
        
        return (
            <React.Fragment>
                <PageHeader data={header} />
                <ProjectsSlider data={projects}/>
                <ContentBlocksWrapper data={content_block}/>
                <HelpBlock data={help_block}/>
            </React.Fragment>
        )
    }
}

export default ProjectsPage;


