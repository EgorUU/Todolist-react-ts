import React, { FC } from 'react'
import { Route, Routes, Outlet, Router } from 'react-router-dom'
// Pages

import Header from './pages/Header'

import Main from './pages/Main'


//


const App: FC = () => {    
    return (
        <>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route path="/:category" element={<Main />}></Route>
                    
                </Route>
            </Routes>
        </>
    )

}

export default App