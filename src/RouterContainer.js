import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Country from './Reusable/Country'
import PointSale from './Reusable/PointSale'

export default function RouterContainer() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/country' element={<Country />}></Route>
                <Route path='/pointsale' element={<PointSale />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
