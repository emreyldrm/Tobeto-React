import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories></Categories>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Routes>
                            <Route path='/' Component={ProductList} />
                            <Route path='/products' Component={ProductList} />
                            <Route path='/products/:id' Component={ProductDetail} />
                            <Route path='/cart' Component={CartDetail} />
                        </Routes>
                    </GridColumn>
                </GridRow>
            </Grid>

        </div>
    )
}
