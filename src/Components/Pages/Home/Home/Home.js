import React from 'react'
import Banner from '../Banner/Banner'
import Clients from '../Clients/Clients'
import Contact from '../Contact/Contact'
import Works from '../Works/Works'

const Home = () => {
    return (
        <div>
            <Banner />
            <Works />
            <Clients />
            <Contact/>
        </div>
    )
}

export default Home
