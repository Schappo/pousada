import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Home from './components/Home'
import Section from './components/Section'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes >
          <Route path="/home" element={<Section content={<Home />} />} />
          <Route path="/teste" element={<Home />} />

          <Route path="/*" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
