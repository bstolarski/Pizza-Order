export default function AddToCartLocalStorageServices(itemToAdd) {
    let items = JSON.parse(window.localStorage.getItem('order'));
    let newItems = [...items, itemToAdd];
    window.localStorage.setItem('order', JSON.stringify(newItems));
    return newItems;
}

export function GetOrderFromLocalStorage(){
    return JSON.parse(window.localStorage.getItem('order'));
}