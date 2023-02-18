import React from "react";
import urls from "../../constants/urls";

import PageHeader from "../../components/PageHeader";
import Contacts from "../../components/Contacts";
import ContactUs from "../../components/ContactUs";
import MapWrap from "../../components/MapWrap";
import fetchQuery from "../../utils/fetch";

class ContactsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: {},
            contacts: {},
            contact_us: {},
            map: {},
        };
    }

    componentDidMount() {
        return fetchQuery.bind(this)({url: urls.contacts});
    }

    render() {
        const { header, contacts, contact_us, map } = this.state;
        
        return (
            <React.Fragment>
                <PageHeader data={header} />
                <Contacts data={contacts} />
                <ContactUs data={contact_us} />
                <MapWrap data={map} />
            </React.Fragment>
        )
    }
}

export default ContactsPage;


