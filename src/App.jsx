import { Outlet } from 'react-router-dom'
import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
function App() {

  return (
    <>
      <NavBar/>
      <Container customClass="min_height">
        <Outlet/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
