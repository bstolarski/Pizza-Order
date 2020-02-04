import CompleteOrder from "../model/CompleteOrder";

export default function saveOrderRestApiServices(order, state) {
    const data = new CompleteOrder(order, state);
    fetch('https://my-json-server.typicode.com/bstolarski/Pizza-Order/orders', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            console.log("Dodałem zamówienie:");
            console.log(res);
            //if type ...
            // callback(res);
        })
}