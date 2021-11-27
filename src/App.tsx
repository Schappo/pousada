import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Section from './components/Section'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes >
          <Route path="/home" element={<Section content={<Introduction />} />} />
          <Route path="/teste" element={<Introduction />} />

          <Route path="/*" element={<Navigate replace to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
