import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { AuthContext } from '../contexts/AuthContext';
export default function Navbar() {

	const cartState = useSelector(state => state.cart);
	console.log(cartState)

	const authContext = useContext(AuthContext);
	console.log(authContext);
	
	return (
		<nav
			className="navbar bg-dark border-bottom border-body navbar-expand-lg bg-body-tertiary"
			data-bs-theme="dark"
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Ana Sayfa
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Hakkında
							</a>
						</li>
						<li className="nav-item">
							
						</li>
					</ul>
					<form className="d-flex" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}