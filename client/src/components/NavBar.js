import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>VinylStore</Navbar.Brand>
                <Nav className="me-auto">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Пластинка"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-dark">Искать</Button>
                    </Form>

                </Nav>

                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-5" href={ADMIN_ROUTE}>ПАНЕЛЬ АДМИНИСТРАТОРА</Nav.Link>
                        <Nav.Link href={BASKET_ROUTE}>КОРЗИНА</Nav.Link>
                    </Nav>
                    :

                    <form className="form-inline my-2 my-lg-0" action={LOGIN_ROUTE}>
                        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => user.setIsAuth(true)}
                                type="submit">ВОЙТИ
                        </button>
                    </form>
                }


            </Container>
        </Navbar>


    );
});

export default NavBar;