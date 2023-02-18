import * as Yup from "yup";

export default function getYupValidationSchema(values) {
    return Yup.object({
        first_name: Yup.string().required("First name is required!"),
        last_name: Yup.string().required("Last name is required!"),
        city: Yup.string().required("City is required!"),
        address: Yup.string().required("Address is required!"),
        zip_code: Yup.string().matches(
            new RegExp("([^_]+$)"),
            "Zip Code is required"
        ),
        phone: Yup.string().required("Phone is required!"),
        country: Yup.object({
            value: Yup.string().required("required")
        }),
        state: Yup.object({
            value: Yup.string().required("required")
        })
    });
}
