import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProductModel } from '../../models/responses/ProductModel';
import ProductService from '../../services/productService';

type Props = {}

const ProductDetail = (props: Props) => {
    // const location = useLocation(); //query string
    const params = useParams<{id:string}>(); //location
    const [product, setProduct] = useState<ProductModel>()

    useEffect(() => {
        if (params.id) {
            ProductService.getById(parseInt(params.id)).then(response => {
                setProduct(response.data);
            });
        }
        
    },[]);

  return (
    <div className="container mt-5 md-10" style={{ width: '25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="card">
        <img src={product?.thumbnail} className="card-img-top rounded" alt="..." style={{ maxWidth: '100%', maxHeight: '60%', height: 'auto'  }}/>
            <div className="card-body">
                <h5 className="card-title">{product?.title}</h5>
                <p className="card-text">{product?.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{product?.title}</li>
                <li className="list-group-item">{product?.brand}</li>
                <li className="list-group-item">{product?.price}</li>
                <li className="list-group-item">{product?.category}</li>
                <li className="list-group-item">{product?.rating}</li>
            </ul>
    </div>
</div>
  )
}

export default ProductDetail