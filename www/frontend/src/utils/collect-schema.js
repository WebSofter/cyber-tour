import * as Yup from "yup";

export default function collect_shema(schema, fields) {
    for (let i = 0; i < fields.length; i++) {
        let item = fields[i],
            validation = item.validation,
            counter = item.counter ? item.counter : "";

        if (validation) {
            let prop = validation.properties;

            let values = function(chains) {
                let meth = Yup[prop.type]();

                for (var i = 0; i < chains.length; i++) {
                    if (chains[i].number) {
                        meth = meth[chains[i].type](
                            chains[i].number,
                            chains[i].error
                        );
                    } else if (
                        chains[i].type === "oneOf" ||
                        chains[i].type === "notOneOf"
                    ) {
                        meth = meth[chains[i].type](
                            [Yup.ref(chains[i].ref), null],
                            chains[i].error
                        );
                    } else if (chains[i].regExp) {
                        meth = meth[chains[i].type](
                            new RegExp(chains[i].regExp,'g'),
                            chains[i].error
                        );
                    } else {
                        meth = meth[chains[i].type](chains[i].error);
                    }
                }

                return meth;
            };

            if (item.type === "select") {
                schema[item.name] = Yup[validation.type]({
                    value: values(prop.chains)
                });
            } else {
                schema[`${item.name}${counter}`] = values(prop.chains);
            }
        }
    }

    return schema;
}
