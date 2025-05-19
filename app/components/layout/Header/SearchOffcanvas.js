// components/Header/SearchOffcanvas.js
export default function SearchOffcanvas() {
	return (
		<div
			className="offcanvas offcanvas-top"
			tabIndex="-1"
			id="searchDrawer"
			aria-labelledby="searchDrawerLabel"
		>
			<div className="offcanvas-header">
				<h5 id="searchDrawerLabel" className="offcanvas-title">
					Search
				</h5>
				<button
					className="btn-close"
					data-bs-dismiss="offcanvas"
					aria-label="Close"
				></button>
			</div>
			<div className="offcanvas-body">
				<input
					type="text"
					className="form-control"
					placeholder="Search products..."
				/>
			</div>
		</div>
	);
}
