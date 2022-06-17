import instance from "./instance";

export const getAll = () => {
    const url = "/books";
    return instance.get(url)
}

export const get = (id) => {
    const url = `/books/${id}`;
    return instance.get(url);
};

export const edit = (item) => {
    console.log(item)
    const url = `/books/${item.id}`
    return instance.patch(url,item)
}

export const filterBooks = (value) => {
    const url = `/books?name_like=${value}`;
    return instance.get(url);
}

export const sortBook  = (min,max) =>{
    const url = `/books?current_seller.price_gte=${min}&current_seller.price_lte=${max}`
    return instance.get(url)
}

export const remove = (id) =>{
    const url = `/books/${id}`
    return instance.delete(url)
}