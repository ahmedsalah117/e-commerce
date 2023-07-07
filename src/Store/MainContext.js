import { createContext, useState } from "react";
import productImg from "./../Utils/images/Rectangle 150.png";

export const mainContext = createContext("");

const productExample = {
  id: Math.random() * 1000,
  name: "Name of product",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, praesentium.",
  quantity: 1,
  color: "black",
  size: "2*3 m",
  img: productImg,
  price: 3000,
};
const products = [
  productExample,
  productExample,
  productExample,
  productExample,
  productExample,
  productExample,
  productExample,
  productExample,
];
export default function MainContextProvider(props) {
  const [productData, setProductData] = useState({
    name: "Name of Product",
    description: "addToCartHandler",
    quantity: 1,
    color: "black",
    size: "2*3 m",
    img: productImg,
    price: 3000,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [openCart, setOpenCart] = useState(false);
  return (
    <mainContext.Provider
      value={{
        productData,
        setProductData,
        products,
        isLoading,
        setIsLoading,
        openCart,
        setOpenCart,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
}
