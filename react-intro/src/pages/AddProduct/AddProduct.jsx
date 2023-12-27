import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function AddProduct() {

    const [data, setData] = useState({
        title: "",
        description: "",
        price: "",
        rating: "",
        stock: "",
        category: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data, [e.target.name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            title: data.title,
            description: data.description,
            price: data.price,
            rating: data.rating,
            stock: data.stock,
            category: data.category,
        }
        axios.post("https://dummyjson.com/products/add", userData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error)
                }
            })
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='container col-md-3'>
                    <h1>Add Product</h1>

                    <div className='mb-3 '>
                        <label className='form-label'>Title</label>
                        <input
                            type="text"
                            className='form-control'
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <input
                            type="text"
                            className='form-control'
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Price</label>
                        <input
                            type="text"
                            className='form-control'
                            name="price"
                            value={data.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Rating</label>
                        <input
                            type="text"
                            className='form-control'
                            name="rating"
                            value={data.rating}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Stock</label>
                        <input
                            type="text"
                            className='form-control'
                            name="stock"
                            value={data.stock}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Category</label>
                        <input
                            type="text"
                            className='form-control'
                            name="category"
                            value={data.category}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-3">
                        <button type="submit" className='btn btn-info '>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
