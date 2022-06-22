import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import {Button, Container, Form, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'




const Bodys= () => {
    return(
        <main>
            <div className='hero d-flex align-items-center  justify-content-center '>
                <div>
                    <div>
                        <h1 className='text-white'>Diseño y desarrollo web <span className='text-info'>Freelancer</span></h1>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="88" height="88" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff4500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <circle cx="12" cy="11" r="3"></circle>
                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                </svg>
                        </div>
                        <div>
                            <p className='text-white'>Carlos Paz, Cordoba, Argentina</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className=' boton'>Contactarnos</button>
                    </div>
                </div>
            </div>
            <section className='contenedor-principal me-auto ms-auto '>
                <Container className=' bg-light mt-4 mb-4 sombra '  style={{borderRadius:10}}>
                    <Row className='mb-5' >
                        <div className='d-flex justify-content-center'>
                            <h1 className='text-center'>Nuestros servicios</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-lg-4 col-12'>
                            <div className='justify-content-center d-flex'>
                                <div>
                                    <div className='d-flex justify-content-center'>
                                        <h2 className='text-info text-center'>Diseño web</h2>
                                    </div>
                                    <div className='justify-content-center d-flex'>
                                        <div className='justify-content-center d-flex bg-warning  ' style={{width: 100, height:100,borderRadius:60, alignItems:'center'}} >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brush" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M3 21v-4a4 4 0 1 1 4 4h-4"></path>
                                                <path d="M21 3a16 16 0 0 0 -12.8 10.2"></path>
                                                <path d="M21 3a16 16 0 0 1 -10.2 12.8"></path>
                                                <path d="M10.6 9a9 9 0 0 1 4.4 4.4"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <p className='text-center'>Maecenas condimentum quam tellus, vitae pharetra est accumsan dignissim.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className='justify-content-center d-flex'>
                                <div>
                                    <div  className='d-flex justify-content-center'>
                                        <h2 className='text-info text-center'>Diseño web</h2>
                                    </div>
                                    <div className='justify-content-center d-flex'>
                                        <div className='justify-content-center d-flex bg-warning  ' style={{width: 100, height:100,borderRadius:60, alignItems:'center'}} >
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-android" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff4500" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <line x1="4" y1="10" x2="4" y2="16"></line>
                                                    <line x1="20" y1="10" x2="20" y2="16"></line>
                                                    <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0"></path>
                                                    <line x1="8" y1="3" x2="9" y2="5"></line>
                                                    <line x1="16" y1="3" x2="15" y2="5"></line>
                                                    <line x1="9" y1="18" x2="9" y2="21"></line>
                                                    <line x1="15" y1="18" x2="15" y2="21"></line>
                                                </svg>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple" width="48" height="48" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00b341" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z"></path>
                                                    <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2"></path>
                                            </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <p className='text-center'>Maecenas condimentum quam tellus, vitae pharetra est accumsan dignissim.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <div className='justify-content-center d-flex'>
                                <div>
                                    <div  className='d-flex justify-content-center'>
                                        <h2 className='text-info text-center'>Diseño web</h2>
                                    </div>
                                    <div className='justify-content-center d-flex'>
                                        <div className='justify-content-center d-flex bg-warning  ' style={{width: 100, height:100,borderRadius:60, alignItems:'center'}} >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <circle cx="6" cy="19" r="2"></circle>
                                                <circle cx="17" cy="19" r="2"></circle>
                                                <path d="M17 17h-11v-14h-2"></path>
                                                <path d="M6 5l14 1l-1 7h-13"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <p className='text-center'>Maecenas condimentum quam tellus, vitae pharetra est accumsan dignissim.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 d-flex justify-content-center'>
                            <h3>Contacto</h3>
                        </div>
                    </Row>
                    <div className='bg-secondary formulario' >
                        <div className='d-flex justify-content-center mb-4'>
                            <h2 className='text-dark text-center'>Contactanos luego de llenar el siguiente formulario</h2>
                        </div>
                        <Row>
                            <div className='col-lg-6 col-12'>
                                <div className='d-flex justify-content-center'>
                                    <p className='text-white text-center font-weight-bold'>Nombre</p>
                                </div>
                                <Form>
                                    <Form.Control type="Text" placeholder="Tu nombre" />
                                </Form>
                            </div>
                            <div className='col-lg-6 col-12'>
                                <div className='d-flex justify-content-center'>
                                    <p className='text-white text-center font-weight-bold'>Telefono</p>
                                </div>
                                <Form>
                                    <Form.Control type="Text" placeholder="Tu telefono" />
                                </Form>
                            </div>
                        </Row>
                        <Row className='mt-2'>
                            <div className='col-12'>
                                <div className='d-flex justify-content-center'>
                                    <p className='text-white text-center font-weight-bold'>Email</p>
                                </div>
                                <Form>
                                    <Form.Control type="Text" placeholder="Tu Email" />
                                </Form>
                            </div>
                        </Row>
                        <Row className='mt-2'>
                            <div className=' col-12'>
                                <div className='d-flex justify-content-center'>
                                    <p className='text-white text-center font-weight-bold'>Mensaje</p>
                                </div>
                                <Form>
                                    <Form.Control as="textarea" rows={11} />
                                </Form>
                            </div>
                        </Row>
                        <Row className='mt-4'>
                            <Form>
                                <button  className='boton w-100'><h3 className='text-center '>Enviar</h3></button>
                            </Form>
                        </Row>
                    </div>
                </Container>
            </section>
        </main>
    )
}
export default Bodys;