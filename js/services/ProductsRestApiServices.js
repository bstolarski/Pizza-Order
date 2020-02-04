import Product from "../model/Product";

export default class ProductsRestApiService {
    static restApiUrl = 'https://my-json-server.typicode.com/bstolarski/Pizza-Order';

    static getProducts(callback, errCallback) {
        fetch(`${this.restApiUrl}/products`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error('Connection error');
                }
            })
            .then(products => {
                const data = products.map(product =>
                    new Product(
                        product.id,
                        product.name,
                        product.price
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