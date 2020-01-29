import Product from "../model/Extra";

export default class ExtrasRestApiService {
    static restApiUrl = 'http://localhost:3000';

    static getExtras(callback, errCallback) {
        fetch(`${this.restApiUrl}/extras`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error('Connection error');
                }
            })
            .then(extras => {
                const data = extras.map(extra =>
                    new Product(
                        extra.id,
                        extra.name,
                        extra.price
                    )
                );

                if (typeof callback === 'function') {
                    callback(data);
                }
            })
            .catch(err => {
                if (typeof errCallback === 'function') {
                    errCallback(err);
                }
            })
    }
}