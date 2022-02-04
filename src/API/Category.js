import URL from "./URL";
export const getAllCate = () => {
    const url = "/Category";
    return URL.get(url);
};
export const get = (id) => {
    const url = `/Category/${id}`;
    return URL.get(url);
};
export const add = (product) => {
    const url = "/Category";
    return URL.post(url, product);
};
export const remove = (id) => {
    const url = `/Category/${id}`;
    return URL.delete(url);
};
export const edit = (category) => {
    const url = `/Category/${category.id}`;
    return URL.put(url, category);
};