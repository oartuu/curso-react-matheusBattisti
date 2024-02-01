import { Outlet } from 'react-router-dom'
import Container from './components/layout/Container'
import { Link } from 'react-router-dom'
function App() {

  return (
    <>
      <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/company"}>Empresa</Link>
          <Link to={"/contacts"}>Contato</Link>
          <Link to={"/newproject"}>Novo Projeto</Link>
      </div>
      <Container>
      <Outlet/>
      </Container>
      <h2>footer</h2>
    </>
  )
}

export default App
