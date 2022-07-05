
import * as yup from 'yup';

export async function Validate(schema, data) {
    let error = ''
    await schema.validate(data).catch(function (err) {
        error = {
            path: err.path,
            message: (err.errors || []).map((e => e[0].toUpperCase() + e.slice(1))).join(', ')
        }
    });
    return error
}

