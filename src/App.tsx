import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />

        <Route path='*' element={<Navigate to='/' />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
