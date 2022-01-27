import URL from "./URL";
export const getAll = () => {
    const url = "/product";
    return URL.get(url);
};
export const get = (id) => {
    const url = `/product/${id}`;
    return URL.get(url);
};
export const add = (product) => {
    const url = "/product";
    return URL.post(url, product);
};
export const remove = (id) => {
    const url = `/product/${id}`;
    return URL.delete(url);
};