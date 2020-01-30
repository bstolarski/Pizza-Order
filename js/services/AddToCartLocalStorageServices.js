export default function AddToCartLocalStorageServices(itemToAdd) {
    let items = JSON.parse(window.localStorage.getItem('order'));
    let newItems = [...items, itemToAdd];
    window.localStorage.setItem('order', JSON.stringify(newItems));
    return newItems;
}

export function GetOrderFromLocalStorage() {
    return JSON.parse(window.localStorage.getItem('order'));
}

export class LocalStorageSave {
    constructor(name, price, size) {
        this.name = name;
        this.price = price;
        this.size = size;
    }
}