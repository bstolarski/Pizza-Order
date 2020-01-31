import CompleteOrder from "../model/CompleteOrder";

export default function saveOrderRestApiServices(order, state) {
    const data = new CompleteOrder(order, state);
    fetch('http://localhost:3000/orders', {
        method: "POST",
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