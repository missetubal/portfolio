import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import About from '../pages/About/About.screen';
import Home from '../pages/Home/Home.screen';

import { AnimatePresence } from 'framer-motion'

const AnimatedRoute: React.FC = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoute;