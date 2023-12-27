import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import CarService from '../services/productService'

export default function ProductDetail() {
  let { id } = useParams()

  const [car, setCar] = useState({})

  useEffect(()=>{
      let carService = new CarService()
      carService.getCarsById(id).then(result=>setCar(result.data))
  },[])


  return (
    <div>
     
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='/images/avatar/large/steve.jpg'
            />
            <Card.Header>{car.id}</Card.Header>
            <Card.Meta>{car.modelName}</Card.Meta>
            <Card.Description>
              <strong>{car.brand?.name}</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}
