import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Nav, Navbar,  Container,  } from 'react-bootstrap'


const Nava = ({children}) => {
    return(
      <>
      <Navbar collapseOnSelect expand="lg" sticky="top" className='bg-info'>
          <Container>
            <Nav.Link ><h1 className='text-dark'>Div<span className='text-primary'>Geek</span></h1></Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav  justify-content-between">
              <Nav className="me-auto  d-flex  ">
              </Nav>
              <Nav>
                <Nav.Link className='nav' href='#inicio' ><h5 className='text-dark text-center'>Inicio</h5></Nav.Link>
                <Nav.Link  className='nav' href='#sagas' ><h5 className='text-dark text-center'>Sobre nosotos</h5></Nav.Link>
                <Nav.Link className='nav' href='#ver'><h5 className='text-dark text-center'>Proyectos</h5></Nav.Link>
                <Nav.Link className='nav' href='#ver'><h5 className='text-darktext-center'>Tareas</h5></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      {children}
      <div className='text-white d-flex justify-content-center  bg-dark ' >
        <div >
          <p ><span className='ancho-letra-copy'> © </span> DivGeeks Industries/ From SFFN</p>
        </div>
      </div>
    </>
    )
}
export default Nava;