import React from 'react'
import MyHeader from './MyHeader'
import Slider from './Slider'
import Services from './Services'
import Features from './Features'
import Footer from './Footer'

export default function Home() {
    return (
        <div>
            <MyHeader />
            <Slider />
            <Services />
            <Features />
            <Footer />
        </div>
    )
}
