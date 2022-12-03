import { Product } from "@/graphql/products";
import { Link } from "react-router-dom";
export default function ProductItem({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: Product) {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={imageUrl} />
        <span className="product-item__price">{price}</span>
      </Link>
    </li>
  );
}
