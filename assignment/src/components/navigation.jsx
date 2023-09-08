import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Page from '../pages/Page'

const Navgitaion = () => {
  return (
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/page" element={<Page></Page>}></Route>
     </Routes>
  )
}

export default Navgitaion
