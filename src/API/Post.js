import URL from "./URL";
export const getAll = () => {
    const url = "/Post";
    return URL.get(url);
};
export const get = (id) => {
    const url = `/Post/${id}`;
    return URL.get(url);
};
export const add = (post) => {
    const url = "/Post";
    return URL.post(url, post);
};
export const remove = (id) => {
    const url = `/Post/${id}`;
    return URL.delete(url);
};
export const edit = (post) => {
    const url = `/Post/${post.id}`;
    return URL.put(url, post);
};