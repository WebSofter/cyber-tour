import React, {Component} from "react";
import {css} from "emotion";
import {Field} from "formik";
import styles from "../../../constants/styles";
import fonts from "../../../constants/fonts";

const input_style = css({
    position: "relative",
    width: "100%",
    background: 'rgba(1, 220, 234, 0.09)',

    '&__input-wrap': {
        display: "block",
        position: 'relative',
        padding: "40px 20px 10px",
        border: `2px solid ${styles.colors.aqua}`,
        height: '94px',
        width: "100%",

        '&._textarea': {
            height: '236px',
            overflow: 'hidden',

            'textarea': {
                width: 'calc(100% + 100px)',
                paddingRight: '100px',
            }
        },

        '&._error': {
            border: `2px solid ${styles.colors.orange}`,
        },
    },

    "&__input": {
        display: "block",
        backgroundColor: "transparent",
        boxSizing: 'border-box',
        fontFamily: 'montserrat',
        resize: 'none',
        ...fonts.p2,
        color: styles.colors.white,
        width: "100%",
        height: "100%",
    },

    '&__label-wrap': {
        marginTop: '10px'
    },

    "&__label": {
        ...styles.absolute('10px','auto','auto','20px'),
        display: "block",
        ...fonts.p7,
        color: styles.colors.white,
        pointerEvents: 'none'
    },
    
    [styles.bp(1500)]: {
        '&__input-wrap': {
            padding: "28px 20px 7px",
            height: '70px',
        },
    
        "&__label": {
            top: '9px'
        },
    },
    
    [styles.bp(1300)]: {
        '&__input-wrap': {
            padding: "26px 15px 7px",
        },
    
        "&__label": {
            left: '15px'
        },
    },
    
    [styles.bp(900)]: {
        '&__input-wrap': {
            padding: "22px 10px 7px",
            height: '70px',
        
            '&._textarea': {
                height: '236px',
            },
        },
    
        "&__label": {
            left: '10px',
            top: '7px'
        },
    },
    
    [styles.bp(700)]: {
        '&__input-wrap': {
            padding: "20px 10px 5px",
            height: '56px',
         
            '&._textarea': {
                height: '197px',
            },
        },
        
        "&__label": {
            top: '5px'
        },
    }
});

class InputStyle extends Component {
    renderItem = (field, form) => {
        const
            {data, typeMod=''} = this.props,
            {label, type, placeholder} = data,
            isTouchEnd = form.touched[field.name],
            isErrorExist = isTouchEnd && form.errors[field.name],
            isValid = isTouchEnd && field.value && !isErrorExist,
            inputMod = isErrorExist ? '_error' : (isValid ? '_valid' : ''),
            inputType = type ? type : "text";

        return (
            <React.Fragment>
                <label className={`${input_style}__input-wrap ${inputMod} ${typeMod}`}>
                    {inputType === 'textarea'
                        ?
                        <textarea
                            {...field}
                            className={`${input_style}__input ${inputMod}`}
                            placeholder={placeholder}
                        />
                        :
                        <input
                            {...field}
                            type={inputType}
                            className={`${input_style}__input ${inputMod}`}
                            placeholder={placeholder}
                        />
                    }
                </label>

                <span className={`${input_style}__label`}>
                    {require("html-react-parser")(isErrorExist ? form.errors[field.name] : label)}
                </span>
            </React.Fragment>
        )
    };

    render() {
        const {counter, name} = this.props.data,
            input_counter = counter ? counter : "";

        return (
            <div className={input_style}>
                <Field name={`${name}${input_counter}`}>
                    {({field, form}) => (
                        this.renderItem(field, form)
                    )}
                </Field>
            </div>
        );
    }
}

export default InputStyle;
