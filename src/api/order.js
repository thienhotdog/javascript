import instance from "./instance"

export const order = (item) =>{
    const url = "/order"
    return instance.post(url,item)
}

export const getAll = () =>{
    const url = "/order"
    return instance.get(url)
}

export const get = (id) => {
    const url = `/order/${id}`;
    return instance.get(url);
};