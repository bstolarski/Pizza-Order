import Order from "../model/Extra";

export default function AddToCartLocalStorageServices(data) {
    const order = data.map(el =>
        new Order(
            el.id,
            el.name,
            el.price
        )
    );
    window.localStorage.setItem('order', JSON.stringify(order));
}