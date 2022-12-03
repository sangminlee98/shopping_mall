import { Product } from "@/graphql/products";

export default function ProductDetail({
  title,
  description,
  imageUrl,
  price,
}: Product) {
  return (
    <div className="product-detail">
      <p className="product-detail__title">{title}</p>
      <p className="product-detail__description">{description}</p>
      <img className="product-detail__image" src={imageUrl} />
      <span className="product-detail__price">{price}</span>
    </div>
  );
}
