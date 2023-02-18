import React from "react";
import FormDefault from "../../components/FormDefault";
import urls from "../../constants/urls";
import {setPopupData} from "../../actions/SetPopupData";
import {connect} from "react-redux";
import fetchQuery from "../../utils/fetch";

class FormContactUs extends React.Component {
    handleSubmit = (data, form) => {
        const { extraFormData } = this.props;
        let dataObj = {
            page: window.location.href,
            formData: data
        };
        
        if (extraFormData) dataObj = {...dataObj, ...extraFormData};
        console.log('FormContactUs', dataObj);

        fetchQuery.bind(this)({
            url: urls.form_handler,
            method: 'POST',
            body: JSON.stringify(dataObj),
            customSuccess: this.showTy.bind(this, form)
        });
    };

    showTy = (form) => {
        const { ty_popup_data, setPopupData } = this.props;
        
        setPopupData({
            show: false,
        });
    
        setTimeout(() => {
            form.resetForm();
        
            if (ty_popup_data) {
                setPopupData({
                    show: true,
                    data: {...ty_popup_data}
                });
            }
        }, 700);
    };

    render() {
        return (
            <FormDefault {...this.props} handleSubmit={this.handleSubmit}/>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setPopupData: obj => dispatch(setPopupData(obj))
    }
};

export default connect(null, mapDispatchToProps)(FormContactUs);

