import Link from "next/link";

export default function ProductCard() {
	return (
		<div className="product__card">
			<Link href="/shop/shop-details" className="image">
				<img src="/images/product/1.jpg" alt="Image" />
			</Link>
			<div className="content">
				<h4 className="title">
					<Link href="/shop/shop-details">Primium Shirts</Link>
				</h4>
				<span className="price">$750</span>
			</div>
		</div>
	);
}
