import axiosClient from "./axiosClient";


const latestProducts = async () => {
  return  await axiosClient.get("/products?populate=*");
};

const productById = async (id: string) => {
    return await axiosClient.get(`/products/${id}?populate=*`);
}

const productByCategory = async (category: string) => {
  return await axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`);

}



export default { 
  latestProducts,
  productById,
  productByCategory
};