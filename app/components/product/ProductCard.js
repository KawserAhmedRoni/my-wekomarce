export default function ProductCard() {
	return (
		<div className="product__card">
			<a href="#0" className="image">
				<img src="/images/product/1.jpg" alt="Image" />
			</a>
			<div className="content">
				<h4 className="title">
					<a href="#0">Primium Shirts</a>
				</h4>
				<span className="price">$750</span>
			</div>
		</div>
	);
}
