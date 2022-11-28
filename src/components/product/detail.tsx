import { Product } from "@/types";

export default function ProductDetail({
  category,
  title,
  description,
  image,
  price,
  rating,
}: Product) {
  return (
    <div className="product-detail">
      <p className="product-detail__category">{category}</p>
      <p className="product-detail__title">{title}</p>
      <p className="product-detail__description">{description}</p>
      <img className="product-detail__image" src={image} />
      <span className="product-detail__price">{price}</span>
      <span className="product-detail__rating">
        {rating.rate} {rating.count}
      </span>
    </div>
  );
}
