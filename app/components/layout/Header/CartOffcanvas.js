// components/Header/CartOffcanvas.js
export default function CartOffcanvas() {
	return (
		<div
			className="offcanvas offcanvas-end"
			tabIndex="-1"
			id="cartDrawer"
			aria-labelledby="cartDrawerLabel"
		>
			<div className="offcanvas-header">
				<h5 id="cartDrawerLabel" className="offcanvas-title">
					Your Cart
				</h5>
				<button
					className="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div className="offcanvas-body">
				<p>Your cart items go here...</p>
			</div>
		</div>
	);
}
