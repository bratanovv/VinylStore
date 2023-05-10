import React from 'react';
import {Button, Card, Container, Form, ListGroup, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)


    return (
        <Container className=" d-flex  justify-content-center align-items-center p-5">

            <Card className=" shadow p-3 mb-5 bg-white rounded">
                <h3 className="m-auto mb-3">{isLogin ? 'АВТОРИЗАЦИЯ' : 'РЕГИСТРАЦИЯ'}</h3>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email адрес</Form.Label>
                        <Form.Control type="email" placeholder="Email"/>
                        <Form.Text className="text-muted">
                            Никому не называйте свои личные данные для входа.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type="password" placeholder="Пароль"/>
                    </Form.Group>


                    <Button variant="outline-success" className="btn btn-outline-success w-100" type="submit">
                        {isLogin?   'Войти' : 'Регистрация'}
                    </Button>
                    <Row>
                    {isLogin?
                    <div>или <NavLink to={REGISTRATION_ROUTE}> Зарегистрироваться</NavLink></div> :
                        <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войти</NavLink></div>
                    }
                    </Row>

                </Form>
            </Card>
        </Container>
    );
};

export default Auth;