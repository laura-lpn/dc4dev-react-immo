import './App.css'
import Advert from './Advert'
import { BrowserRouter, Route, Routes } from'react-router-dom'
import AdvertDetails from './components/AdvertDetails'
import FormAdvert from './components/FormAdvert'
import Signup from './components/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Advert/>} />
        <Route path="/adverts/create" element={<FormAdvert />} />
        <Route path="/adverts/:id/edit" element={<FormAdvert />} />
        <Route path="/adverts/:id" element={<AdvertDetails/>} />
        {/* <Route path="/auth/signin" element={<Signin/>} /> */}
        <Route path="/auth/signup" element={<Signup/>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
