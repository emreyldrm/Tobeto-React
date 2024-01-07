import React, { useState, useEffect } from 'react'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import CarService from '../services/productService'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions/cartActions'
import { toast } from "react-toastify"

export default function CarList() {

    const dispatch = useDispatch()

    const [cars, setCars] = useState([])

    useEffect(()=>{
        let carService = new CarService()
        carService.getCars().then(result=>setCars(result.data))
    },[])

    const handleAddToCart = (car) =>{
        dispatch(addToCart(car))
        toast.success(`${car.modelName} sepete eklendi.`)
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Model Yılı</Table.HeaderCell>
                        <Table.HeaderCell>Model İsmi</Table.HeaderCell>
                        <Table.HeaderCell>Durum</Table.HeaderCell>
                        <Table.HeaderCell>Kira Ücreti</Table.HeaderCell>
                        <Table.HeaderCell>Marka İsmi</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        cars.map(car => (
                            <Table.Row key={car.id}> 
                                <Table.Cell>{car.modelYear}</Table.Cell>
                                <Table.Cell><Link to={`/products/${car.id}`}>{car.modelName}</Link></Table.Cell>
                                <Table.Cell>{car.situation}</Table.Cell>
                                <Table.Cell>{car.dailyPrice}</Table.Cell>
                                <Table.Cell>{car.brand.name}</Table.Cell>
                                <Table.Cell><Button onClick={()=>handleAddToCart(car)}>Sepete Ekle</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
