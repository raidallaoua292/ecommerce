import axiosClient from "./axiosClient";

const addToCart = (payload: any) => axiosClient.post("/carts?populate=*", payload);

const deleteCartItem = (id:number) => axiosClient.delete(`/carts/${id}?populate=*`);

const userCartItems = (email?:string) => axiosClient.get(`/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`);
export default { 
    addToCart,
    userCartItems,
    deleteCartItem
};