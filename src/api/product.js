import instance from "./instance";

export const getAll = () =>{
    const url = "/products";
    return instance.get(url)
}

export const get = (id) => {
    const url = `/product/${id}`;
    return instance.get(url);
};