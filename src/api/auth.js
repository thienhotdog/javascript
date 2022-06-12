import instance from "./instance";

export const signup = (item) =>{
    const url = "/users";
    return instance.post(url,item)
}

export const signin = (item) =>{
    const url ="/signin"
    return instance.post(url,item)
}