import React, { Component } from "react";
import { css } from "emotion";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import validate from "../../utils/validate-yup";
import collect_schema from "../../utils/collect-schema";
import Button from '../../components/Button';
import styles from "../../constants/styles";
import fonts from "../../constants/fonts";

import {
    InputStyle
} from "../fields";

const form_style = css({
    display: 'block',
    position: 'relative',
    width: '100%',
    
    '&__container': {
        display: 'block',
        position: 'relative',
        width: '100%',
    },
    
    '&__title-wrap': {
        display: 'block',
        position: 'relative',
        textAlign: 'center',
        marginBottom: '40px'
    },
    
    '&__title': {
        display: 'block',
        position: 'relative',
        ...fonts.p1
    },
    
    '&__subtitle': {
        display: 'block',
        position: 'relative',
        ...fonts.p3,
        maxWidth: '580px',
        margin: '0 auto',
    },
    
    '&__title + &__subtitle': {
        marginTop: '25px'
    },
    
    '&__list': {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: '100%'
    },

    '&__item': {
        width: 'calc(50% - 10px)',
        marginBottom: '20px',

        '&:last-of-type': {
            marginBottom: '0',
        },

        '&._textarea': {
            width: '100%'
        },
        
        '&._hidden': {
            display: 'none'
        }
    },

    '&__button-wrap': {
        display: 'block',
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        marginTop: '50px'
    },
    
    '&__conf': {
        fontSize: '12px',
        lineHeight: '15px',
        color: styles.colors.white,
        margin: '20px auto 0',
        textAlign: 'center',
        
        'a': {
            textDecoration: 'underline',
            color: styles.colors.white,
            
            '&:hover': {
                textDecoration: 'none',
            }
        }
    },
    
    '&._overlay-button &': {
        '&__item:last-of-type': {
            'label': {
                paddingBottom: '90px'
            }
        },

        '&__button-wrap': {
            ...styles.absolute('auto','20px','20px','auto'),
            width: 'auto',
        },
    },
    
    [styles.bp(700)]: {
        '&__item': {
            width: '100%',
            marginBottom: '15px',
        },
    
        '&._overlay-button &': {
            '&__item:last-of-type': {
                'label': {
                    paddingBottom: '10px'
                }
            },
        
            '&__button-wrap': {
                position: 'relative',
                right: '0',
                bottom: '0',
                marginTop: '20px',
                width: '100%',
                maxWidth: '260px'
            },
        },
    }
});

function collectValues(fields) {
    let obj = {};

    for (let i = 0; i < fields.length; i++) {
        obj[fields[i].name] = fields[i].value || '';
    }

    return obj;
}

class FormTemplate extends Component {
    render() {
        let { handleSubmit, mod='', fields, title, subtitle, button, conf } = this.props,
            elements = function(fields, initialValues) {
                let arr = [];

                for (let i = 0; i < fields.length; i++) {
                    const
                        item = fields[i],
                        requiredMod = item.required ? '_required' : '',
                        typeMod = item.type ? `_${item.type}` : '';

                    arr.push(
                        <div className={`${form_style}__item ${requiredMod} ${typeMod}`} key={i}>
                            <InputStyle typeMod={typeMod} data={item} formMod={mod}/>
                        </div>
                    )
                }

                return arr;
            };

        let add_props = {};

        if (this.props.id) {
            add_props.id = this.props.id;
        }

        return (
            <Form {...add_props} className={`${form_style} ${mod}`} onSubmit={handleSubmit}>
                {(title || subtitle) &&
                    <div className={`${form_style}__title-wrap`}>
                        {title &&
                            <h3 className={`${form_style}__title`}>
                                {require('html-react-parser')(title)}
                            </h3>
                        }
                        {subtitle &&
                            <span className={`${form_style}__subtitle`}>
                                {require('html-react-parser')(subtitle)}
                            </span>
                        }
                    </div>
                }
                
                <div className={`${form_style}__container`}>
                    <div className={`${form_style}__list`}>
                        {elements(fields, this.props.initialValues)}
                    </div>
    
                    {button &&
                        <div className={`${form_style}__button-wrap`}>
                            <Button data={button}/>
                        </div>
                    }
                </div>
                
                {conf &&
                    <div className={`${form_style}__conf`}>
                        {require('html-react-parser')(conf)}
                    </div>
                }
            </Form>
        );
    }
}


class FormDefault extends React.Component {
    render() {
        const {fields, button, title, subtitle, conf, mod='', id='', initValues, handleSubmit, mainActions, schema} = this.props;

        const getYup = () => {
                let schema = {};
                return Yup.object(collect_schema(schema, fields));
            };

        return (
            <Formik
                enableReinitialize={true}
                initialValues={
                    initValues
                        ? {...collectValues(fields), ...initValues}
                        : collectValues(fields)
                }
                validate={schema ? validate(schema) : validate(getYup)}
                onSubmit={(values, actions) => {
                    handleSubmit(values, actions);
                }}
                render={props => (
                    <FormTemplate
                        mainActions={mainActions}
                        fields={fields}
                        mod={mod}
                        id={id}
                        button={button}
                        conf={conf}
                        title={title}
                        subtitle={subtitle}
                        {...props}
                    />
                )}
            />
        );
    }
}

export default FormDefault;
