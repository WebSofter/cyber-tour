import React from "react";
import urls from "../../constants/urls";
import ProjectBgSlider from "../../components/ProjectBgSlider";
import ProjectDescription from "../../components/ProjectDescription";
import HelpBlock from "../../components/HelpBlock";
import PageHeader from "../../components/PageHeader";
import TourBubble from "../../components/TourBubble";
import ValuesSlider from "../../components/ValuesSlider";
import CompareImages from "../../components/CompareImages";
import fetchQuery from "../../utils/fetch";

class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {},
            bg_slider: {},
            description: {},
            tour_bubble: {},
            values_slider: {},
            compare: {},
            help_block: {},
        };
    }

    componentDidMount() {
        const { match } = this.props;
    
        return fetchQuery.bind(this)({
            url: urls.project,
            method: 'POST',
            body: JSON.stringify({
                "id": match.params.id
            })
        });
    }

    render() {
        const { header, bg_slider, description, tour_bubble, help_block, compare, values_slider } = this.state;
        
        return (
            <React.Fragment>
                <PageHeader mod='_small _clear-b' data={header} />
                <ProjectBgSlider data={bg_slider}/>
                <ProjectDescription data={description}/>
                <TourBubble data={tour_bubble}/>
                <ValuesSlider data={values_slider}/>
                <CompareImages data={compare}/>
                <HelpBlock data={help_block}/>
            </React.Fragment>
        )
    }
}

export default ProjectPage;


