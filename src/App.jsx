import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import RecipeDetail from "./pages/RecipeDetail"


function Layout(){
  return (
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}
const App = () => {
  return (
    <div className='bg-black'>
      <Router>
      <Navbar/>
      <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path='recipies/:id' element={<RecipeDetail />} />
      </Routes>
      </Router>
    </div>

  )
}

export default App
