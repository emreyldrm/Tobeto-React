import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { addToCart } from '../store/actions/cartAction';
import { addToCart, removeFromCart } from "../cartSlice";

export default function ProductCard(props) {


	const deleteProduct = async () => {
		try {
			const response = await axios.delete("https://dummyjson.com/products/" + props.product.id)
			console.log(response.data)
			alert("Veri başarıyla silindi.");

		} catch (e) {
			console.error("Error", e)
		}
	}
	// const addProductToCart = () => {
	// 	dispatch(addToCart(props.product));
	// }
	//const value = useSelector(selecTick);
	//const dispatch = useDispatch();

	const dispatch = useDispatch();
	const addProductToCart = () => {
		dispatch(addToCart(props.product));
	};


	return (
		<div className="card">
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<Link
					to={"/product-detail/" + props.product.id}
					className="btn btn-primary"
				>
					Details
				</Link>
				<button onClick={addProductToCart} className='btn btn-primary'>Sepete Ekle</button>
				<button onClick={deleteProduct} className="btn btn-danger">Sil</button>
				{/* <button onClick={addProductToCart} className='btn btn-primary'>Sepete Ekle</button>
				<button onClick={()=>{deleteProduct()}} className="btn btn-danger">Sil</button> */}
			</div>
		</div>
	);
}
