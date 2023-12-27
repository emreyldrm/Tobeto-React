import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';


export default function ProductCard(props) {

	const deleteProduct = async ()=>{
		try{
			const response = await axios.delete("https://dummyjson.com/products/"+props.product.id)
				console.log(response.data)
				alert("Veri başarıyla silindi.");

		}catch(e){
				console.error("Error",e)
		}
	}

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
				<button onClick={()=>{deleteProduct()}} className="btn btn-danger">Sil</button>
			</div>
		</div>
	);
}
