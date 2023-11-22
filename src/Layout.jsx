import React from 'react'
import Header from './header/Header'
// import Home from './home/Home'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
