import { ADD_CART } from "@/graphql/cart";
import { Product } from "@/graphql/products";
import { graphqlFetcher } from "@/queryClient";
import { useMutation } from "@tanstack/react-query";
// import { cartItemSelector } from "@/recoils/cart";
import { Link } from "react-router-dom";
// import { useRecoilState } from "recoil";
export default function ProductItem({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: Product) {
  // 리코일 삭제
  // const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  // const addToCart = () => setCartAmount((prev) => (prev || 0) + 1);
  const { mutate: addCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, { id })
  );
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={imageUrl} />
        <span className="product-item__price">{price}</span>
      </Link>
      <button className="product-item__add-cart" onClick={() => addCart(id)}>
        담기
      </button>
      {/* <span>{data[id].amount || 0}</span> */}
    </li>
  );
}
