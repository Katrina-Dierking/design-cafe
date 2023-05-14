import React from 'react'
import {Header, Footer} from '../index'
import "../../assets/styling/layout.scss"

const Layout = ({title, children}) => {
 
    return (
        <section className='layout'>
            <Header />
            <h1>{title}</h1>
            <main>{children}</main>
            <Footer />
        </section>
    )
}

export default Layout