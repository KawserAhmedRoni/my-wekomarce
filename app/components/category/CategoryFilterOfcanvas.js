// components/Category/CategoryFilterOfcanvas.js
export default function CategoryFilterOfcanvas() {
	return (
		<div
			className="offcanvas offcanvas-start"
			tabIndex="-1"
			id="filterDrawer"
			aria-labelledby="filterDrawerLabel"
		>
			<div className="offcanvas-header">
				<h5 id="filterDrawerLabel" className="offcanvas-title">
					Category Filter
				</h5>
				<button
					className="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div className="offcanvas-body">
				<p>Filter for you Products...</p>
			</div>
		</div>
	);
}
